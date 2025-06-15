document.addEventListener('DOMContentLoaded', function() {
    const serviceItems = document.querySelectorAll('#services ul li');

    serviceItems.forEach(item => {
        item.addEventListener('click', function() {
            const description = this.querySelector('.service-description');
            if (description) {
                description.classList.toggle('expanded');
                this.classList.toggle('active');
            }
        });
    });
});

