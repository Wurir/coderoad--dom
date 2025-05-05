const container = document.querySelector('.container')

const p = document.createElement('p')
p.className = 'paragraph fourth'
p.innerHTML = 'Fourth paragraph'

container.insertBefore(p, container.lastElementChild) // firstElementChild, wstawi przed pierwszym el w container
// pierwszy argument to element ktory ma zostac dodany, drugi argument to element przed ktorym ma zostac dodany. 
// Wpisujac null, dodam na koncu
