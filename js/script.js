let head = document.head,
  link = document.createElement('link');
link.rel = 'stylesheet';
if (localStorage.getItem('themeStyle') === 'dark') {
  link.href = 'css/style2.css';
  document.getElementById('theme-controller').setAttribute('checked', true);
}

else {
  link.href = 'css/style1.css';
}
head.appendChild(link);

document.getElementById('theme-controller').addEventListener('change', ev => {
  let btn = ev.target;

  if (btn.checked) {
    link.href = 'css/style2.css';
    localStorage.setItem('themeStyle', 'dark');
  }
  else {
    link.href = 'css/style1.css';
    localStorage.setItem('themeStyle', 'light');
  }
});