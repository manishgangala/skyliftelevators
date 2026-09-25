document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Floor rail: highlight current section as the visitor scrolls
  var floors = document.querySelectorAll(".floor-rail .floor");
  var sections = [];
  floors.forEach(function (floor) {
    var target = document.getElementById(floor.dataset.target);
    if (target) sections.push({ floor: floor, target: target });
  });

  function updateRail() {
    var pos = window.scrollY + window.innerHeight * 0.35;
    var active = sections[0];
    sections.forEach(function (s) {
      if (target_offset(s.target) <= pos) active = s;
    });
    sections.forEach(function (s) {
      s.floor.classList.toggle("current", s === active);
    });
  }
  function target_offset(el) {
    return el.getBoundingClientRect().top + window.scrollY;
  }
  if (sections.length) {
    window.addEventListener("scroll", updateRail, { passive: true });
    updateRail();
  }

  // Simple enquiry form: no backend yet, so confirm locally
  var form = document.querySelector("form.enquiry");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      if (status) {
        status.textContent =
          "Thanks — this form isn't yet wired to send messages. Please call or WhatsApp us directly for now, or connect an email service (see the README) to activate it.";
      }
    });
  }

  // Scroll-reveal for panels, cards, rows and section headers
  var revealTargets = document.querySelectorAll(
    ".panel, .value-item, .product-row, .gallery-tile, .timeline .step, .info-row, .section-head, .testimonial-carousel"
  );
  if (revealTargets.length) {
    if ("IntersectionObserver" in window) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
      );
      revealTargets.forEach(function (el) { revealObserver.observe(el); });
    } else {
      revealTargets.forEach(function (el) { el.classList.add("in-view"); });
    }
  }

  // Before / after slider(s)
  document.querySelectorAll(".ba-slider").forEach(function (slider) {
    var range = slider.querySelector('input[type="range"]');
    var before = slider.querySelector(".ba-before");
    var line = slider.querySelector(".ba-handle-line");
    var knob = slider.querySelector(".ba-handle-knob");
    if (!range || !before) return;
    function update(v) {
      before.style.clipPath = "inset(0 " + (100 - v) + "% 0 0)";
      if (line) line.style.left = v + "%";
      if (knob) knob.style.left = v + "%";
    }
    range.addEventListener("input", function () { update(range.value); });
    update(range.value);
  });

  // Testimonial carousel
  var carousel = document.querySelector(".testimonial-carousel");
  if (carousel) {
    var slides = carousel.querySelectorAll(".testimonial-slide");
    var dots = carousel.querySelectorAll(".testimonial-dots button");
    var current = 0;
    var timer;
    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, si) { s.classList.toggle("active", si === current); });
      dots.forEach(function (d, di) { d.classList.toggle("active", di === current); });
    }
    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { show(current + 1); }, 6000);
    }
    dots.forEach(function (d, i) {
      d.addEventListener("click", function () { show(i); restart(); });
    });
    show(0);
    restart();
  }
});
