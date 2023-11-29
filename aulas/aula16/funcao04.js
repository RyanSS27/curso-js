function fatorial(x) {
    if (x == 1) {
        return 1
    } else if (x == 0) {
        return 0 
    } else {
        for (let cont = x-1; cont > 1; cont--) {
            x *= cont
        }
        return x
    }
}

console.log(fatorial(5))