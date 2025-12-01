document.addEventListener("DOMContentLoaded", () => {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");

   
  document.addEventListener("mousemove", (e) => {
    gsap.to(dot, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: "power2.out"
    });

    gsap.to(ring, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
      ease: "power2.out"
    });
  });

   
  document.addEventListener("mousedown", () => {
    gsap.to(dot, {
      width: 40,
      height: 40,
      opacity: 0.3,  
      duration: 0.3,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(dot, {
          width: 8,
          height: 8,
          opacity: 0.5,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    });
  });
});
