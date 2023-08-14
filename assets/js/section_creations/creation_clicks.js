let is_dark_creation_click = JSON.parse(localStorage.getItem('is_dark'));

window.addEventListener('load', () =>
{
  setTimeout(() =>
  {
    yt();
  }, 1100);
});

function remove_all()
{
  document.querySelector('.yt img').src = './assets/images/creations/youtube.png';
  document.querySelector('.ig img').src = './assets/images/creations/instagram.png';
  document.querySelector('.sp img').src = './assets/images/creations/spotify.png';
  document.querySelector('.wp img').src = './assets/images/creations/wordpress.png';
};

function remove_all_dark()
{
  document.querySelector('.yt').style['border'] = 'none';
  document.querySelector('.sp').style['border'] = 'none';
  document.querySelector('.ig').style['border'] = 'none';
  document.querySelector('.wp').style['border'] = 'none';
};

document.querySelector('.ig').addEventListener('click', ig);
function ig()
{
  if(is_dark_creation_click)
  {
    remove_all_dark();
    document.querySelector('.ig').style['border'] = '2px solid var(--primary)';
  }
  else
  {
    remove_all();
    document.querySelector('.ig img').src = './assets/images/creations/instagram c.png';
  }
  
  document.querySelector('.creations__base__links').innerHTML = `<a href="#" class="link1">
  <div class="image">
    <img src="./assets/images/creations/ks.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link2">
  <div class="image">
    <img src="./assets/images/creations/ks.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link3">
  <div class="image">
    <img src="./assets/images/creations/ks.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link4">
  <div class="image">
    <img src="./assets/images/creations/ks.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link5">
  <div class="image">
    <img src="./assets/images/creations/ks.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>`;
};

document.querySelector('.sp').addEventListener('click', sp);
function sp()
{
  if(is_dark_creation_click)
  {
    remove_all_dark();
    document.querySelector('.sp').style['border'] = '2px solid var(--primary)';
  }
  else
  {
    remove_all();
    document.querySelector('.sp img').src = './assets/images/creations/spotify c.png';
  }
  document.querySelector('.creations__base__links').innerHTML = `<a href="#" class="link1">
  <div class="image">
    <img src="./assets/images/creations/rd.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link2">
  <div class="image">
    <img src="./assets/images/creations/rd.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link3">
  <div class="image">
    <img src="./assets/images/creations/rd.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link4">
  <div class="image">
    <img src="./assets/images/creations/rd.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link5">
  <div class="image">
    <img src="./assets/images/creations/rd.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>`;
};

document.querySelector('.wp').addEventListener('click', wp);
function wp()
{
  if(is_dark_creation_click)
  {
    remove_all_dark();
    document.querySelector('.wp').style['border'] = '2px solid var(--primary)';
  }
  else
  {
    remove_all();
    document.querySelector('.wp img').src = './assets/images/creations/wordpress c.png';
  }
  document.querySelector('.creations__base__links').innerHTML = `<a href="#" class="link1">
  <div class="image">
    <img src="./assets/images/creations/th.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link2">
  <div class="image">
    <img src="./assets/images/creations/th.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link3">
  <div class="image">
    <img src="./assets/images/creations/th.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link4">
  <div class="image">
    <img src="./assets/images/creations/th.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link5">
  <div class="image">
    <img src="./assets/images/creations/th.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>`;
};

document.querySelector('.yt').addEventListener('click', yt);
function yt()
{
  if(is_dark_creation_click)
  {
    remove_all_dark();
    document.querySelector('.yt').style['border'] = '2px solid var(--primary)';
  }
  else
  {
    remove_all();
    document.querySelector('.yt img').src = './assets/images/creations/youtube c.png';
  }
  document.querySelector('.creations__base__links').innerHTML = `<a href="#" class="link1">
  <div class="image">
    <img src="./assets/images/creations/derrick-rose.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link2">
  <div class="image">
    <img src="./assets/images/creations/derrick-rose.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link3">
  <div class="image">
    <img src="./assets/images/creations/derrick-rose.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link4">
  <div class="image">
    <img src="./assets/images/creations/derrick-rose.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>

<a href="#" class="link5">
  <div class="image">
    <img src="./assets/images/creations/derrick-rose.jpg" alt="">
  </div>
  <div class="desc">
    <p class="title">
      Ferocious dunks of youngest MVP 
    </p>
    <p class="about">
      Derrick Martell Rose is an American professional basketball player for the Memphis Grizzlies of the National Basketball Association
    </p>
  </div>
</a>`;
};