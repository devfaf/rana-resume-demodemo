 
const root = document.documentElement;
let isDark = root.classList.contains('dark');  

 
const moonIconMobile = document.getElementById('iconMoon');
const sunIconMobile = document.getElementById('iconSun');
const moonIconDesktop = document.getElementById('moonIcon');
const sunIconDesktop = document.getElementById('sunIcon');

 
const themeToggleBtn = document.getElementById('themeToggleBtn');  
const themeIcon = document.getElementById('themeIcon');  
const themeToggleSection = document.getElementById('themeToggleSection');  

 
function showSunHideMoon(moon, sun) {
  if (!moon || !sun) return;
  moon.classList.add('translate-y-full', 'opacity-0');
  moon.classList.remove('-translate-y-1/2', 'opacity-100');

  sun.classList.remove('translate-y-full', 'opacity-0');
  sun.classList.add('-translate-y-1/2', 'opacity-100');
}

function showMoonHideSun(moon, sun) {
  if (!moon || !sun) return;
  sun.classList.add('translate-y-full', 'opacity-0');
  sun.classList.remove('-translate-y-1/2', 'opacity-100');

  moon.classList.remove('translate-y-full', 'opacity-0');
  moon.classList.add('-translate-y-1/2', 'opacity-100');
}

 
function setTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    showSunHideMoon(moonIconMobile, sunIconMobile);
    showSunHideMoon(moonIconDesktop, sunIconDesktop);
    isDark = true;
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    showMoonHideSun(moonIconMobile, sunIconMobile);
    showMoonHideSun(moonIconDesktop, sunIconDesktop);
    isDark = false;
  }
}

 
(function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    setTheme(saved);
  } else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }
})();

 
if (themeToggleBtn) {
  themeToggleBtn.addEventListener('click', () => {
    setTheme(isDark ? 'light' : 'dark');
  });
}

if (themeIcon) {
  themeIcon.addEventListener('click', () => {
    setTheme(isDark ? 'light' : 'dark');
  });
}

if (themeToggleSection) {
  themeToggleSection.addEventListener('click', () => {
    setTheme(isDark ? 'light' : 'dark');
  });
}
