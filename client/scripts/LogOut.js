let LogOut = document.querySelectorAll(".LogOut");

LogOut.forEach((logout) => {
  logout.addEventListener("click", () => {
    window.localStorage.removeItem("authToken");
  });
});

// Prevent going back to protected pages after logout
// window.addEventListener("load", () => {
//   const token = window.localStorage.getItem("authToken");

//   // Check if the token is missing
//   if (!token) {
//     // Redirect user to login page
//     window.location.href = "../Auth/Signin.html";
//   }
// });

// // Prevent the browser from caching protected pages
// window.addEventListener("unload", () => {
//   window.localStorage.removeItem("authToken");
// });
