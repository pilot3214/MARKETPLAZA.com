document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");
    products.forEach(product => {
        product.addEventListener("click", function () {
            alert("You clicked " + this.innerText);
        });
    });

    const contactForm = document.querySelector("#contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Message sent successfully!");
        });
    }
});
