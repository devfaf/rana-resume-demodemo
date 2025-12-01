document.addEventListener("DOMContentLoaded", () => {
   
  const servicesSection = document.getElementById("services").closest(".max-w-6xl");
   
  const serviceCards = servicesSection.querySelectorAll(".grid > div");

   
  gsap.set(serviceCards, { opacity: 0, y: 80 });

  let animated = false;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;

           
          gsap.to(serviceCards, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.25  
          });

          obs.unobserve(servicesSection);  
        }
      });
    },
    {
      threshold: 0.3  
    }
  );

  observer.observe(servicesSection);
});
