const btnResetPassword = document.querySelector(".forgetForm");
console.log(btnResetPassword);
btnResetPassword.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = new FormData(btnResetPassword);

  let data = {
    email: formData.get("emailaddress"),
  };
  console.log(data);
  window.location.href = "./Signin.html";
});
