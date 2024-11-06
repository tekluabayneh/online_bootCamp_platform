$(function () {
  //   $("a[data-panel='.panel-login']").on("click", () => {
  //     $(".panel-forgot").removeClass("active");
  //     $(".panel-signup").removeClass("active");
  //     $(".panel-login").addClass("active");
  //   });

  //   $("a[data-panel='.panel-signup']").on("click", () => {
  //     $(".panel-forgot").removeClass("active");
  //     $(".panel-signup").addClass("active");
  //     $(".panel-login").removeClass("active");
  //   });

  //   $("a[data-panel='.panel-forgot']").on("click", () => {
  //     $(".panel-signup").removeClass("active");
  //     $(".panel-login").removeClass("active");
  //     $(".panel-forgot").addClass("active");
  //   });

  $("[data-panel]").on("click", function () {
    //  this get the click panel data
    const panelToActivate = $(this).data("panel");
    console.log(panelToActivate);

    // Remove 'active' class from all panels
    $(".panel-login, .panel-signup, .panel-forgot").removeClass("active");

    // Add 'active' class to the specified panel
    $(panelToActivate).addClass("active");
  });

  // toggle the password show icon
  $(".pwd-toggle").on("click", () => {
    if ($(".eva_password").attr("type") === "password") {
      $(".eva_password").attr("type", "text");
    } else {
      $(".eva_password").attr("type", "password");
    }
  });

  
});
