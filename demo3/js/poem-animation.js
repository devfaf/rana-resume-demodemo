class ScatterAndReplace {
  constructor(container) {
    this.container = container;
    this.text = container.dataset.text;
    this.letters = [];
    this.fullSentence = null;
    this.scattered = true;  
    this.boundsCache = null; // کش برای جلوگیری از reflow زیاد
    this.init();
  }

  init() {
    const frag = document.createDocumentFragment();

    [...this.text].forEach(ch => {
      const span = document.createElement('span');
      span.className = 'letter';
      span.textContent = ch;
      frag.appendChild(span);
      this.letters.push(span);
    });

    this.container.appendChild(frag);

    this.fullSentence = document.createElement('div');
    this.fullSentence.className = 'full-sentence';
    this.fullSentence.textContent = this.text;
    this.container.appendChild(this.fullSentence);

    this.fullSentence.classList.remove('visible');

    this.updateBounds();  
    this.scatter(true);  
  }

  updateBounds() {
    // فقط یک بار در هر فاز layout رو می‌خونیم
    const rect = this.container.getBoundingClientRect();
    const padding = 40;
    const width = Math.max(0, rect.width - padding * 2);
    const height = Math.max(0, rect.height - padding * 2);
    this.boundsCache = { rect, padding, width, height };
  }

  scatter(initial = false) {
    const { padding, width, height } = this.boundsCache;

    requestAnimationFrame(() => {
      this.letters.forEach(span => {
        const randX = padding + Math.random() * width;
        const randY = padding + Math.random() * height;

        if (initial) {
          gsap.set(span, { x: randX, y: randY, opacity: 0 });
          gsap.to(span, { opacity: 1, duration: 1.2, ease: "power2.out" });
        } else {
          gsap.to(span, {
            x: randX,
            y: randY,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out"
          });
        }
      });
      this.scattered = true;
    });
  }

  join() {
    if (!this.scattered) return;
    this.scattered = false;

    const { rect } = this.boundsCache;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    requestAnimationFrame(() => {
      gsap.to(this.letters, {
        x: centerX,
        y: centerY,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.05,
        onComplete: () => {
          this.fullSentence.classList.add('visible');

          setTimeout(() => {
            gsap.to(this.fullSentence, {
              opacity: 0,
              duration: 1,
              ease: "power2.out",
              onComplete: () => {
                this.fullSentence.classList.remove('visible');
                this.updateBounds(); // قبل از scatter دوباره اندازه‌ها رو آپدیت کن
                this.scatter();  
              }
            });
          }, 4000);
        }
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const q1 = new ScatterAndReplace(document.getElementById('floating-poem-1'));
  const q2 = new ScatterAndReplace(document.getElementById('floating-poem-2'));

  const btn = document.getElementById('poem');
  btn.addEventListener('click', () => {
    q1.join();
    q2.join();
  });
});
