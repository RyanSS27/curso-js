function carregar() {
    var agora = new Date()
    var hr = agora.getHours()
    var msg = document.querySelector('div#hora')
    var cor = document.body.style
    var foto = document.getElementById('bolinha').style

    msg.innerHTML = `Agora são ${hr} horas`
    if (hr > 23 || hr < 0) {
        msg.innerHTML = `<strong>[Erro! ${hr} é um horário inválido]</strong>`
        cor.backgroundColor = "#830f0f"
    } else if (hr >= 6 && hr < 12) {
        cor.backgroundColor = "#dfd475"
        foto.backgroundImage = "url(imagens/dia.jpg)"
    } else if (hr >= 12 && hr < 18) {
        cor.backgroundColor = "#bb885e"
        foto.backgroundImage = "url(imagens/tarde.jpg)"
    } else if (hr >= 18 && hr < 24) {
        cor.backgroundColor = "#090739"
        foto.backgroundImage = "url(imagens/noite.jpg)"
    } else {
        cor.backgroundColor = "#1c1c1c"
        foto.backgroundImage = "url(imagens/madrugada.jpg)"
    }
}