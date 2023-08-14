let translate_btn = document.querySelector('.home__paragraph__buttons__translate');
let menu_set = document.querySelectorAll('.hover_styles');
let mobile_menu_set = document.querySelectorAll('.styles');

let is_eng = JSON.parse(localStorage.getItem('is_eng'));

translate_btn.addEventListener('click', () =>
{
  if(!is_eng)
  {
    document.querySelector('.home__paragraph__buttons__translate').innerHTML = 't';
    document.querySelector('title').innerHTML = 'Tamil Linguistic Club';
    document.querySelector('.home__paragraph__buttons__translate').style['font-size'] = '1.3rem';
    document.querySelector('.home__paragraph__buttons__translate').style['padding'] = '0.4rem 1.05rem';
    menu_set.forEach(option =>
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
    document.querySelector('.home__paragraph__quote').innerHTML = `"Let the whole world experience the pleasure I've gained"`;
    document.querySelector('.home__paragraph__desc').innerHTML = `Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
    document.querySelector('.home__paragraph').style['font-family'] = `'Poppins', sans-serif`;

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

    is_eng = true;
    localStorage.setItem('is_eng', JSON.stringify(is_eng));
  }
  else
  {
    document.querySelector('.home__paragraph__buttons__translate').innerHTML = 'En';
    document.querySelector('title').innerHTML = 'தமிழ் மன்றம்';
    document.querySelector('.home__paragraph__buttons__translate').style['font-size'] = '1.2rem';
    document.querySelector('.home__paragraph__buttons__translate').style['padding'] = '0.4rem 0.6rem';
    menu_set.forEach(option =>
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
    document.querySelector('.home__paragraph__quote').innerHTML = `"யாம் பெற்ற இன்பம் பெறுக இவ்வையகம்"`;
    document.querySelector('.home__paragraph__desc').innerHTML = `தமிழ் மன்றம், தேசியத் தொழில்நுட்பக் கழகம் திருச்சியில் ஐம்பது ஆண்டுகளுக்கு மேலாக இயங்கி வரும் மிகப் பழமையான குழுவாகும். நாங்கள் பெற்றுள்ள தமிழ்ச் செல்வத்தை, இன்பத்தை எல்லோருக்கும் பகிர்ந்து கொடுக்கும் நோக்கத்துடன் செயல்பட்டு வருகிறோம்`;
    document.querySelector('.home__paragraph').style['font-family'] = `'Noto Sans Tamil', sans-serif`;

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

    is_eng = false;
    localStorage.setItem('is_eng', JSON.stringify(is_eng));
  }
});

// window on load 

let load_home_eng = JSON.parse(localStorage.getItem('is_eng')) || false;
localStorage.setItem('is_eng', JSON.stringify(load_home_eng));

window.addEventListener('load', () =>
{
  if(load_home_eng)
  {
    document.querySelector('.home__paragraph__buttons__translate').innerHTML = 't';
    document.querySelector('title').innerHTML = 'Tamil Linguistic Club';
    document.querySelector('.home__paragraph__buttons__translate').style['font-size'] = '1.3rem';
    document.querySelector('.home__paragraph__buttons__translate').style['padding'] = '0.4rem 1.05rem';
    menu_set.forEach(option =>
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
    document.querySelector('.home__paragraph__quote').innerHTML = `"Let the whole world experience the pleasure I've gained"`;
    document.querySelector('.home__paragraph__desc').innerHTML = `Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
    document.querySelector('.home__paragraph').style['font-family'] = `'Poppins', sans-serif`;

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
    document.querySelector('.home__paragraph__buttons__translate').innerHTML = 'En';
    document.querySelector('title').innerHTML = 'தமிழ் மன்றம்';
    document.querySelector('.home__paragraph__buttons__translate').style['font-size'] = '1.2rem';
    document.querySelector('.home__paragraph__buttons__translate').style['padding'] = '0.4rem 0.6rem';
    menu_set.forEach(option =>
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
    document.querySelector('.home__paragraph__quote').innerHTML = `"யாம் பெற்ற இன்பம் பெறுக இவ்வையகம்"`;
    document.querySelector('.home__paragraph__desc').innerHTML = `தமிழ் மன்றம், தேசியத் தொழில்நுட்பக் கழகம் திருச்சியில் ஐம்பது ஆண்டுகளுக்கு மேலாக இயங்கி வரும் மிகப் பழமையான குழுவாகும். நாங்கள் பெற்றுள்ள தமிழ்ச் செல்வத்தை, இன்பத்தை எல்லோருக்கும் பகிர்ந்து கொடுக்கும் நோக்கத்துடன் செயல்பட்டு வருகிறோம்`;
    document.querySelector('.home__paragraph').style['font-family'] = `'Noto Sans Tamil', sans-serif`;

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
});


