/* THEME SWITCH */
const themeSwitch = document.getElementById('theme-switcher');
  
if (themeSwitch) {
  themeSwitch.addEventListener('click', (e) => {
    e.preventDefault();
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// Set initial theme from localStorage or system preference
const savedTheme = localStorage.getItem('theme') || 
  (globalThis.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);
