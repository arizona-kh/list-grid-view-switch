/* Solution with 2 separate buttons for List & Grid views 

const listViewButton = document.querySelector('.list-view-button');
const gridViewButton = document.querySelector('.grid-view-button');
const list = document.querySelector('ol');

listViewButton.onclick = function () {
  list.classList.remove('grid-view-filter');
  list.classList.add('list-view-filter');
}

gridViewButton.onclick = function () {
  list.classList.remove('list-view-filter');
  list.classList.add('grid-view-filter');
} */

document.querySelectorAll('.grid-list').forEach(button => button.addEventListener('click', toggle));
const list = document.querySelector('ol');

function toggle() {
    let btn = this;
    btn.classList.add('animation');
    btn.classList.toggle('active',);
    list.classList.toggle('grid-view-filter');
    list.classList.toggle('list-view-filter');
    let newElem = btn.cloneNode(true);
    btn.parentNode.replaceChild(newElem, btn);
    newElem.addEventListener('click', toggle);
}