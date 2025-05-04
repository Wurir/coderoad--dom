const container = document.querySelector('.container')

const p = document.createElement('p')
p.className = 'paragraph fourth'
p.innerHTML = 'Fourth paragraph'

container.append(p)
// append is identical to appendChild but is not compatible with all browsers