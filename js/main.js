// Theme toggle logic
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setTheme(dark) {
  if (dark) {
    document.body.classList.add('dark');
    themeIcon.src = 'assets/images/icon-moon.svg';
    themeIcon.alt = 'Dark mode';
  } else {
    document.body.classList.remove('dark');
    themeIcon.src = 'assets/images/icon-sun.svg';
    themeIcon.alt = 'Light mode';
  }
}

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme === 'dark');

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    setTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Simple install button logic (demo)
document.querySelectorAll('.install-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.textContent = 'Installed!';
    btn.disabled = true;
    btn.style.background = '#22c55e';
  });
});
