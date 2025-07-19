// Fix for conditional options display in service request section

document.addEventListener('DOMContentLoaded', function() {
    // Partner service conditional options
    const partnerServiceRadios = document.querySelectorAll('input[name="partnerService"]');
    const partnerFittingOptions = document.getElementById('partnerFittingOptions');
    
    partnerServiceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (partnerFittingOptions) {
                if (this.value === 'yes') {
                    partnerFittingOptions.style.display = 'block';
                } else {
                    partnerFittingOptions.style.display = 'none';
                    // Clear selections when hiding
                    const innerRadios = partnerFittingOptions.querySelectorAll('input[type="radio"]');
                    innerRadios.forEach(r => r.checked = false);
                }
            }
        });
    });
    
    // Gift service conditional options
    const giftServiceRadios = document.querySelectorAll('input[name="giftService"]');
    const giftFrequencyOptions = document.getElementById('giftFrequencyOptions');
    
    giftServiceRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (giftFrequencyOptions) {
                if (this.value === 'yes') {
                    giftFrequencyOptions.style.display = 'block';
                } else {
                    giftFrequencyOptions.style.display = 'none';
                    // Clear selections when hiding
                    const innerRadios = giftFrequencyOptions.querySelectorAll('input[type="radio"]');
                    innerRadios.forEach(r => r.checked = false);
                }
            }
        });
    });
});