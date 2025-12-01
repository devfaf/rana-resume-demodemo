const track = document.getElementById("testimonial-track");

 
function getCardStep() {
  const first = track.children[0];
  const styles = getComputedStyle(track);
  const gap = parseFloat(styles.columnGap || styles.gap || 0);
  return first.offsetWidth + gap;
}

let step = getCardStep();
let isAnimating = false;
const intervalMs = 5000;

function nextSlide() {
  if (isAnimating) return;
  isAnimating = true;

   
  gsap.to(track, {
    x: step,
    duration: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
       
      const first = track.firstElementChild;
      track.append(first);

       
      gsap.set(track, { x: 0 });

      isAnimating = false;
    }
  });
}

let timer = setInterval(nextSlide, intervalMs);

 
window.addEventListener("resize", () => {
  step = getCardStep();
});
