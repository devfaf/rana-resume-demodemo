 
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuButton");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");
  const closeBtn = document.getElementById("closeMobileMenu");  
  let isOpen = false;

  btn.addEventListener("click", () => {
    if (!isOpen) {
      menu.classList.remove("hidden");
      overlay.classList.remove("hidden");

      gsap.fromTo(menu,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(menu, {
        x: "100%", opacity: 0, duration: 0.3, ease: "power2.in",
        onComplete: () => menu.classList.add("hidden")
      });
      overlay.classList.add("hidden");
    }
    isOpen = !isOpen;
  });

   
  overlay.addEventListener("click", () => {
    gsap.to(menu, {
      x: "100%", opacity: 0, duration: 0.3, ease: "power2.in",
      onComplete: () => menu.classList.add("hidden")
    });
    overlay.classList.add("hidden");
    isOpen = false;
  });

   
  closeBtn.addEventListener("click", () => {
    gsap.to(menu, {
      x: "100%", opacity: 0, duration: 0.3, ease: "power2.in",
      onComplete: () => menu.classList.add("hidden")
    });
    overlay.classList.add("hidden");
    isOpen = false;
  });
});

