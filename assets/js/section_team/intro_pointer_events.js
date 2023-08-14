window.addEventListener('load', () =>
{
  if(window.innerWidth > 1020)
  {
    setTimeout(() =>
    {
      document.querySelector('.tamilmandram_team').style['pointer-events'] = 'all';

    }, 5500);
  }
  else
  {
    setTimeout(() =>
    {
      document.querySelector('.tamilmandram_team').style['pointer-events'] = 'all';

    }, 0);
  }
});