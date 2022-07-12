let menu_btn = document.querySelector(".header__menu-btn");
menu_btn.addEventListener("click", (event) => {
  document.querySelector(".header__menu").style.display = "block";
});
let menu_close = document.querySelector(".header__menu_close");
menu_close.addEventListener("click", (event) => {
  document.querySelector(".header__menu").style.display = "none";
});
/*Functions for menu buttons START*/
function ScrollToHome() {
  document.querySelector(".header").scrollIntoView();
  document.querySelector(".header__menu").style.display = "none";
}
function ScrollToAreas() {
  document.querySelector(".areas").scrollIntoView();
  document.querySelector(".header__menu").style.display = "none";
}
function ScrollToContact() {
  document.querySelector(".contact").scrollIntoView();
  document.querySelector(".header__menu").style.display = "none";
}
function ScrollToAbout() {
  document.querySelector(".mission").scrollIntoView();
  document.querySelector(".header__menu").style.display = "none";
}
function ScrollToSolutions() {
  document.querySelector(".solutions").scrollIntoView();
  document.querySelector(".header__menu").style.display = "none";
}
function ScrollToCareers() {
  document.querySelector(".vacations").scrollIntoView();
  document.querySelector(".header__menu").style.display = "none";
}
/*Functions for menu buttons STOP*/

/*Functions for mission numbers initialization START*/
$(document).ready(function () {
  if (
    $(".mission-numbers").offset().top <=
      $(window).scrollTop() + document.body.clientHeight &&
    $(".mission-numbers").is(":visible") == true
  ) {
    nums = /[0-9/.]+/;

    $(".mission-number").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text().match(nums),
          },
          {
            easing: "swing",
            duration: 2000,
            step: function (now) {
              $(this).text(
                Math.round(now, -1) + $(this).text().replace(nums, "")
              );
            },
          }
        );
    });
  }
});
/*Functions for mission numbers initialization STOP*/

/*Function for Chains block START*/
$(".chain-line-item").hover(
  function () {
    $(this).children(".chain-description").show(500);
  },
  function () {
    $(this).children(".chain-description").hide(500);
  }
);
/*Function for Chains block STOP*/

/*Functions for slides pagination Solutions block Start */
var slideIndex = 1;

showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("solutions__list_item");
  var dots = document.getElementsByClassName("solutions__menu_item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(
      " solutions__menu_item-active",
      ""
    );
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " solutions__menu_item-active";
}
solutions_block = document.querySelector(".solutions__list");
solutions_block.addEventListener("touchmove", () => {
  plusSlide();
});
solutions_block.addEventListener("touchmove", () => {
  plusSlide();
});
/*Functions for slides pagination Solutions block STOP */