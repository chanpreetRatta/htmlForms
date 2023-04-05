class Form {
  constructor(form) {
    this.form = form;
  }

  matchPassword() {
    let password = this.form.elements["password"];
    let confirmPassword = this.form.elements["confirmPassword"];
    if (password.value !== confirmPassword.value) {
      return false;
    } else if (password.value === confirmPassword.value) {
      return true;
    }
  }
}

let form = document.querySelector(".form");
let passwordMatch = document.querySelector(".not-matched");

passwordMatch.style = "visibility: hidden";
let newForm = new Form(form);

function updateUI(event) {
  if (newForm.matchPassword()) {
    password.style = "";
    confirmPassword.style = "";
    passwordMatch.style = "visibility: hidden";
    document.querySelector(".submit-button").disabled = false;
  } else if (!newForm.matchPassword()) {
    password.style = "border: 1px solid red; outline: 0";
    confirmPassword.style = "border: 1px solid red; outline: 0";
    passwordMatch.style = "display: block";
    document.querySelector(".submit-button").disabled = true;
  }
}

form.addEventListener("keyup", updateUI);
