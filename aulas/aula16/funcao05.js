//FUNÇÃO RECURSIVA - chama ela mesma

function fatorial(n) {
    if (n == 1) {
        return 1
    } else if (n <= 0) {
        return 0
    } else {
        return n * fatorial(n - 1)
    }
}