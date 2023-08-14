let html = document.querySelector('html');
let is_dark_team = JSON.parse(localStorage.getItem('is_dark'));

if(is_dark_team)
{
  document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--text3)';
  document.querySelector('body').style['background-color'] = 'black';
  let headings_orange= document.querySelectorAll('.heading_orange');
  headings_orange.forEach(heading =>
  {
    heading.classList.add('date_gradient_orange');
  });
  let headings_yellow= document.querySelectorAll('.heading_yellow');
  headings_yellow.forEach(heading =>
  {
    heading.classList.add('date_gradient_yellow');
  });
  html.classList.add('dark_mode');
}
else
{
  document.querySelector('.nav_bar__mobile_menu i').style['color'] = 'var(--black)';
  document.querySelector('body').style['background-color'] = null;
  let headings_orange = document.querySelectorAll('.heading_orange');
  headings_orange.forEach(heading =>
  {
    heading.classList.remove('date_gradient_yellow');
  });
  let headings_yellow= document.querySelectorAll('.heading_yellow');
  headings_yellow.forEach(heading =>
  {
    heading.classList.remove('date_gradient_yellow');
  });
  html.classList.remove('dark_mode');
}