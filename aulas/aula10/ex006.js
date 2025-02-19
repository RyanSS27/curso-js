var a = window.document.querySelector('div#area')
a.addEventListener('mousedown', pressionou)
a.addEventListener('mouseup', soltou)
a.addEventListener('mouseover', entrou)
a.addEventListener('mouseout', saiu)

function pressionou() {
    a.innerText = 'Clicou'
    a.style.background = 'red'
}

function soltou() {
    a.style.backgroundColor = 'greenyellow'
}

function entrou() {
    a.innerText = 'Entrou'
}

function saiu() {
    a.innerText = 'Saiu'
}