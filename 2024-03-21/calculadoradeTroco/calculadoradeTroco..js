function calcularTroco() {
    const valorTroco = parseInt(document.getElementById('valorTroco').value);
    let trocoRestante = valorTroco;


    let cedulas20 = Math.floor(trocoRestante / 20);
    trocoRestante %= 20;


    let cedulas10 = Math.floor(trocoRestante / 10);
    trocoRestante %= 10;


    let moedas1 = trocoRestante;

    
    document.getElementById('resultado').innerHTML = `
        <p>Valor do Troco: R$${valorTroco},00</p>
        <p>Cédulas de 20: ${cedulas20}</p>
        <p>Cédulas de 10: ${cedulas10}</p>
        <p>Moedas de 1: ${moedas1}</p>
    `;
}
