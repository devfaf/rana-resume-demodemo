document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const indicator = document.getElementById("tab-indicator");
  const slider = document.querySelector(".overflow-x-auto.scroll-smooth.snap-x");
  const cards = slider.querySelectorAll(".card");

   
   
  cards.forEach(card => {
    card.style.display = "none";
  });

   
  const defaultCards = [];
  cards.forEach(card => {
    if (card.dataset.category === "portrait") {
      defaultCards.push(card);
      card.style.display = "block";
    }
  });
  gsap.set(defaultCards, { opacity: 0, y: 80 });  

   
  function setActiveTabInstant(tabName) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === tabName;
      tab.classList.toggle("text-[var(--color-primary)]", isActive);
      tab.classList.toggle("text-[var(--color-text)]", !isActive);

      if (isActive) {
        gsap.set(indicator, {
          width: tab.offsetWidth,
          left: tab.offsetLeft,
          backgroundColor: "var(--color-primary)"
        });
      }
    });
  }
  setActiveTabInstant("portrait");

   
  function activateTab(tabName, withAnimation = true) {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.tab === tabName;
      tab.classList.toggle("text-[var(--color-primary)]", isActive);
      tab.classList.toggle("text-[var(--color-text)]", !isActive);

      if (isActive) {
        gsap.to(indicator, {
          width: tab.offsetWidth,
          left: tab.offsetLeft,
          backgroundColor: "var(--color-primary)",
          duration: 0.6,
          ease: "power2.out"
        });
      }
    });

    const visibleCards = [];
    cards.forEach((card) => {
      if (card.dataset.category === tabName) {
        visibleCards.push(card);
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });

    gsap.killTweensOf(cards);

    if (withAnimation) {
      gsap.set(visibleCards, { opacity: 0, y: 80 });
      gsap.to(visibleCards, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.25
      });
    } else {
      gsap.set(visibleCards, { opacity: 1, y: 0 });
    }
  }

   
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateTab(tab.dataset.tab, true);
    });
  });

   
  let animated = false;
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
           
          gsap.to(defaultCards, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            stagger: 0.25
          });
          obs.unobserve(slider);
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(slider);
});
