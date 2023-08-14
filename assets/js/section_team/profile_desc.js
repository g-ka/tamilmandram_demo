let profile = document.querySelector('.tamilmandram_team__desc');
let is_eng_profile = JSON.parse(localStorage.getItem('is_eng')) || false;

function remove_border()
{
  for(let i=1; i<=52; i++)
  {
    if(i != 22 && i != 23 && i != 24 && i != 40 && i != 47 && i != 48)
    document.querySelector(`.img${i}`).style['border'] = 'none';
  }
}

document.querySelector('.img1').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img1').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  if(is_eng_profile)
  {
    document.querySelector('.tamilmandram_team__desc').style['font-family'] = `'Poppins', sans-serif`;
    profile.innerHTML =`<h1>HEAD</h1>
                        <h2>Hariharan</h2>
                        <h3>ECE'24</h3>
                        <h3>+91 7449166886</h3>
                        <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                        </div>`;
  }
  else
  {
    document.querySelector('.tamilmandram_team__desc').style['font-family'] = `'Noto Sans Tamil', sans-serif'`;
    profile.innerHTML =`<p class="h1_p">தல</h1>
                        <p class="h2_p">டேவிட் பெக்ஹம்</p>
                        <p class="h3_p">இசிஇ'24</p>
                        <p class="h3_p">+91 7449166886</p>
                        <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                        </div>`;                    
  }
});
document.querySelector('.img2').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img2').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>CO-HEAD</h1>
                       <h2>Kulandhaivelan</h2>
                       <h3>EEE'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img3').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img3').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>PRESIDENT</h1>
                       <h2>Ravichandran</h2>
                       <h3>MECH'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img4').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img4').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>TREASURER</h1>
                       <h2>Pugazharasi</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img5').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img5').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Srikanth</h2>
                       <h3>ICE'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img6').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img6').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Virutheeshwari</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img7').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img7').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Lavanya</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img8').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img8').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Sankara Vinayagam</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img9').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img9').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Devadharshini</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img10').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img10').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Ganishk</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img11').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img11').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Khajendran</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img12').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img12').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Samudra</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img13').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img13').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Vishnuram</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img14').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img14').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Arunachalam</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img15').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img15').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Arunprabhakar</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img16').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img16').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Dharnisha</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img17').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img17').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Karthikeyan</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img18').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img18').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Naren</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img19').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img19').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Srihari</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img20').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img20').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Suvetha</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img21').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img21').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Yugendhar</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img25').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img25').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Abinaya</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img26').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img26').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Akshaya</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img27').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img27').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Ambareesh</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img28').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img28').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Nagaarjune</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img29').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img29').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>V</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img30').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img30').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Varun</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img31').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img31').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Lingesh</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img32').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img32').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Sriram</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img33').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img33').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Anjana</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img34').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img34').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Dhineash Kumar</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img35').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img35').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Sanjeev</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img36').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img36').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2> Shreeya Rajaganapathy</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img37').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img37').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Nishanth</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img38').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img38').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Vasanth</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img39').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img39').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Sethupathi</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img41').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img41').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Nandhini</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img42').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img42').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Suriya</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img43').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img43').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Balaji</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img44').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img44').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Abirami</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img45').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img45').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Harish</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img46').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img46').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Keerthivas</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img49').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img49').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Karthick balaji</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img50').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img50').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Srivathsan</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img51').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img51').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Vijay</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});
document.querySelector('.img52').addEventListener('click', () =>
{
  remove_border();
  document.querySelector('.img52').style['border'] = '4px solid var(--secondary)';
  profile.classList.remove('font_adder');
  profile.innerHTML = `<h1>MANAGER</h1>
                       <h2>Bhavya</h2>
                       <h3>MME'24</h3>
                       <h3>+91 7449166886</h3>
                       <div class="profile_handles">
                        <a href="https://nekocalc.com/px-to-rem-converter" target="_blank"><i class='bx bxl-linkedin'></i></a>
                        <a href="#"><i class='bx bxl-twitter'></i></a>
                       </div>`;
});

