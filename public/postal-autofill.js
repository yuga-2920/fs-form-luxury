// Postal Code Auto-fill functionality for Japanese addresses
document.addEventListener('DOMContentLoaded', function() {
    initializePostalAutofill();
});

function initializePostalAutofill() {
    const postalInput1 = document.getElementById('postalCode1');
    const postalInput2 = document.getElementById('postalCode2');
    const prefectureSelect = document.getElementById('prefecture');
    const cityInput = document.getElementById('city');
    const addressInput = document.getElementById('streetAddress');

    if (!postalInput1 || !postalInput2) return;

    // Handle input on first postal code field
    postalInput1.addEventListener('input', function(e) {
        let value = e.target.value.replace(/[^\d]/g, '');
        e.target.value = value;

        // Move to second field when 3 digits are entered
        if (value.length === 3) {
            postalInput2.focus();
        }

        checkAndFetchAddress();
    });

    // Handle input on second postal code field
    postalInput2.addEventListener('input', function(e) {
        let value = e.target.value.replace(/[^\d]/g, '');
        e.target.value = value;

        checkAndFetchAddress();
    });

    // Handle backspace on second field
    postalInput2.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace' && e.target.value === '') {
            e.preventDefault();
            postalInput1.focus();
            postalInput1.setSelectionRange(postalInput1.value.length, postalInput1.value.length);
        }
    });

    // Function to check if both fields are complete and fetch address
    function checkAndFetchAddress() {
        const postal1 = postalInput1.value;
        const postal2 = postalInput2.value;

        if (postal1.length === 3 && postal2.length === 4) {
            const fullPostalCode = postal1 + '-' + postal2;
            fetchAddressFromPostalCode(fullPostalCode);
        }
    }

    // Find the postal code inputs container
    const postalWrapper = postalInput1.parentElement.parentElement; // postal-code-group
    const postalInputsDiv = postalInput1.parentElement; // postal-code-inputs

    // Add search button
    const searchButton = document.createElement('button');
    searchButton.type = 'button';
    searchButton.className = 'postal-search-btn';
    searchButton.innerHTML = '住所検索';

    searchButton.addEventListener('click', function() {
        const postal1 = postalInput1.value;
        const postal2 = postalInput2.value;

        if (postal1.length === 3 && postal2.length === 4) {
            const fullPostalCode = postal1 + '-' + postal2;
            fetchAddressFromPostalCode(fullPostalCode);
        } else {
            showPostalError('郵便番号を正しく入力してください（例: 123-4567）');
        }
    });

    postalInputsDiv.appendChild(searchButton);

    // Add error message container
    const errorContainer = document.createElement('div');
    errorContainer.className = 'postal-error-container';
    errorContainer.style.display = 'none';
    postalWrapper.appendChild(errorContainer);
}

async function fetchAddressFromPostalCode(postalCode) {
    const cleanPostalCode = postalCode.replace('-', '');

    // Show loading state
    showLoadingState(true);

    try {
        // Using the free zipcloud API for Japanese postal codes
        const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${cleanPostalCode}`);
        const data = await response.json();

        if (data.status === 200 && data.results && data.results.length > 0) {
            const result = data.results[0];

            // Fill in the address fields
            fillAddressFields({
                prefecture: result.address1,
                city: result.address2,
                address: result.address3
            });

            showNotification('住所を自動入力しました', 'success');
        } else {
            showNotification('郵便番号に該当する住所が見つかりませんでした', 'error');
        }
    } catch (error) {
        console.error('Postal code lookup error:', error);

        // Fallback to local data if API fails
        const localAddress = getLocalPostalData(cleanPostalCode);
        if (localAddress) {
            fillAddressFields(localAddress);
            showNotification('住所を自動入力しました（オフラインデータ）', 'success');
        } else {
            showNotification('住所の取得に失敗しました', 'error');
        }
    } finally {
        showLoadingState(false);
    }
}

function fillAddressFields(addressData) {
    const prefectureSelect = document.getElementById('prefecture');
    const cityInput = document.getElementById('city');
    const addressInput = document.getElementById('streetAddress');

    if (prefectureSelect && addressData.prefecture) {
        // Find and select the matching prefecture option
        const options = prefectureSelect.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].text === addressData.prefecture ||
                options[i].value === addressData.prefecture) {
                prefectureSelect.selectedIndex = i;
                // Trigger change event for any dependent logic
                prefectureSelect.dispatchEvent(new Event('change', { bubbles: true }));
                break;
            }
        }
    }

    if (cityInput && addressData.city) {
        cityInput.value = addressData.city;
        cityInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    if (addressInput && addressData.address) {
        addressInput.value = addressData.address;
        addressInput.dispatchEvent(new Event('input', { bubbles: true }));
    }
}

function showLoadingState(isLoading) {
    const searchBtn = document.querySelector('.postal-search-btn');
    if (searchBtn) {
        searchBtn.disabled = isLoading;
        searchBtn.innerHTML = isLoading ? '検索中...' : '住所検索';
    }
}

function showNotification(message, type = 'info') {
    // Reuse the notification system from form-validation if available
    if (window.formValidator && window.formValidator.showNotification) {
        window.formValidator.showNotification(message, type);
    } else {
        // Simple fallback
        const notification = document.createElement('div');
        notification.className = `postal-notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 12px 24px;
            background: ${type === 'success' ? '#4caf50' : '#f44336'};
            color: white;
            border-radius: 4px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

function showPostalError(message) {
    const errorContainer = document.querySelector('.postal-error-container');
    if (errorContainer) {
        errorContainer.textContent = message;
        errorContainer.style.display = 'block';
        errorContainer.style.color = '#f44336';
        errorContainer.style.fontSize = '14px';
        errorContainer.style.marginTop = '8px';

        // Hide after 5 seconds
        setTimeout(() => {
            errorContainer.style.display = 'none';
        }, 5000);
    }
}

// Fallback local postal code data (sample for major areas)
function getLocalPostalData(postalCode) {
    const localData = {
        '1000001': { prefecture: '東京都', city: '千代田区', address: '千代田' },
        '1500001': { prefecture: '東京都', city: '渋谷区', address: '神宮前' },
        '1600001': { prefecture: '東京都', city: '新宿区', address: '歌舞伎町' },
        '5300001': { prefecture: '大阪府', city: '大阪市北区', address: '梅田' },
        '6000001': { prefecture: '京都府', city: '京都市下京区', address: '烏丸通' },
        // Add more as needed
    };

    return localData[postalCode] || null;
}

// Add CSS for the search button
const style = document.createElement('style');
style.textContent = `
.postal-code-inputs {
    display: flex;
    align-items: center;
    gap: 10px;
}

.postal-search-btn {
    padding: 8px 16px;
    background: var(--accent-gold);
    color: var(--background-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s ease;
    white-space: nowrap;
    margin-left: 10px;
}

.postal-search-btn:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.postal-search-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
`;
document.head.appendChild(style);

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializePostalAutofill,
        fetchAddressFromPostalCode
    };
}