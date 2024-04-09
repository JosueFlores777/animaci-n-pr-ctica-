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

/* */
  var lastScrollTop = 0;

  function handleVideoZoom() {
    var scrollPosition = window.scrollY;
    var scrollDirection = scrollPosition > lastScrollTop ? 'down' : 'up';
    lastScrollTop = scrollPosition;

    var videoContainer = document.querySelector('.video-container');

    // Modificamos la lógica aquí para ajustar el comportamiento según tus especificaciones
    if (scrollDirection === 'down' && scrollPosition > 200) {
      videoContainer.classList.add('zoom1');
    } else {
      videoContainer.classList.remove('zoom1');
    }
  }
window.addEventListener('scroll', handleVideoZoom);
document.addEventListener('DOMContentLoaded', handleVideoZoom);

/* */

$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var parallax = scrollTop / 2;

  if ($(window).width() <= 1024) {
    $("figure:nth-child(2)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(5)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(8)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(8)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(11)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(12)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(14)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(17)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(20)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(23)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(26)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(29)").css("transform", "translateY(" + parallax + "px)");
  } else {
    $("figure:nth-child(2)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(4)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(6)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(8)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(10)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(13)").css("transform", "translateY(" + parallax + "px)");
    $("figure:nth-child(15)").css("transform", "translateY(" + parallax + "px)");
   
  }
});





