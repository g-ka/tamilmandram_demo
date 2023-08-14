let html = document.querySelector('html');
let is_dark_creations = JSON.parse(localStorage.getItem('is_dark'));

if(is_dark_creations)
{
  document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--text3)';
  document.querySelector('body').style['background-color'] = 'black';
  document.querySelector('.yt img').src = './assets/images/creations/youtube c.png';
  document.querySelector('.ig img').src = './assets/images/creations/instagram c.png';
  document.querySelector('.sp img').src = './assets/images/creations/spotify c.png';
  document.querySelector('.wp img').src = './assets/images/creations/wordpress c.png';
  html.classList.add('dark_mode');
}
else
{
  document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--black)';
  document.querySelector('body').style['background-color'] = null;
  html.classList.remove('dark_mode');
}