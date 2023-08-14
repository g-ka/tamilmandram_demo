let is_once = JSON.parse(localStorage.getItem('is_once')) || false;

window.addEventListener('load', () =>
{
  console.log(is_once);
  if(!is_once)
  {
    is_once = true;
    localStorage.setItem('is_once', JSON.stringify(is_once));
  }
  else
  {
    let top_bar = document.querySelectorAll('.hover_styles');
    top_bar.forEach(thing =>
    {
      thing.classList.remove('hidden3');
    });

    document.querySelector('.nav_bar__club_name').classList.remove('hidden4');

    document.querySelector('.home__paragraph__quote').style['transition'] = 'opacity 1s 0s, transform 1s 0s';
    document.querySelector('.home__paragraph__desc').style['transition'] = 'opacity 1s 0.3s, transform 1s 0.3s';
    document.querySelector('.home__paragraph__buttons').style['transition'] = 'opacity 1s 0.6s, transform 1s 0.6s';
    document.querySelector('.home__image__tm').style['transition'] = 'opacity 1s 0.3s, transform 1s 0.3s';
  }
});

// window.addEventListener('unload', () =>
// {
//   localStorage.removeItem('is_once');
// });