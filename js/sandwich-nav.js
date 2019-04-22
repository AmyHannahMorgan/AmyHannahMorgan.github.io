const nav = document.querySelector('nav.sandwich');

function toggleOpen() {
  nav.classList.toggle('sandwichOpen');
}

function toggleClickdown(button) {
  let menu = button.parentNode.querySelector('.clickdownMenu'),
  arrow = button.querySelector('.clickdownArrow'),
  collapsed = menu.getAttribute('collapsed');

  arrow.classList.toggle('clickdownArrowDown');

  if (collapsed === 'true') {
    expandMenu(menu);
    menu.setAttribute('collapsed', 'false');
  }
  else if (collapsed === 'false') {
    collapseMenu(menu);
    menu.setAttribute('collapsed', 'true');
  }
  else {
    throw 'item ' + menu + ' does not have a valid collapsed value';
  }
}

function expandMenu(element) {
  let elementContentHeight = element.scrollHeight;

  element.style.height = elementContentHeight + 'px';
}

function collapseMenu(element) {
  element.style.height = '';
}
