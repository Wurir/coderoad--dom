const container = document.querySelector('#working-area')

const input = container.querySelector('input')
input.setAttribute('type', 'number')

const button = container.querySelector('button')
button.removeAttribute('disabled')

const para = container.querySelector('p')
para.setAttribute('class', 'red')
para.setAttribute('style', 'color: blue')