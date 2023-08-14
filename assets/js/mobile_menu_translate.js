let is_eng_mobile_menu = JSON.parse(localStorage.getItem('is_eng')) || false;
let mobile_menu_set = document.querySelectorAll('.styles');

if(is_eng_mobile_menu)
{
  mobile_menu_set.forEach(option =>
    {
      option.style['font-family'] = `'Poppins', sans-serif`;
      option.style['font-weight'] = `600`;
    });
  document.querySelector('.home_para a').innerHTML = 'HOME';
  document.querySelector('.about_para a').innerHTML = 'EVENTS';
  document.querySelector('.roadmap_para a').innerHTML = 'CREATIONS';
  document.querySelector('.courses_para a').innerHTML = 'TEAM';
  document.querySelector('.contact_para a').innerHTML = 'CONTACT';
}
else
{
  mobile_menu_set.forEach(option =>
    {
      option.style['font-family'] = `'Noto Sans Tamil', sans-serif`;
      option.style['font-weight'] = `500`;
    });
  document.querySelector('.home_para a').innerHTML = 'முகப்பு';
  document.querySelector('.about_para a').innerHTML = 'நிகழ்வுகள்';
  document.querySelector('.roadmap_para a').innerHTML = 'படைப்புகள்';
  document.querySelector('.courses_para a').innerHTML = 'அணிகள்';
  document.querySelector('.contact_para a').innerHTML = 'தொடர்புக்கு';
}