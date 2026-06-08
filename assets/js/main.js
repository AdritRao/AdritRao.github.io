document.addEventListener("DOMContentLoaded", function () {
  var fadeElements = document.querySelectorAll(
    ".fade-in, .pub-item, .list li, .content p, .video-grid a"
  );

  fadeElements.forEach(function (el, i) {
    el.classList.add("fade-in");
    el.style.transitionDelay = Math.min(i * 0.06, 0.4) + "s";
  });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add("visible");
    });
  }
});
