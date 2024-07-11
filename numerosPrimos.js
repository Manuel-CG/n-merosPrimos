function primos(numero) {
    let array = []
    let contador = 0
    for (let i = 2; i <= numero; i++) {
      contador = 0
      for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
          contador++
        }
      }
      if (contador == 2){
        array.push(i)
        }
    }
    return array
  }
console.log(primos(100))