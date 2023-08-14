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

  let p1 = document.querySelectorAll('.p1');
  p1.forEach(para1 =>
  {
    para1.style['font-family'] = `'Poppins', sans-serif`;
  });
  document.querySelector('.induction_p .checking .p1').innerHTML = 'INDUCTION';
  document.querySelector('.tamil_classes_p .checking .p1').innerHTML = 'TAMIL CLASSES';
  document.querySelector('.vidhai_p .checking .p1').innerHTML = 'VIDHAI';
  document.querySelector('.nittilam_p .checking .p1').innerHTML = 'NITTILAM';
  document.querySelector('.kathir_p .checking .p1').innerHTML = 'KATHIR';
  document.querySelector('.pongal_p .checking .p1').innerHTML = 'PONGAL';
  document.querySelector('.new_year_p .checking .p1').innerHTML = 'TAMIZH NEW YEAR';
  document.querySelector('.guest_lec_p .checking .p1').innerHTML = 'GUEST LECTURES';
  document.querySelector('.inter_contest_participation_p .checking .p1').innerHTML = 'INTER CONTESTS';
  document.querySelector('.collab_events_p .checking .p1').innerHTML = 'COLLAB EVENTS';
  document.querySelector('.bharathi_100_p .checking .p1').innerHTML = 'BHARATHI 100';


  let p2 = document.querySelectorAll('.p2');
  p2.forEach(para2 =>
  {
    para2.style['font-family'] = `'Poppins', sans-serif`;
  });
  document.querySelector('.induction_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.tamil_classes_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.vidhai_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.nittilam_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.kathir_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.pongal_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.new_year_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.guest_lec_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.inter_contest_participation_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.collab_events_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
  document.querySelector('.bharathi_100_p .p2').innerHTML = 'Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison';
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

  let p1 = document.querySelectorAll('.p1');
  p1.forEach(para1 =>
  {
    para1.style['font-family'] = `'Noto Sans Tamil', sans-serif`;
  });
  document.querySelector('.induction_p .checking .p1').innerHTML = 'இண்டக்ஷுன்';
  document.querySelector('.tamil_classes_p .checking .p1').innerHTML = 'தமிழ் பாடம்';
  document.querySelector('.vidhai_p .checking .p1').innerHTML = 'விதை';
  document.querySelector('.nittilam_p .checking .p1').innerHTML = 'நித்திலம்';
  document.querySelector('.kathir_p .checking .p1').innerHTML = 'கதிர்';
  document.querySelector('.pongal_p .checking .p1').innerHTML = 'பொங்கல்';
  document.querySelector('.new_year_p .checking .p1').innerHTML = 'தமிழ் புத்தாண்டு';
  document.querySelector('.guest_lec_p .checking .p1').innerHTML = 'சொற்பொழிவுகள்';
  document.querySelector('.inter_contest_participation_p .checking .p1').innerHTML = 'போட்டியில் பங்கேற்றல்';
  document.querySelector('.collab_events_p .checking .p1').innerHTML = 'போட்டிகள் நடத்துதல்';
  document.querySelector('.bharathi_100_p .checking .p1').innerHTML = 'பாரதி 100';

  let p2 = document.querySelectorAll('.p2');
  p2.forEach(para2 =>
  {
    para2.style['font-family'] = `'Noto Sans Tamil', sans-serif`;
  });
  document.querySelector('.induction_p .p2').innerHTML = `தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.`;
  document.querySelector('.tamil_classes_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.vidhai_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.nittilam_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.kathir_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.pongal_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.new_year_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.guest_lec_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.inter_contest_participation_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.collab_events_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
  document.querySelector('.bharathi_100_p .p2').innerHTML = 'தமிழ் சார்ந்த பல வைக ேபாட்டிகைள உள்ளடக்கிய, ஒரு கல்வியாண்டின் முதல் அைரயாண்டு பருவத்தில் நடத்தப்படும் ேபாட்டி விைதயாகும்.மாணவர்களுக்குள் தமிைழ விைதப்பது இதன் ேநாக்கமாகும். ேதன் தமிழ் ஆரம் ,ேபசு- நீ தான் ைதரியமான ஆளாச்ேச, கைதப்ேபாமா, தமிழ்க்களஞ்சியம், திைரநிரல் ேபான்ற  ேபாட்டிகளுடன் விைத - 2021 நடத்தப்பட்டது.';
}