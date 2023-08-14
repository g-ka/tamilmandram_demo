let is_eng_creations = JSON.parse(localStorage.getItem('is_eng')) || false;
let menu_set_team = document.querySelectorAll('.hover_styles');

if(is_eng_creations)
{
  document.querySelector('title').innerHTML = 'Tamil Linguistic Club';
  menu_set_team.forEach(option =>
    {
      option.style['font-family'] = `'Poppins', sans-serif`;
      option.style['font-weight'] = `600`;
    });
  document.querySelector('.nav_bar__club_name').style['font-family'] = `'Poppins', sans-serif`;
  document.querySelector('.nav_bar__club_name').innerHTML = 'TamilMandram.nitt';
  document.querySelector('.nav_bar__desktop_menu__home').innerHTML = 'Home';
  document.querySelector('.nav_bar__desktop_menu__events').innerHTML = 'Events';
  document.querySelector('.nav_bar__desktop_menu__creations').innerHTML = 'Creations';
  document.querySelector('.nav_bar__desktop_menu__team').innerHTML = 'Team';
  document.querySelector('.nav_bar__desktop_menu__contact').innerHTML = 'Contact';
}
else
{
  document.querySelector('title').innerHTML = 'தமிழ் மன்றம்';
  menu_set_team.forEach(option =>
    {
      option.style['font-family'] = `'Noto Sans Tamil', sans-serif`;
      option.style['font-weight'] = `500`;
    });
  document.querySelector('.nav_bar__club_name').style['font-family'] = `'Noto Sans Tamil', sans-serif`;
  document.querySelector('.nav_bar__club_name').innerHTML = 'தமிழ்மன்றம்.nitt';
  document.querySelector('.nav_bar__desktop_menu__home').innerHTML = 'முகப்பு';
  document.querySelector('.nav_bar__desktop_menu__events').innerHTML = 'நிகழ்வுகள்';
  document.querySelector('.nav_bar__desktop_menu__creations').innerHTML = 'படைப்புகள்';
  document.querySelector('.nav_bar__desktop_menu__team').innerHTML = 'அணிகள்';
  document.querySelector('.nav_bar__desktop_menu__contact').innerHTML = 'தொடர்புக்கு';
}