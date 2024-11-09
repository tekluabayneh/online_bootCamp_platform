const btnResetPassword = document.querySelector(".forgetForm");
btnResetPassword.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(btnResetPassword);

  let data = {
    email: formData.get("emailaddress"),
  };
  console.log(data);

  setInterval(() => {}, 100);

  window.location.href = "../Home.html";
});
