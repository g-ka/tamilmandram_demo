let profile_slide = document.querySelector('.tamilmandram_team__desc');
let is_eng_slide = JSON.parse(localStorage.getItem('is_eng')) || false;

function remove_border()
{
  for(let i=1; i<=52; i++)
  {
    if(i != 22 && i != 23 && i != 24 && i != 40 && i != 47 && i != 48)
    document.querySelector(`.img${i}`).style['border'] = 'none';
  }
}

// slide team: variables

let right_team = document.querySelector('.right_team');
let left_team = document.querySelector('.left_team');
let first_team = document.querySelector('.team1');
let team_name = document.querySelector('.team_name');

let left_slide = 0;
let left_margin = 0;

// slide images: variables

let right_icon = document.querySelector('.right_icon');
let left_icon = document.querySelector('.left_icon');
let first_set = document.querySelector('.set_of_four1');

let margin_left = 0;


// slide team: functions

right_team.addEventListener('click', right_click);
right_team.addEventListener('click', remove_border);

left_team.addEventListener('click', left_click);
left_team.addEventListener('click', remove_border);

function right_click()
{
  if(left_slide < 5)
  {
    left_slide += 1;
    team_name.style['width'] = `${((document.querySelector(`.team${left_slide+1}`).offsetWidth)/16) + 0.313}rem`;
    left_margin += (document.querySelector(`.team${left_slide}`).offsetWidth/16) + 1;
    first_team.style['margin-left'] = `-${left_margin}rem`;
    if(left_slide === 5)
    {
      right_team.style['opacity'] = '0';
      right_team.style['pointer-events'] = 'none';
      margin_left = -11*33;
      right_icon_click();
      if(!profile_slide.classList.contains('font_adder'))
      {
        profile_slide.classList.add('font_adder');
      }
      if(is_eng_slide)
      {
        profile_slide.innerHTML = `desing team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
      }
      else
      {
        profile_slide.innerHTML = `பார்வையாளர்களை கவரும் வண்ணமும், உள்ளடக்கங்களிற்கு மிகுந்த பொருளுணர்வை வழங்குவதாகவும் மற்ற அணிகளின் படைப்புகளுக்கு அணி சேர்ப்பவர்களுக்கான அணி`;
      }
    }
    else{
      right_team.style['opacity'] = '1';
      right_team.style['pointer-events'] = 'all';
      left_team.style['opacity'] = '1';
      left_team.style['pointer-events'] = 'all';
      if(left_slide === 1)
      {
        margin_left = -0*33;
        right_icon_click();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `thamizhukkaaga team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `தமிழ்மொழியின் இலக்கிய இலக்கணங்களில் ஆர்வம் கொண்ட தமது எண்ணங்களைத் தமிழ் கொண்டு பேச்சிலும் எழுத்திலும் வெளிப்படுத்துகிறவர்களுக்கான அணி`;
        }
      }
      else if(left_slide === 2)
      {
        margin_left = -5*33;
        right_icon_click();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `cinema team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `தமிழ் சினிமா மீது ஆர்வம் கொண்ட, சினிமா பற்றிய தங்கள் கருத்துக்களை எழுத்தாலும் பேச்சாலும் பகிர்ந்து கொள்பவர்களுக்கான அணி`;
        }
      }
      else if(left_slide === 3)
      {
        margin_left = -7*33;
        right_icon_click();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `ravusu team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `கரிசனையைப் பகிர்வதோடு,கதைத்தலிலும் கலாட்டாவிலும் கலந்து கொள்ள காத்திருப்பவர்களுக்கான அணி`;
        }
      }
      else if(left_slide === 4)
      {
        margin_left = -9*33;
        right_icon_click();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `video editing team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `ஒலி-ஒளியுடன் உறவாடி, மற்ற அணிகளின் முயற்சிகளைக் கவர்ந்திழுக்கும் காணொளிகள் வழியாக பார்வையாளர்களுக்குக் கடத்துவதில் பங்காற்றும் அணி`;
        }
      }
    }
  }
};

function left_click()
{
  if(left_slide > 0)
  {
    left_slide -= 1;
    team_name.style['width'] = `${((document.querySelector(`.team${left_slide+1}`).offsetWidth)/16) + 0.313}rem`;
    left_margin -= (document.querySelector(`.team${left_slide+1}`).offsetWidth/16) + 1;
    if(left_slide != 0)
    first_team.style['margin-left'] = `-${left_margin}rem`;
    else
    first_team.style['margin-left'] = `0`;

    if(left_slide === 0)
    {
      left_team.style['opacity'] = '0';
      left_team.style['pointer-events'] = 'none';
      margin_left = -1*33;
      left_icon_click();
      if(!profile_slide.classList.contains('font_adder'))
      {
        profile_slide.classList.add('font_adder');
      }
      if(is_eng_slide)
      {
        profile_slide.innerHTML = `palthiran team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;  
      }
      else
      {
        profile_slide.innerHTML = `தமிழார்வம் கொண்டு நுட்பமாக சிந்திக்கும் திறன் கொண்டவர்களுக்கும், சவாலான புது கேள்விகள் உருவாக்குவதில் தேர்ந்து இருப்பவர்களுக்கான அணி`;
      }
    }
    else{
      left_team.style['opacity'] = '1';
      left_team.style['pointer-events'] = 'all';
      right_team.style['opacity'] = '1';
      right_team.style['pointer-events'] = 'all';
      if(left_slide === 1)
      {
        margin_left = -2*33;
        left_icon_click();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `tamizhukkaaga team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `தமிழ்மொழியின் இலக்கிய இலக்கணங்களில் ஆர்வம் கொண்ட தமது எண்ணங்களைத் தமிழ் கொண்டு பேச்சிலும் எழுத்திலும் வெளிப்படுத்துகிறவர்களுக்கான அணி`;
        }
      }
      if(left_slide === 2)
      {
        margin_left = -7*33;
        left_icon_click();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `cinema team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `தமிழ் சினிமா மீது ஆர்வம் கொண்ட, சினிமா பற்றிய தங்கள் கருத்துக்களை எழுத்தாலும் பேச்சாலும் பகிர்ந்து கொள்பவர்களுக்கான அணி`;
        }
      }
      if(left_slide === 3)
      {
        margin_left = -9*33;
        left_icon_click();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `ravusu team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `கரிசனையைப் பகிர்வதோடு,கதைத்தலிலும் கலாட்டாவிலும் கலந்து கொள்ள காத்திருப்பவர்களுக்கான அணி`;
        }
      }
      if(left_slide === 4)
      {
        margin_left = -11*33;
        left_icon_click();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `video editing team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `ஒலி-ஒளியுடன் உறவாடி, மற்ற அணிகளின் முயற்சிகளைக் கவர்ந்திழுக்கும் காணொளிகள் வழியாக பார்வையாளர்களுக்குக் கடத்துவதில் பங்காற்றும் அணி`;
        }
      }
    }
  }  
};


