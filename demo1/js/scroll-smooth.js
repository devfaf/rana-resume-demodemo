  document.addEventListener("DOMContentLoaded", function () {
    const smoothLinks = document.querySelectorAll('a.scroll-to-section[href^="#"]');

    smoothLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href").slice(1);
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  });