const underline = document.getElementById("underline");
const btnFa = document.getElementById("btnFa");
const btnEn = document.getElementById("btnEn");

function moveUnderlineTo(button, otherButton) {
  const parentRect = button.parentElement.getBoundingClientRect();
  const btnRect = button.getBoundingClientRect();
  const offset = btnRect.left - parentRect.left;
  const width = btnRect.width;

   
  underline.style.left = offset + "px";
  underline.style.width = width + "px";

   
  button.style.color = "var(--color-primary)";
  otherButton.style.color = "gray";
}

 
moveUnderlineTo(btnFa, btnEn);

btnFa.addEventListener("click", () => moveUnderlineTo(btnFa, btnEn));
btnEn.addEventListener("click", () => moveUnderlineTo(btnEn, btnFa));
