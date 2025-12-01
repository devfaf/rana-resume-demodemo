 
gsap.from("header", {
  y: -150,
  opacity: 0,
  duration: 0.6,
  ease: "power2.out"
});

 
gsap.fromTo(
  ".absolute.left-0 svg",
  { x: -80, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out",
    stagger: 0.15,
    delay: 0.1
  }
);
