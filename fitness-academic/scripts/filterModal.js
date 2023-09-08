// JavaScript to toggle row background color on checkbox change
document.querySelectorAll('.form-check-input').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        const row = this.closest('.custom-row');
        if (this.checked) {
            row.classList.add('checked');
        } else {
            row.classList.remove('checked');
        }
    });
});