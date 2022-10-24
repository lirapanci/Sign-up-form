var submitBtn = document.getElementById('submit-btn');
var tryBtn = document.getElementById('try-btn');

function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(validRegex)) {

        return true;

    } else {

        return false;

    }

}

function submitForm() {
    var inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        var input = inputs[i];

        if (input.type != "email") {
            if (input.value == "") {
                input.parentNode.parentNode.classList.add("has-error");
            } else {
                input.parentNode.parentNode.classList.remove("has-error");
            }
        } else {
            if (ValidateEmail(input)) {
                input.parentNode.parentNode.classList.remove("has-error");
            } else {
                input.parentNode.parentNode.classList.add("has-error");
            }

        }
    }
}

tryBtn.addEventListener('click', submitForm);
submitBtn.addEventListener('click', submitForm);