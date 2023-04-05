class Form {
  constructor(form) {
    this.form = form;
  }

  matchPassword() {
    let password = this.form.elements["password"];
    let confirmPassword = this.form.elements["confirmPassword"];
    if (password.value !== confirmPassword.value) {
      password.style = "border: 1px solid red; outline: 0";
      confirmPassword.style = "border: 1px solid red; outline: 0";
      return false;
    } else if (password.value === confirmPassword.value) {
      return true;
    }
  }
}

let form = document.querySelector(".form");
let passwordMatch = document.querySelector(".not-matched");

let newForm = new Form(form);
form.addEventListener("keyup", () => {
  if (newForm.matchPassword()) {
    passwordMatch.style = "display: none";
  } else if (!newForm.matchPassword()) {
    passwordMatch.style = "display: block";
  }
});
