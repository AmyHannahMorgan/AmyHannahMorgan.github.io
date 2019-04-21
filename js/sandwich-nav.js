const nav = document.querySelector('nav.sandwich');

function toggleOpen() {
  nav.classList.toggle('sandwichOpen');
}

function toggleClickdown(button) {
  let menu = button.parentNode.querySelector('.clickdownMenu'),
  arrow = button.querySelector('.clickdownArrow');

  menu.classList.toggle('clickdownMenuOpen');
  arrow.classList.toggle('clickdownArrowDown');
}
