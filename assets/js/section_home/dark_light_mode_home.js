let html = document.querySelector('html');

let is_dark = JSON.parse(localStorage.getItem('is_dark'));

document.querySelector('.home__paragraph__buttons__mode').addEventListener('click', () =>
{
  if(!is_dark)
  {
    document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--text3)';
    document.querySelector('.home__paragraph__buttons__mode__dark_light').src = './assets/images/light.png';
    document.querySelector('.home__image__tm').style['background-color'] = 'white';
    document.querySelector('body').style['background-color'] = 'black';
    document.querySelector('.home__paragraph__buttons__translate').style['background-color'] = '#f15b22';
    document.querySelector('.home__paragraph__buttons__translate').style['color'] = 'white';
    html.classList.add('dark_mode');
    is_dark = true;
    localStorage.setItem('is_dark', JSON.stringify(is_dark));
  }
  else
  {
    document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--black)';
    document.querySelector('.home__paragraph__buttons__mode__dark_light').src = './assets/images/dark.png';
    document.querySelector('.home__image__tm').style['background-color'] = null;
    document.querySelector('body').style['background-color'] = null;
    document.querySelector('.home__paragraph__buttons__translate').style['background-color'] = null;
    document.querySelector('.home__paragraph__buttons__translate').style['color'] = '#f15b22';
    html.classList.remove('dark_mode');
    is_dark = false;
    localStorage.setItem('is_dark', JSON.stringify(is_dark));
  }
});

// window on load 

let load_home_dark = JSON.parse(localStorage.getItem('is_dark')) || false;
localStorage.setItem('is_dark', JSON.stringify(load_home_dark));

window.addEventListener('load', () =>
{
  if(load_home_dark)
  {
    document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--text3)';
    document.querySelector('.home__paragraph__buttons__mode__dark_light').src = './assets/images/light.png';
    document.querySelector('.home__image__tm').style['background-color'] = 'white';
    document.querySelector('body').style['background-color'] = 'black';
    document.querySelector('.home__paragraph__buttons__translate').style['background-color'] = '#f15b22';
    document.querySelector('.home__paragraph__buttons__translate').style['color'] = 'white';
    html.classList.add('dark_mode');
  }
  else
  {
    document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--black)';
    document.querySelector('.home__paragraph__buttons__mode__dark_light').src = './assets/images/dark.png';
    document.querySelector('.home__image__tm').style['background-color'] = null;
    document.querySelector('body').style['background-color'] = null;
    document.querySelector('.home__paragraph__buttons__translate').style['background-color'] = null;
    document.querySelector('.home__paragraph__buttons__translate').style['color'] = '#f15b22';
    html.classList.remove('dark_mode');
  }
});

