const langToggle = document.getElementById("langToggle");
const activePill = document.getElementById("activePill");
const btnFa = document.getElementById("btnFa");
const btnEn = document.getElementById("btnEn");

function movePillTo(button) {
  const parentRect = langToggle.getBoundingClientRect();
  const btnRect = button.getBoundingClientRect();
  const offset = btnRect.left - parentRect.left;
  const width = btnRect.width;

   
  const targetX = offset + (width / 2 - activePill.offsetWidth / 2);
  activePill.style.left = targetX + "px";

   
  [btnFa, btnEn].forEach(b => (b.style.color = "#555"));
  button.style.color = "#fff";
}

 
movePillTo(btnFa);

btnFa.addEventListener("click", () => movePillTo(btnFa));
btnEn.addEventListener("click", () => movePillTo(btnEn));

 
window.addEventListener("resize", () => {
  const currentLeft = parseInt(activePill.style.left, 10);
  const faRect = btnFa.getBoundingClientRect();
  const enRect = btnEn.getBoundingClientRect();

   
  const faCenter = faRect.left + faRect.width / 2;
  const enCenter = enRect.left + enRect.width / 2;
  const pillCenter = langToggle.getBoundingClientRect().left + currentLeft + activePill.offsetWidth / 2;

  const currentActive = Math.abs(pillCenter - faCenter) < Math.abs(pillCenter - enCenter) ? btnFa : btnEn;
  movePillTo(currentActive);
});
