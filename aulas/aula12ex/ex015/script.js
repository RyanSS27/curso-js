var sexo 
function masculino() {
    sexo = 'Um homem'
}

function feminino() {
    sexo = 'Uma mulher'
}

function clicou() {
    var nasc = document.querySelector('input#nasc')
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.querySelector('div#msg')

    msg.innerHTML = `${sexo} de ${ano - Number(nasc.value)}`
}