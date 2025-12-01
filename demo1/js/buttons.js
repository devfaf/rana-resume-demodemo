gsap.utils.toArray(".shine-btn").forEach((btn) => {
  const shine = btn.querySelector(".shine");

   
  const btnWidth = btn.offsetWidth;

   
  gsap.fromTo(shine,
    { x: -btnWidth },           
    {
      x: btnWidth * 2,          
      duration: 0.6,
      repeat: -1,
      repeatDelay: 2,
      ease: "linear"
    }
  );

   
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.08,
      duration: 0.4,
      ease: "power2.out"
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  });
});
