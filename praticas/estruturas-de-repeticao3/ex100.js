function calcular() {
    var n1 = document.querySelector('input#n')
    
    if (n1.value.length > 0) {
        var tab = document.querySelector('select#tabuada')
        tab.innerHTML = `<option>---Tabuada---</option>`
        for (cont = 0; cont <= 10; cont++) {
            var opt = document.createElement('option')
            opt.innerHTML = `${n.value} x ${cont} = ${Number(n.value) * cont}`
            tab.appendChild(opt)
        }
    } else {
        window.alert('[ERRO] Insira um número.')
    }
}