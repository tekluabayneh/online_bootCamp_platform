let NavigateLinks = document.querySelectorAll(".find_team_flow_wrapper a");
let Show_user_Auth_level = document.querySelector(".Show_user_Auth_level");

const IsuserIsAuthenticated = async () => {
  try {
    const token = window.localStorage.getItem("authToken");

    const response = await fetch("http://localhost:3000/user/check", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await response.json();

    if (!result.success) {
      // Redirect to login if not authorized
      setInterval(() => {
        window.location.href = "../Auth/Signin.html";
      }, 2000);

      Show_user_Auth_level.innerHTML = result.message;
      Show_user_Auth_level.style.color = "red";
    } else {
      console.log("User authenticated:", result);
      Show_user_Auth_level.style.color = "green";
      Show_user_Auth_level.innerHTML = result.message;
      setInterval(() => {
        window.location.href = "../Protectted/SEP/index.html";
      }, 3000);
    }
  } catch (error) {
    console.log("Error during authentication:", error);
  }
};

NavigateLinks.forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    IsuserIsAuthenticated();
  });
});