// slide images: functions

right_icon.addEventListener('click', right_icon_click_re);
right_icon.addEventListener('click', remove_border);

left_icon.addEventListener('click', left_icon_click_re);
left_icon.addEventListener('click', remove_border);

function right_icon_click()
{
  if(margin_left > -12*33)
  {
    margin_left += -33;
    first_set.style['margin-left'] = `${margin_left}rem`;
    if(margin_left === -12*33)
    {
      right_icon.style['opacity'] = '0';
      right_icon.style['pointer-events'] = 'none';
    }
    else{
      right_icon.style['opacity'] = '1';
      right_icon.style['pointer-events'] = 'all';
      left_icon.style['opacity'] = '1';
      left_icon.style['pointer-events'] = 'all';
    }
  }
};

function left_icon_click()
{
  if(margin_left < 0)
  {
    margin_left += 33;
    first_set.style['margin-left'] = `${margin_left}rem`;  
    if(margin_left === 0)
    {
      left_icon.style['opacity'] = '0';
      left_icon.style['pointer-events'] = 'none';
    }
    else
    {
      left_icon.style['opacity'] = '1';
      left_icon.style['pointer-events'] = 'all';
      right_icon.style['opacity'] = '1';
      right_icon.style['pointer-events'] = 'all';
    }
  }
};


