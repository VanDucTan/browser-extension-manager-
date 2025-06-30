document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('themeSwitch');

  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.body.className = `${savedTheme}-theme`;

  themeSwitch.addEventListener('click', () => {
    const current = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    const next = current === 'light' ? 'dark' : 'light';

    document.body.classList.remove(`${current}-theme`);
    document.body.classList.add(`${next}-theme`);
    localStorage.setItem('theme', next);
  });
});
