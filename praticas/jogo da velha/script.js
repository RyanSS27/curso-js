let contVez = 0
let vez

let linha1 = [1, 2, 3]
let linha2 = [1, 2, 3]
let linha3 = [1, 2, 3]

linha1[1] = document.querySelector('td#q1')
linha1[2] = document.querySelector('td#q2')
linha1[3] = document.querySelector('td#q3')
linha2[1] = document.querySelector('td#q4')
linha2[2] = document.querySelector('td#q5')
linha2[3] = document.querySelector('td#q6')
linha3[1] = document.querySelector('td#q7')
linha3[2] = document.querySelector('td#q8')
linha3[3] = document.querySelector('td#q9')

let msg = document.querySelector('div#msg')

//TESTAR A POSSÍVEL VITÓRIA A CADA JOGADA
function teste() {
    if (linha1[1].innerHTML == linha1[2].innerHTML && linha1[2].innerHTML == linha1[3].innerHTML) {
        msg.innerHTML = `O vencedir foi ${vez}`
    } else if (linha2[1].innerHTML == linha2[2].innerHTML && linha2[2].innerHTML == linha2[3].innerHTML) {
        msg.innerHTML = `O vencedor foi ${vez}`
    } else if (linha3[1].innerHTML == linha3[2].innerHTML && linha3[2].innerHTML == linha3[3].innerHTML) {
        msg.innerHTML = `O vencedor foi ${vez}`
    } else if (linha1[1].innerHTML == linha2[1].innerHTML && linha2[1].innerHTML == linha3[1].innerHTML) {
        msg.innerHTML = `O vencedor foi ${vez}`
    } else if (linha1[2].innerHTML == linha2[2].innerHTML && linha2[2].innerHTML == linha3[2].innerHTML) {
        msg.innerHTML = `O vencedor foi ${vez}`
    } else if (linha1[3].innerHTML == linha2[3].innerHTML && linha2[3].innerHTML == linha3[3].innerHTML) {
        msg.innerHTML = `O vencedor foi ${vez}`
    } else if (linha1[1].innerHTML == linha2[2].innerHTML && linha2[2].innerHTML == linha3[3].innerHTML) {
        msg.innerHTML = `O vencedor foi ${vez}`
    } else if (linha1[3].innerHTML == linha2[2].innerHTML && linha2[2].innerHTML == linha3[1].innerHTML) {
        msg.innerHTML = `O vencedor foi ${vez}`
    } else {
        //VERIFICA SE TODOS OS QUADRADOS FORAM PREENCHIDOS
        for (var espaco = 1; espaco < 4; espaco++) {
            if (linha1[espaco] != 'X' || linha2[espaco] || linha3[espaco]) {

            }
        }
    }
}

function clicou(x, y) {
    //VERIFICA DE QUAL JOGADOR É A VEZ (X == ímpar O == par)
    let msgVez = document.querySelector('span#vez')
    contVez += 1
    if (contVez % 2 == 0) {
        vez = "O"
        msgVez.innerHTML = "O"
    } else {
        vez = "X"
        msgVez.innerHTML = "X"
    }

    //TESTA QUAL LINHA (let x) E QUAL POSIÇÃO (let y) FOI CLICADA E MARCA A JOGADA
    if (x == 1) {
        linha1[y].innerHTML = vez
        
    } else if (x == 2) {
        linha2[y].innerHTML = vez
    } else if (x == 3) {
        linha3[y].innerHTML = vez
    }

    teste()
}

