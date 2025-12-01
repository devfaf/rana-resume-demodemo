document.querySelectorAll(".btn-animated").forEach(btn => {
  const iconDown = btn.querySelector(".icon-down");
  const iconUp = btn.querySelector(".icon-up");

  btn.addEventListener("mouseenter", () => {
    iconDown.classList.add("goDown");
    iconUp.classList.add("comeDown");
  });

  iconDown.addEventListener("animationend", () => {
    iconDown.classList.remove("goDown");
  });

  iconUp.addEventListener("animationend", () => {
    iconUp.classList.remove("comeDown");
  });
});
