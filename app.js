const square = document.querySelector('.square')

// square.setAttribute('style', 'background-color: red; width: 100px; height: 100px')

square.style.width = '100px'
square.style.height = '100px'
square.style.backgroundColor = 'red'
square.style.borderRadius = '50%'

console.log(square.getBoundingClientRect()) // zwraca wymiary i pozycje elementu