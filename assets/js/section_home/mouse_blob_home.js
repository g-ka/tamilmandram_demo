window.addEventListener('load', () =>
{
  setTimeout(() =>
  {
    document.querySelector('.mouse_blob').classList.add('circle');

    window.addEventListener('mousemove', (event) =>
    {
      let x = event.clientX;
      let y = event.clientY;
      document.querySelector('.circle').style.top = `${y-7.5}px`;
      document.querySelector('.circle').style.left = `${x-7.5}px`;
    });
  }, 600);
});