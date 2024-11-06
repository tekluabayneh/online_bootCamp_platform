$(function () {
  $(".canvas_open").on("click", (e) => {
    e.stopPropagation(); // Prevent window click from firing
    $(".offcanvas_menu_wrapper").addClass("active_links");
  });

  $(".canvas_close").on("click", (e) => {
    e.stopPropagation();
    $(".offcanvas_menu_wrapper").removeClass("active_links");
  });

  window.addEventListener("click", () => {
    $(".offcanvas_menu_wrapper").removeClass("active_links");
  });

  $(".offcanvas_menu_wrapper").on("click", (e) => {
    e.stopPropagation();
  });

  // Scroll event for header
  $(window).on("scroll", () => {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 12) {
      $(".header").addClass("header_active");
      $("#container").addClass("container_active");
    } else {
      $(".header").removeClass("header_active");
      $("#container").removeClass("container_active");
    }
  });
});
