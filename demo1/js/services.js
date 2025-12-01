document.addEventListener("DOMContentLoaded", () => {
  // سکشن خدمات
  const servicesSection = document.getElementById("services").closest(".max-w-6xl");
  // کارت‌ها
  const serviceCards = servicesSection.querySelectorAll(".grid > div");

  // حالت اولیه: نامرئی و پایین‌تر
  gsap.set(serviceCards, { opacity: 0, y: 80 });

  let animated = false;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;

          // انیمیشن ورود کارت‌ها
          gsap.to(serviceCards, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.25 // یکی‌یکی با فاصله
          });

          obs.unobserve(servicesSection); // فقط بار اول اجرا بشه
        }
      });
    },
    {
      threshold: 0.3 // وقتی حدود ۳۰٪ سکشن دیده شد
    }
  );

  observer.observe(servicesSection);
});
