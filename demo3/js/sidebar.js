document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".scroll-to-section");
  const sections = document.querySelectorAll("section");

   
  sections.forEach(sec => {
    sec.style.display = sec.id === "home" ? "block" : "none";
    sec.style.opacity = sec.id === "home" ? "1" : "0";
  });

   
  const initial = document.querySelector('.scroll-to-section[href="#home"]');
  if (initial) setActiveLink(initial);

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      const currentSection = [...sections].find(sec => sec.style.display === "block");

      if (currentSection && currentSection !== targetSection) {
        gsap.to(currentSection, {
          duration: 0.3,
          x: 100,
          opacity: 0,
          ease: "power2.in",
          onComplete: () => {
            currentSection.style.display = "none";
            currentSection.style.transform = "translateX(0)";
            targetSection.style.display = "block";
            gsap.fromTo(targetSection, { x: -100, opacity: 0 }, { duration: 0.3, x: 0, opacity: 1, ease: "power2.out" });
          }
        });
      } else if (!currentSection) {
        targetSection.style.display = "block";
        gsap.fromTo(targetSection, { x: -100, opacity: 0 }, { duration: 0.3, x: 0, opacity: 1, ease: "power2.out" });
      }

       
      setActiveLink(link);
    });
  });

  function setActiveLink(activeLink) {
     
    navLinks.forEach(l => l.classList.remove("active-link", "text-[var(--color-primary)]", "-translate-x-2"));

     
    activeLink.classList.add("active-link", "text-[var(--color-primary)]", "-translate-x-2");
  }
});
