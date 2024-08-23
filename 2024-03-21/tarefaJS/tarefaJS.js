function caljuros(){
    let capital = document.getElementById("capital")
    let taxaDeJuros = document.getElementById("taxaDeJuros")
    let periodosDeAplicacao = document.getElementById("periodosDeAplicacao")
    let divsaida = document.getElementById("saida")

    let c = Number(capital.value) 
    let i = Number(taxaDeJuros.value)
    let n = Number(periodosDeAplicacao.value)

    let m = (c*(1 + i/100)**n)

    divsaida.innerText = m
}

let botao = document.getElementById("calcular")
botao.onclick = caljuros