 
const btn = document.getElementById("scrollTopBtn");
const circle = document.getElementById("progressCircle");

 
const radius = parseFloat(circle.getAttribute("r"));
const circumference = 2 * Math.PI * radius;

 
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

 
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;

   
  const progress = Math.min(scrollTop / docHeight, 1);

   
  gsap.to(circle, {
    strokeDashoffset: circumference * (1 - progress),
    duration: 0.3,
    ease: "power2.out"
  });
});

 
btn.addEventListener("click", () => {
  gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.inOut" });
});
