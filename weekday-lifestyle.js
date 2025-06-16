// Initialize weekday lifestyle sub-options functionality
function initializeWeekdayLifestyleOptions() {
    // Handle weekday lifestyle checkboxes
    const weekdayCheckboxes = document.querySelectorAll('input[name="weekdayLifestyle"]');
    
    weekdayCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // Find the parent card
            const parentCard = this.closest('.weekday-card');
            if (parentCard) {
                const subOptions = parentCard.querySelector('.sub-options');
                if (subOptions) {
                    // Toggle sub-options based on checkbox state
                    subOptions.style.display = this.checked ? 'block' : 'none';
                    
                    // If unchecked, also uncheck all sub-checkboxes
                    if (!this.checked) {
                        const subCheckboxes = subOptions.querySelectorAll('input[type="checkbox"]');
                        subCheckboxes.forEach(subCheckbox => {
                            subCheckbox.checked = false;
                            // Trigger change event to hide any nested inputs
                            subCheckbox.dispatchEvent(new Event('change'));
                        });
                    }
                }
            }
        });
    });
    
    // Handle "その他" (Other) checkboxes for meeting people
    const meetingPeopleGroups = [
        { checkboxName: 'externalMeetingPeople', inputName: 'externalMeetingOther' },
        { checkboxName: 'internalMeetingPeople', inputName: 'internalMeetingOther' },
        { checkboxName: 'deskMeetingPeople', inputName: 'deskMeetingOther' },
        { checkboxName: 'hybridMeetingPeople', inputName: 'hybridMeetingOther' },
        { checkboxName: 'homeMeetingPeople', inputName: 'homeMeetingOther' },
        { checkboxName: 'otherMeetingPeople', inputName: 'otherMeetingOtherDetail' }
    ];
    
    meetingPeopleGroups.forEach(group => {
        const otherCheckbox = document.querySelector(`input[name="${group.checkboxName}"][value="other"]`);
        const otherInput = document.querySelector(`input[name="${group.inputName}"]`);
        
        if (otherCheckbox && otherInput) {
            otherCheckbox.addEventListener('change', function() {
                otherInput.style.display = this.checked ? 'block' : 'none';
                if (!this.checked) {
                    otherInput.value = ''; // Clear the input when unchecked
                }
            });
        }
    });
}

// Add initialization to DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWeekdayLifestyleOptions();
});