////////////////////////////////////////// re declares

// slide team: functions

function right_click_re()
{
  if(left_slide < 5)
  {
    left_slide += 1;
    team_name.style['width'] = `${((document.querySelector(`.team${left_slide+1}`).offsetWidth)/16) + 0.313}rem`;
    left_margin += (document.querySelector(`.team${left_slide}`).offsetWidth/16) + 1;
    first_team.style['margin-left'] = `-${left_margin}rem`;
    if(left_slide === 5)
    {
      right_team.style['opacity'] = '0';
      right_team.style['pointer-events'] = 'none';
    }
    else{
      right_team.style['opacity'] = '1';
      right_team.style['pointer-events'] = 'all';
      left_team.style['opacity'] = '1';
      left_team.style['pointer-events'] = 'all';
    }
  }
};

function left_click_re()
{
  if(left_slide > 0)
  {
    left_slide -= 1;
    team_name.style['width'] = `${((document.querySelector(`.team${left_slide+1}`).offsetWidth)/16) + 0.313}rem`;
    left_margin -= (document.querySelector(`.team${left_slide+1}`).offsetWidth/16) + 1;
    first_team.style['margin-left'] = `-${left_margin}rem`;
    if(left_slide === 0)
    {
      left_team.style['opacity'] = '0';
      left_team.style['pointer-events'] = 'none';
    }
    else{
      left_team.style['opacity'] = '1';
      left_team.style['pointer-events'] = 'all';
      right_team.style['opacity'] = '1';
      right_team.style['pointer-events'] = 'all';
    }
  }  
};

// slide images: functions

