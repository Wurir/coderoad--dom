const container = document.querySelector('.container')

const p = document.createElement('p')
p.className = 'paragraph fourth'
p.innerHTML = 'Fourth paragraph'

prepend(container, p)

function prepend(container, element){
    container.insertBefore(element, container.firstElementChild) 
}
