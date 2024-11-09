$(function () {
  $("[data-panel]").on("click", function () {
    // Get the clicked panel data
    const panelToActivate = $(this).data("panel");

    // Remove 'active' class from all panels
    $(".panel-login, .panel-signup, .panel-forgot").removeClass("active");

    // Add 'active' class to the specified panel
    $(panelToActivate).addClass("active");
  });

  // Toggle the password show icon
  $(".pwd-toggle").on("click", () => {
    const passwordField = $(".eva_password");
    if (passwordField.attr("type") === "password") {
      passwordField.attr("type", "text");
    } else {
      passwordField.attr("type", "password");
    }
  });
});

// Handle the login and register auth
document.addEventListener("DOMContentLoaded", () => {
  const btnSignin = document.getElementById("signupForm");
  let showMessage = document.querySelector(".showMessage");

  // Only add event listener if `btnSignin` exists
  if (btnSignin) {
    btnSignin.addEventListener("submit", (e) => {
      e.preventDefault();
      Register(e);
    });
  } else {
    console.error("Element with id 'signupForm' not found.");
  }

  // Register function for handling form submission
  const Register = async (e) => {
    e.preventDefault();

    const formData = new FormData(btnSignin);
    const inputs = document.querySelectorAll(
      'input[name="eva_firstname"], input[name="eva_lastname"], input[name="eva_email"], input[name="eva_password"]'
    );

    // Reset the border color of all inputs before validation
    inputs.forEach((input) => (input.style.borderColor = ""));

    // Validate each field
    let isValid = true;
    inputs.forEach((input) => {
      const value = formData.get(input.name);
      if (!value) {
        input.style.borderColor = "red";
        isValid = false;
      }
    });

    // Stop execution if the form is invalid
    if (!isValid) {
      showMessage.innerHTML = "Please fill out all required fields.";
      return;
    }

    // Collect data to send to the server
    const data = {
      firstname: formData.get("eva_firstname"),
      lastname: formData.get("eva_lastname"),
      password: formData.get("eva_password"),
      email: formData.get("eva_email"),
    };

    // Post the data to the server
    const response = await fetch("http://localhost:3000/api/users/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    // Display message from server response
    showMessage.innerHTML = result.message;
    if (!result.success) {
      return; // Prevent navigation on failure
    }

    // Reset the input values on success
    inputs.forEach((input) => {
      input.value = "";
    });

    // Navigate to home page on successful registration
    window.location.href = "../Protectted/index.html";
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const authTitle = document.querySelector(".auth-title");
  let showSignMessage = authTitle.previousElementSibling;
  const btnLogin = document.querySelector(".loginForm");
  if (!btnLogin) {
    console.error("Form element with class 'loginForm' not found.");
    return;
  }

  const Login = async (e) => {
    e.preventDefault();

    // Creating FormData instance directly from btnLogin to ensure the form data is captured
    let formData = new FormData(btnLogin);

    // Validate each field and set border color if empty
    const inputs = document.querySelectorAll(
      'input[name="eva_firstname"], input[name="eva_lastname"], input[name="eva_email"], input[name="eva_password"]'
    );

    inputs.forEach((input) => (input.style.borderColor = ""));

    let isValid = true;
    inputs.forEach((input) => {
      const value = formData.get(input.name);
      if (!value) {
        input.style.borderColor = "red";
        isValid = false;
      }
    });

    let data = {
      email: formData.get("eva_email"),
      password: formData.get("eva_password"),
    };

    const response = await fetch("http://localhost:3000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    showSignMessage.innerHTML = result.message;

    // Prevent navigation on failure
    if (!result.success) return;

    inputs.forEach((input) => {
      input.value = "";
    });

    // store the toke  in the localStorage
    localStorage.setItem("authToken", result.token);

    window.location.href = "../Protectted/index.html";
  };

  btnLogin.addEventListener("submit", Login);
});
