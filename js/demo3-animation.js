  const demo3 = document.querySelector('a[href="demo3/index.html"]');
  const imgLight = document.getElementById('demo3-light');
  const imgDark = document.getElementById('demo3-dark');

  demo3.addEventListener('mouseenter', () => {
    imgLight.style.opacity = 0;
    imgDark.style.opacity = 1;
  });

  demo3.addEventListener('mouseleave', () => {
    imgLight.style.opacity = 1;
    imgDark.style.opacity = 0;
  });