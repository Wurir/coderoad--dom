const section = document.getElementById('main-list')
console.log('section', section);
console.dir('section', section);

const listItems = document.getElementsByClassName('list-item')
const listItemsFirst = listItems[0]

console.log('listItems', listItems);
console.log('listItemsFirst', listItemsFirst);

for(let i=0; i<listItems.length; i++){
    console.log('listItems' + (i +1) + listItems[i]);
}

const listItemsByTagName = document.getElementsByTagName('li')

console.log('listItemsByTagName', listItemsByTagName);