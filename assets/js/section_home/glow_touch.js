let home_img = document.querySelector('.home__image__tm');

let is_glow = false;

home_img.addEventListener('click', () =>
{

  if(!is_glow)
  {
    home_img.style.animation = 'blob ease-in-out 25s infinite, glow ease-in-out 1.5s 1';
    is_glow = true;

    setTimeout(() =>
    {
      home_img.style.animation = 'blob ease-in-out 25s infinite';
      is_glow = false;
    }, 1500);
  }

});