function right_icon_click_re()
{
  if(margin_left > -12*33)
  {
    margin_left += -33;
    first_set.style['margin-left'] = `${margin_left}rem`;
    if(margin_left === -12*33)
    {
      left_slide = 4;
      right_click_re();
      right_icon.style['opacity'] = '0';
      right_icon.style['pointer-events'] = 'none';
      if(!profile_slide.classList.contains('font_adder'))
      {
        profile_slide.classList.add('font_adder');
      }
      if(is_eng_slide)
      {
        profile_slide.innerHTML = `designing team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
      }
      else
      {
        profile_slide.innerHTML = `பார்வையாளர்களை கவரும் வண்ணமும், உள்ளடக்கங்களிற்கு மிகுந்த பொருளுணர்வை வழங்குவதாகவும் மற்ற அணிகளின் படைப்புகளுக்கு அணி சேர்ப்பவர்களுக்கான அணி`;
      }
    }
    else{
      right_icon.style['opacity'] = '1';
      right_icon.style['pointer-events'] = 'all';
      left_icon.style['opacity'] = '1';
      left_icon.style['pointer-events'] = 'all';
      if(margin_left === -1*33)
      {
        left_slide = 0;
        right_click_re();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `tamizhukkaaga team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `தமிழ்மொழியின் இலக்கிய இலக்கணங்களில் ஆர்வம் கொண்ட தமது எண்ணங்களைத் தமிழ் கொண்டு பேச்சிலும் எழுத்திலும் வெளிப்படுத்துகிறவர்களுக்கான அணி`;
        }
      }
      else if(margin_left === -6*33)
      {
        left_slide = 1;
        right_click_re();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `cinema team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `தமிழ் சினிமா மீது ஆர்வம் கொண்ட, சினிமா பற்றிய தங்கள் கருத்துக்களை எழுத்தாலும் பேச்சாலும் பகிர்ந்து கொள்பவர்களுக்கான அணி`;
        }
      }
      else if(margin_left === -8*33)
      {
        left_slide = 2;
        right_click_re();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `ravusu team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `கரிசனையைப் பகிர்வதோடு,கதைத்தலிலும் கலாட்டாவிலும் கலந்து கொள்ள காத்திருப்பவர்களுக்கான அணி`;
        }
      }
      else if(margin_left === -10*33)
      {
        left_slide = 3;
        right_click_re();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `video editing team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `ஒலி-ஒளியுடன் உறவாடி, மற்ற அணிகளின் முயற்சிகளைக் கவர்ந்திழுக்கும் காணொளிகள் வழியாக பார்வையாளர்களுக்குக் கடத்துவதில் பங்காற்றும் அணி`;
        }
      }
    }
  }
};

function left_icon_click_re()
{
  if(margin_left < 0)
  {
    margin_left += 33;
    first_set.style['margin-left'] = `${margin_left}rem`;  
    if(margin_left === 0)
    {
      left_icon.style['opacity'] = '0';
      left_icon.style['pointer-events'] = 'none';
      left_slide = 1;
      left_click_re();
      if(!profile_slide.classList.contains('font_adder'))
      {
        profile_slide.classList.add('font_adder');
      }
      if(is_eng_slide)
      {
        profile_slide.innerHTML = `palthiran team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;  
      }
      else
      {
        profile_slide.innerHTML = `தமிழார்வம் கொண்டு நுட்பமாக சிந்திக்கும் திறன் கொண்டவர்களுக்கும், சவாலான புது கேள்விகள் உருவாக்குவதில் தேர்ந்து இருப்பவர்களுக்கான அணி`;
      }
    }
    else
    {
      left_icon.style['opacity'] = '1';
      left_icon.style['pointer-events'] = 'all';
      right_icon.style['opacity'] = '1';
      right_icon.style['pointer-events'] = 'all';
      if(margin_left === -5*33)
      {
        left_slide = 2;
        left_click_re();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `tamizhukkaaga team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `தமிழ்மொழியின் இலக்கிய இலக்கணங்களில் ஆர்வம் கொண்ட தமது எண்ணங்களைத் தமிழ் கொண்டு பேச்சிலும் எழுத்திலும் வெளிப்படுத்துகிறவர்களுக்கான அணி`;
        }
      }
      if(margin_left === -7*33)
      {
        left_slide = 3;
        left_click_re();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `cinema team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `தமிழ் சினிமா மீது ஆர்வம் கொண்ட, சினிமா பற்றிய தங்கள் கருத்துக்களை எழுத்தாலும் பேச்சாலும் பகிர்ந்து கொள்பவர்களுக்கான அணி`;
        }
      }
      if(margin_left === -9*33)
      {
        left_slide = 4;
        left_click_re();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `ravusu team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `கரிசனையைப் பகிர்வதோடு,கதைத்தலிலும் கலாட்டாவிலும் கலந்து கொள்ள காத்திருப்பவர்களுக்கான அணி`;
        }
      }
      if(margin_left === -11*33)
      {
        left_slide =5;
        left_click_re();
        if(!profile_slide.classList.contains('font_adder'))
        {
          profile_slide.classList.add('font_adder');
        }
        if(is_eng_slide)
        {
          profile_slide.innerHTML = `video editing team Amidst the hallowed halls of NIT Tiruchirappalli resides the venerable Tamil Mandram, a cultural bastion founded in 1969. A radiant beacon for 53 illustrious years, it embraces the timeless allure of Tamil, its essence spreading bliss and binding hearts in unison`;
        }
        else
        {
          profile_slide.innerHTML = `ஒலி-ஒளியுடன் உறவாடி, மற்ற அணிகளின் முயற்சிகளைக் கவர்ந்திழுக்கும் காணொளிகள் வழியாக பார்வையாளர்களுக்குக் கடத்துவதில் பங்காற்றும் அணி`;
        }
      }
    }
  }
};
