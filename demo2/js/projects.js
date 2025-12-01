document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const indicator = document.getElementById("tab-indicator");
  const cards = document.querySelectorAll(".card");

  const defaultTab = "portrait";  
  setActiveTabInstant(defaultTab);
  showCards(defaultTab, true);

   
  function setActiveTabInstant(tabName) {
    tabs.forEach(tab => {
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

   
  function setActiveTab(tabName) {
    tabs.forEach(tab => {
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
  }

   
  function showCards(tabName, withAnimation = true) {
    const visibleCards = [];

    cards.forEach(card => {
      if (card.dataset.category === tabName) {
        card.style.display = "block";
        visibleCards.push(card);
      } else {
        card.style.display = "none";
      }
    });

    gsap.killTweensOf(cards);

    if (withAnimation) {
      gsap.fromTo(
        visibleCards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15
        }
      );
    } else {
      gsap.set(visibleCards, { opacity: 1, y: 0 });
    }

     
    visibleCards.forEach(card => {
      card.onmouseenter = () => {
        gsap.to(card, {
          duration: 0.25,
          ease: "power2.out"
        });
      };
      card.onmouseleave = () => {
        gsap.to(card, {
          duration: 0.25,
          ease: "power2.out"
        });
      };
    });
  }

   
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const tabName = tab.dataset.tab;
      setActiveTab(tabName);
      showCards(tabName, true);
    });
  });
});
