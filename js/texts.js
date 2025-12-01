// فارسی‌ها: حرکت راست به چپ بی‌وقفه
gsap.to(".track-fa", {
  xPercent: -100,
  duration: 30,
  ease: "linear",
  repeat: -1,
  modifiers: {
    xPercent: gsap.utils.wrap(-100, 0)
  }
});

// انگلیسی‌ها: حرکت چپ به راست بی‌وقفه
gsap.to(".track-en", {
  xPercent: 100,
  duration: 30,
  ease: "linear",
  repeat: -1,
  modifiers: {
    xPercent: gsap.utils.wrap(0, 100)
  }
});

// ورود متن اولیه
gsap.fromTo("#title",
  { x: 200, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
);

// p از سمت چپ وارد شود
gsap.fromTo("#subtitle",
  { x: -200, opacity: 0 },
  { x: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.5 }
);

