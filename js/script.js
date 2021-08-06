// Contact form client side validation
const email = document.getElementById("mail");

email.addEventListener("input", function () {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an e-mail address :)");
    } else {
        email.setCustomValidity("");
    }
});

function validateForm() {
    let formValidation = document.forms["contact"]["name"]["email"]["message"].value;
    if (formValidation == "") {
        alert("The box must be filled out");
        return false;
    }
}
