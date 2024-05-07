let contVez = 0

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

//TESTAR A POSSÍVEL VITÓRIA A CADA JOGADA
function teste() {
    
}

function clicou(x, y) {
    //VERIFICA DE QUAL JOGADOR É A VEZ (X == ímpar O == par)
    contVez += 1
    let vez
    if (contVez % 2 == 0) {
        vez = "O"
    } else {
        vez = "X"
    }

    //TESTA QUAL LINHA (let x) E QUAL POSIÇÃO (let y) FOI CLICADA E MARCA A JOGADA
    if (x == 1) {
        linha1[y].innerHTML = vez
    } else if (x == 2) {
        linha2[y].innerHTML = vez
    } else if (x == 3) {
        linha3[y].innerHTML == vez
    }

    teste()
}

