document.addEventListener('DOMContentLoaded', function() {
    const serviceHeaders = document.querySelectorAll("#services ul li .service-header");

    serviceHeaders.forEach(header => {
        header.addEventListener("click", function(event) {
            event.stopPropagation();
            const listItem = this.closest("li");
            const description = listItem.querySelector(".service-description");
            console.log("Clicked on service header:", this.querySelector("span").textContent);
            if (description) {
                description.classList.toggle("expanded");
                listItem.classList.toggle("active");
            }
        });
    });
});

