const themeIcon = document.getElementById('themeIcon');
const moon = document.getElementById('moonIcon');
const sun = document.getElementById('sunIcon');
const root = document.documentElement;

let isDark = root.classList.contains('dark');  

function showSunHideMoon() {
  moon.classList.add('translate-y-full', 'opacity-0');
  moon.classList.remove('-translate-y-1/2', 'opacity-100');

  sun.classList.remove('translate-y-full', 'opacity-0');
  sun.classList.add('-translate-y-1/2', 'opacity-100');
}

function showMoonHideSun() {
  sun.classList.add('translate-y-full', 'opacity-0');
  sun.classList.remove('-translate-y-1/2', 'opacity-100');

  moon.classList.remove('translate-y-full', 'opacity-0');
  moon.classList.add('-translate-y-1/2', 'opacity-100');
}

function setTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    showSunHideMoon();
    isDark = true;
  } else {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    showMoonHideSun();
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

 
themeIcon.addEventListener('click', () => {
  setTheme(isDark ? 'light' : 'dark');
});
