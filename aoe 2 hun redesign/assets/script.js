const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
  item.addEventListener('click', function () {
    close();
  })
})

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}
function close() {
  mainMenu.style.top = '-100%';
}




document.addEventListener('scroll', () => {
  const header = document.querySelector('nav');

  if (window.scrollY > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});




let time = document.getElementById("roman-time");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
});