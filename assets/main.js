const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();

  // Mueve la columna 2 a la mitad de velocidad
  var parallax2 = scrollTop / 2;
  $("figure:nth-child(2)").css("transform", "translateY(" + parallax2 + "px)");

  // Mueve la columna 4 a una velocidad diferente, aquí he aumentado la velocidad para un efecto más pronunciado
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
});
