let form = document.querySelector(".form");
let passwordMatch = document.querySelector(".not-matched");

form.addEventListener("keyup", (event) => {
  let password = form.elements["password"].value;
  let confirmPassword = form.elements["confirmPassword"].value;
  if (password !== confirmPassword) {
    passwordMatch.style = "display: block";
  } else if (password === confirmPassword) {
    passwordMatch.style = "display: none";
  }
});
