
  const el = document.getElementById('typed-title');
  const phrases = [
    'برنامه‌نویس وب',
    'طراح رابط کاربری',
    'متخصص سئو'
  ];

  const typeSpeed = 70;    
  const deleteSpeed = 50;  
  const holdTime = 2500;   

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (!deleting) {
       
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex === current.length) {
         
        el.classList.add('blinking');
        setTimeout(() => {
          deleting = true;
          el.classList.remove('blinking');  
          tick();
        }, holdTime);
        return;
      }

      setTimeout(tick, typeSpeed);
    } else {
       
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(tick, typeSpeed);
        return;
      }

      setTimeout(tick, deleteSpeed);
    }
  }

  tick();

