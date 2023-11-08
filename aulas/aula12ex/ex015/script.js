var sexo

function masculino() {
    sexo = 'homem'
}

function feminino() {
    sexo = 'mulher'
}

function clicou() {
    var nasc = document.querySelector('input#nasc')
    var data = new Date()
    var ano = data.getFullYear()
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('div#bolinha').style
    var idade = ano - Number(nasc.value)

    if (idade < 0 || idade > 125) {
        window.alert('[Erro na data digitada] Verifique os dados e tente novamente.')
    } else {
        img.display = 'block'
        switch (sexo) {
            case 'homem':
                msg.innerHTML = `Um homem de ${idade} anos de idade.`
                if (idade < 11) {
                    img.backgroundImage = 'url(imagens/menino.jpg)'
                } else if (idade >= 11 && idade < 18) {
                    img.backgroundImage = 'url(imagens/jovemh.jpg'
                } else if (idade >= 18 && idade < 60) {
                    img.backgroundImage = 'url(imagens/homem.jpg)'
                } else if (idade > 59) {
                    img.backgroundImage = 'url(imagens/velho.jpg)'
                }

                break
            case 'mulher':
                msg.innerHTML = `Uma mulher de ${idade} anos de idade.`
                if (idade < 11) {
                    img.backgroundImage = 'url(imagens/menina.jpg)'
                } else if (idade > 10 && idade < 18) {
                    img.backgroundImage = 'url(imagens/jovemm.jpg)'
                } else if (idade > 17 && idade < 60) {
                    img.backgroundImage = 'url(imagens/mulher.jpg)'
                } else if (idade > 59) {
                    img.backgroundImage = 'url(imagens/velha.jpg)'
                }
        }
    }
}