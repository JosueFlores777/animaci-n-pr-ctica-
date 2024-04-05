const scrollers = document.querySelectorAll(".scroller");


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show'); 
    } else {
      entry.target.classList.remove('show'); 
    }
  });
});

//cart
const hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));


if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}




function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(2)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax4 = scrollTop / 2;
  $("figure:nth-child(4)").css("transform", "translateY(" + parallax4 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(6)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(8)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(10)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(12)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(13)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(15)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(17)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(19)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(21)").css("transform", "translateY(" + parallax2 + "px)");
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(23)").css("transform", "translateY(" + parallax2 + "px)");
});
