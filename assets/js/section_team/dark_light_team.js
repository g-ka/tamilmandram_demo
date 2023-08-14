let html = document.querySelector('html');
let is_dark_team = JSON.parse(localStorage.getItem('is_dark'));

if(is_dark_team)
{
  document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--text3)';
  document.querySelector('body').style['background-color'] = 'black';
  html.classList.add('dark_mode');
}
else
{
  document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--black)';
  document.querySelector('body').style['background-color'] = null;
  html.classList.remove('dark_mode');
}