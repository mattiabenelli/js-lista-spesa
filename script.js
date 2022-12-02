const list = ['acqua', 'pane', 'cioccolata', 'uovo'];

const ListContainer = document.querySelector('.shopping-list');

let item = 0;
console.log(list.length);
let element

while( item < list.length){
    console.log(list[item])
    let element = `<li class="list-item">${list[item]}</li>`;
    ListContainer.innerHTML += element ;
    item++
}