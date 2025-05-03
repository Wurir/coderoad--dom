const listItem = document.querySelector('.list-item')
// querySelector wybiera pierwszy item z podana klasa, tagiem itp
console.log('list-item', listItem);
console.dir(listItem);

const listItems = document.querySelectorAll('.list-item')
// querySelector wybiera wszystkie elementy
console.log('listItems', listItems);
console.dir(listItems);

const secondaryListItems = document.querySelectorAll('#secondary-list .list-item')

console.log('secondaryListItems', secondaryListItems);
console.dir(secondaryListItems);

const mainList = document.querySelector('#main-list')

const mainListItems = mainList.querySelectorAll('.list-item')
console.log('mainListItems', mainListItems);

for(let i=0; i<mainListItems.length; i++){
    console.log('mainListItems loop', mainListItems[i])
}