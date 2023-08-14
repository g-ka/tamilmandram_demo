document.querySelector('.nav_bar__mobile_menu').addEventListener('click', () =>
  {
      document.querySelector('.menu').style.left = '0';
      document.querySelector('.close').style.opacity = '1';
      document.querySelector('.close').style.cursor = 'pointer';
      document.querySelector('.close').style["pointer-events"] = 'auto';
  })

  document.querySelector('.close').addEventListener('click', () =>
  {
    document.querySelector('.menu').style.left = '100vw';
    document.querySelector('.close').style.opacity = '0';
    document.querySelector('.close').style["pointer-events"] = 'none';
  })

  let sets = document.querySelectorAll('.menu_options');
  sets.forEach(element =>
  {
    element.addEventListener('click', () =>
    {
      document.querySelector('.menu').style.left = '100vw';
      document.querySelector('.close').style.opacity = '0';
      document.querySelector('.close').style["pointer-events"] = 'none';
    })
  })