const container = document.querySelector('.container')

const p = document.createElement('p')
p.className = 'paragraph fourth'
p.innerHTML = 'Fourth paragraph'

container.prepend(p)
// prepend is adding new element as a 1st child