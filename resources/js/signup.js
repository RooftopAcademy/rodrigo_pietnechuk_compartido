const signupForm = document.querySelector("#signup-form");

signupForm.password.addEventListener("input", function () {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;
  const validityMessage = regex.test(this.value) ? "" :
    "La contraseña debe contener entre 8 y 30 caracteres, y por lo menos una minúscula" +
    " una mayúscula y un número"

  this.setCustomValidity(validityMessage);
});

signupForm.confirmpassword.addEventListener("input", function () {
  const validityMessage = signupForm.password.value === this.value ? "" : "Las contraseñas no son iguales";
  this.setCustomValidity(validityMessage);
});
