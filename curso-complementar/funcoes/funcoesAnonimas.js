let soma = function (x, y) {
    return `${x} + ${y} = ` + (x + y)
}

let fun = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

fun(2, 4, function (x, y){
    return `${x} x ${y} = ` + x * y
})

fun(2, 4)

fun(4, 2, (x, y) => `${x} : ${y} = ` + x/y) //está dividindo 4 por 2