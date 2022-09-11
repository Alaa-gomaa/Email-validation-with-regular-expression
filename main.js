let email = document.getElementById("email");
let number = document.getElementById("number");
let span = document.getElementsByTagName("span");

email.onkeydown = function() {
    const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ig;
    if (regEx.test(email.value)) {
        span[0].innerHTML = "Your email is valid";
        span[0].style.color = "lime";
    } else {
        span[0].innerHTML = "Your email is Invalid";
        span[0].style.color = "red";
    }
};
number.onkeydown = function() {

    const regEx = /^[0-9]{10}$/ig;
    if (regEx.test(number.value)) {
        span[1].innerHTML = "Your number is valid";
        span[1].style.color = "lime";
    } else {
        span[1].innerHTML = "Your number is Invalid";
        span[1].style.color = "red";
    }
};