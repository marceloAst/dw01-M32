function SistemaDeMultas(){
    let VelocidadeMaximaDaVia = parseFloat(document.getElementById("VelocidadeMaximaDaVia").value);
    let VelocidadeDoVericulo = parseFloat(document.getElementById("VelocidadeDoVericulo").value);
    let Multa = parseFloat(document.getElementById("saida").value);

    if (VelocidadeDoVericulo > VelocidadeMaximaDaVia * (0,20)){
        Multa = 'R$ 130,16';
    }
     else{
        if(VelocidadeDoVericulo > VelocidadeMaximaDaVia * (0,50)){
            Multa = 'R$ 880,41'
        }
        else{
            Multa = 'R$ 195,23'
        }
}
    if (VelocidadeDoVericulo <= VelocidadeMaximaDaVia){
        Multa = 'R$ 0,00'
    }else{
        
    }
    document.getElementById("saida").innerHTML = Multa;

}