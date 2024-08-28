function calcularCustoViagem() {
    let distancia = parseFloat(document.getElementById('distancia').value);
    let autonomia = parseFloat(document.getElementById('autonomia').value);
    let precoCombustivel = parseFloat(document.getElementById('precoCombustivel').value);
    let valorPedagio = parseFloat(document.getElementById('valorPedagio').value);

 
    let litrosNecessarios = distancia / autonomia;
    let custoCombustivel = litrosNecessarios * precoCombustivel;

 
    let custoTotal = custoCombustivel + valorPedagio;

 
    document.getElementById('resultado').innerHTML = `
        <p>Distância: ${distancia} km</p>
        <p>Autonomia do veículo: ${autonomia} km/l</p>
        <p>Preço do combustível: R$${precoCombustivel.toFixed(2)}</p>
        <p>Valor do pedágio: R$${valorPedagio.toFixed(2)}</p>
        <h3>Custo total da viagem: R$${custoTotal.toFixed(2)}</h3>
    `;
}
