document.addEventListener("DOMContentLoaded", () => {
   
  const blogSection = document.getElementById("blog").closest("section");
   
  const blogCards = blogSection.querySelectorAll(".card");

   
  gsap.set(blogCards, { opacity: 0, y: 80 });

  let animated = false;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;

           
          gsap.to(blogCards, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.25
          });

          obs.unobserve(blogSection);  
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(blogSection);
});
