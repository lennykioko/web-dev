
const darkButton = document.querySelector('#dark');
const lightButton = document.querySelector('#light');
const solarButton = document.querySelector('#solar');
const body = document.body;

darkButton.addEventListener('click', () => {
  body.classList.replace('light','dark');
  localStorage.setItem('theme', 'dark');
});

lightButton.addEventListener('click', () => {
  body.classList.replace('dark', 'light');
  localStorage.setItem('theme', 'light');
});

solarButton.addEventListener('click', () => {
  if (body.classList.contains('solar')) {
    body.classList.remove('solar');
    solarButton.style.cssText = `--bg-solar: var(--yellow)`
    solarButton.innerText = 'solarize';
    localStorage.removeItem('isSolar');
  } else {
    solarButton.style.cssText = `--bg-solar: var(white)`
    body.classList.add('solar');
    solarButton.innerText = 'normalize';
    localStorage.setItem('isSolar', true);
  }
});


// localstorage

const theme = localStorage.getItem('theme');
const isSolar = localStorage.getItem('isSolar');

if (theme) {
  body.classList.add(theme);
  isSolar && body.classList.add('solar');
}