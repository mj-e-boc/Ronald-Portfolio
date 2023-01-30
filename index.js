const hamburgerMenu = document.querySelector('.hamburgermenu');
const hamburger = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

hamburger.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('showmenu');
  hamburger.classList.toggle('hamburgerclicked');
  bar1.classList.toggle('bar1clicked');
  bar2.classList.toggle('bar2clicked');
  bar3.classList.toggle('bar3clicked');
});
