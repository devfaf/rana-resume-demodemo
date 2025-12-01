 
function initLanguageToggle(containerId, pillId, btnFaId, btnEnId) {
  const container = document.getElementById(containerId);
  const pill = document.getElementById(pillId);
  const btnFa = document.getElementById(btnFaId);
  const btnEn = document.getElementById(btnEnId);

  if (!container || !pill || !btnFa || !btnEn) return;

  function movePillTo(button) {
    const parentRect = container.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();
    const offset = btnRect.left - parentRect.left;
    const width = btnRect.width;

     
    const targetX = offset + (width / 2 - pill.offsetWidth / 2);
    pill.style.left = targetX + "px";

     
    [btnFa, btnEn].forEach(b => (b.style.color = "#555"));
    button.style.color = "#fff";
  }

   
  movePillTo(btnFa);

   
  btnFa.addEventListener("click", () => movePillTo(btnFa));
  btnEn.addEventListener("click", () => movePillTo(btnEn));

   
  window.addEventListener("resize", () => {
    const currentLeft = parseInt(pill.style.left, 10);
    const faRect = btnFa.getBoundingClientRect();
    const enRect = btnEn.getBoundingClientRect();

    const faCenter = faRect.left + faRect.width / 2;
    const enCenter = enRect.left + enRect.width / 2;
    const pillCenter = container.getBoundingClientRect().left + currentLeft + pill.offsetWidth / 2;

    const currentActive = Math.abs(pillCenter - faCenter) < Math.abs(pillCenter - enCenter) ? btnFa : btnEn;
    movePillTo(currentActive);
  });
}

 
initLanguageToggle("langToggle", "activePill", "btnFa", "btnEn");

 
initLanguageToggle("mobileLanguageToggle", "mobileLanguagePill", "mobileBtnFa", "mobileBtnEn");
