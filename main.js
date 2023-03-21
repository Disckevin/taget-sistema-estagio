function quest01() {
  let resposta1 = document.getElementById("resposta1")

  let indice = 13,
    soma = 0,
    k = 0

  while (k < indice) {
    k++
    soma = soma + k
  }
  resposta1.innerText = `O valor da variável soma é ${soma}`
}

/*=====================================================================================*/

function quest02() {
  let num = parseInt(document.getElementById("numero").value)
  let resposta2 = document.getElementById("resposta2")

  let ant = 0,
    atu = 1,
    r = 0

  while (r < num) {
    r = ant + atu
    ant = atu
    atu = r
  }
  if (num == r) {
    resposta2.innerHTML = `O número pertence`
  } else {
    resposta2.innerHTML = `O número não pertence`
  }
}

/*=====================================================================================*/

function quest05(str) {
  let newString = ""
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i]
  }
  return newString
}
console.log(quest05("Exemplo"))
