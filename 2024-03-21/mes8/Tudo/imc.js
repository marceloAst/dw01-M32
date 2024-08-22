let inputpeso = document.getElementById("peso")
let inputaltura = document.getElementById("altura")
let divsaida = document.getElementById("saida")

let peso = Number(inputpeso.value)
let altura = Number(inputaltura.value)

let imc = peso/(altura*altura)

divsaida.innerText = imc