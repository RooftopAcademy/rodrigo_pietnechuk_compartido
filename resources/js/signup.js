const password = document.querySelector("[name=password]");
const confirmPassword = document.querySelector("[name=confirm-password]");

password.addEventListener("input", () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/;
  const validityMessage = regex.test(password.value) ? "" :
    "La contraseña debe contener entre 8 y 30 caracteres, y por lo menos una minúscula" +
    " una mayúscula y un número"

  password.setCustomValidity(validityMessage);
});

confirmPassword.addEventListener("input", () => {
  const validityMessage = password.value === confirmPassword.value ? "" : "Las contraseñas no son iguales";
  confirmPassword.setCustomValidity(validityMessage);
});
