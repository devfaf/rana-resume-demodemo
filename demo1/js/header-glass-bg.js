  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
      header.classList.add("bg-glass");
    } else {
      header.classList.remove("bg-glass");
    }
  });