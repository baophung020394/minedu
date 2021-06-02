$(document).ready(() => {
  $(".carousel-premium").owlCarousel({
    loop: true,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    margin: 10,
    nav: true,
    center: true,
    navText: [
      "<img src='../img/premium/images/left.png'>",
      "<img src='../img/premium/images/right.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      768: {
        items: 1,
        dots: false,
      },
      1024: {
        items: 1,
        dots: false,
      },
    },
  });
  $(".carousel-children-mobile").owlCarousel({
    loop: true,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    margin: 15,
    nav: true,
    center: true,
    navText: [
      "<img src='../img/home/images/prev-btn.png'>",
      "<img src='../img/home/images/next-btn.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      768: {
        items: 1,
        dots: false,
      },
      1024: {
        items: 1,
        dots: false,
      },
    },
  });
  $(".carousel-children-desk").owlCarousel({
    loop: true,
    responsiveClass: true,
    // autoplay: true,
    // autoplayTimeout: 3000,
    // autoplayHoverPause: true,
    margin: 15,
    nav: true,
    center: true,
    navText: [
      "<img src='../img/home/images/prev-btn.png'>",
      "<img src='../img/home/images/next-btn.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      768: {
        items: 1,
        dots: false,
      },
      1024: {
        items: 1,
        dots: false,
      },
    },
  });

  // $(".carousel-children").on("translate.owl.carousel", function (e) {
  //   idx = e.item.index;
  //   $(".owl-item")
  //     .eq(idx - 1)
  //     .addClass("left");
  //   $(".owl-item")
  //     .eq(idx + 1)
  //     .addClass("right");
  // });
  $(".open-menu").on("click", function () {
    $("body").find(".menu-mobile").addClass("active");
    $("body").find(".bg-overlay-black").css({ display: "block" });
  });
  $(".close").on("click", function () {
    $("body").find(".menu-mobile").removeClass("active");
    $("body").find(".bg-overlay-black").css({ display: "none" });
  });
  $(".dropdown-icon").on("click", function () {
    $(this).parent().parent().find(".box-dropdown").addClass("active");
    $("body").find(".bg-overlay-black").css({ display: "block" });
  });

  //
  $(".menu-item-mobile a").on("click", function () {
    $(this).find(".actions").toggleClass("active");
    $("body").find(".bg-overlay").css({ display: "block" });
  });
  $(".list-services .title").on("click", function (e) {
    e.preventDefault();
    $(this).find("~.actions").toggleClass("active");
    $("body").find(".bg-overlay").css({ display: "block" });
  });
  $(".bg-overlay").on("click", function () {
    $(this).css({ display: "none" });
    $("body").find(".actions").removeClass("active");
    $("body").find(".menu-mobile-sub").removeClass("active");
  });

  $(".bg-overlay-black").on("click", function () {
    $(this).css({ display: "none" });
    $("body").find(".menu-mobile").removeClass("active");
    $("body").find(".box-dropdown").removeClass("active");
  });
  $(".list-menu .dropdown-button").on("click", function () {
    $(this).find("~ul").slideToggle(250);
  });
  $("#ez-toc-container .dropdown-button").on("click", function () {
    $(this).find("~ul").slideToggle(250);
  });
  $(".readmore-about").on("click", function (e) {
    e.preventDefault();
    $("body").find(".section-aboutst666 .item-about").toggleClass("active");
  });
  $(".menu-bottom .item-menu").on("click", function (e) {
    e.preventDefault();
    $(this).find(".menu-mobile-sub").addClass("active");
    $("body").find(".bg-overlay").css({ display: "block" });
  });
  if ($(window).width() >= 992) {
    $(".header").removeClass("header-mobile");
  } else {
    $(".header").addClass("header-mobile");
  }
  $(window).resize(function () {
    var width = $(window).width();
    // $('.header').addClass('header-mobile');
    console.log(width);
    if (width >= 992) {
      $(".header").removeClass("header-mobile");
    } else {
      $(".header").addClass("header-mobile");
    }
  });
});
function openday(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();