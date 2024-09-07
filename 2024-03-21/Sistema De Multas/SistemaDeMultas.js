function SistemaDeMultas(){
    let VelocidadeMaximaDaVia = parseFloat(document.getElementById("VelocidadeMaximaDaVia").value);
    let VelocidadeDoVeiculo = parseFloat(document.getElementById("VelocidadeDoVericulo").value);
    let Multa;

    if (VelocidadeDoVeiculo <= VelocidadeMaximaDaVia) {
        Multa = 'R$ 0,00';
    } else if (VelocidadeDoVeiculo <= VelocidadeMaximaDaVia * 1.20) {
        Multa = 'R$ 130,16';
    } else if (VelocidadeDoVeiculo <= VelocidadeMaximaDaVia * 1.50) {
        Multa = 'R$ 195,23';
    } else {
        Multa = 'R$ 880,41';
    }

    document.getElementById("saida").innerHTML = Multa;
}
