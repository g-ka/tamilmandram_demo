let is_eng_team = JSON.parse(localStorage.getItem('is_eng')) || false;
let menu_set_team = document.querySelectorAll('.hover_styles');

if(is_eng_team)
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

  document.querySelector('.intro_quote').innerHTML = `<span class="divided hidden5">Divided</span> <span class="by_teams hidden1">by teams</span> <br> <span class="united hidden6">u<span class="nit">ni<span class="t">t</span></span>ed</span> <span class="by hidden1">by</span> <span class="thamizh hidden1">thami<span class="zh">zh</span>.</span>`;
  document.querySelector('.intro_quote').style['font-family'] = `'Poppins', sans-serif`;

  if(window.innerWidth <= 768)
  document.querySelector('.team_name').style['width'] = '10.5rem';
  else
  document.querySelector('.team_name').style['width'] = '16.3rem';
  
  document.querySelector('.tamilmandram_team__desc').innerHTML = `PALTHURAI team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;

  document.querySelector('.team5').style['white-space'] = 'nowrap';
  document.querySelector('.team1').innerHTML = `PALTHURAI`;
  document.querySelector('.team2').innerHTML = `TAMIZHUKKAAGA`;
  document.querySelector('.team3').innerHTML = `CINEMA`;
  document.querySelector('.team4').innerHTML = `RAVUSU`;
  document.querySelector('.team5').innerHTML = `VIDEO EDITING`;
  document.querySelector('.team6').innerHTML = `DESIGN`;
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

  document.querySelector('.intro_quote').innerHTML = `<span class="divided hidden5">பிறிந்தோம்</span> <span class="by_teams hidden1">பணியால்</span> <br> <span class="united hidden6">இ<span class="nit"><span class="t">ணை</span></span>ந்தோம்</span> <span class="thamizh hidden1">தமி<span class="zh">ழா</span>ல்.</span>`;
  document.querySelector('.intro_quote').style['font-family'] = `'Noto Sans Tamil', sans-serif`;

  if(window.innerWidth <= 768)
  document.querySelector('.team_name').style['width'] = '10.5rem';
  else
  document.querySelector('.team_name').style['width'] = '16.8rem';
  
  document.querySelector('.tamilmandram_team__desc').innerHTML = `தமிழார்வம் கொண்டு  நுட்பமாக சிந்திக்கும் திறன் கொண்டவர்களுக்கும், சவாலான புது கேள்விகள் உருவாக்குவதில் தேர்ந்து தேர்ந்து இருப்பவர்களுக்கான அணி`;

  document.querySelector('.team5').style['white-space'] = 'normal';
  document.querySelector('.team1').innerHTML = `பல்திறன்`;
  document.querySelector('.team2').innerHTML = `தமிழுக்காக`;
  document.querySelector('.team3').innerHTML = `சினிமா`;
  document.querySelector('.team4').innerHTML = `ரவுசு`;
  document.querySelector('.team5').innerHTML = `காணொளி தொகுத்தல்`;
  document.querySelector('.team6').innerHTML = `வடிவமைப்பு`;
}