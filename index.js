function validateEmail(email) {
  var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email);
}


var btnSubmit = document.querySelector(".submitButton");


btnSubmit.addEventListener("click", () => {

  let emailInput = document.querySelector(".form-control");
    if(!validateEmail(emailInput.value)){
    
    let svgError = document.querySelector("#error-svg");
    let errorText = document.querySelector(".errorMsg");

    svgError.style.visibility = "visible";
    errorText.style.visibility = "visible";
    emailInput.classList.add("invalidEmail");
  }

})