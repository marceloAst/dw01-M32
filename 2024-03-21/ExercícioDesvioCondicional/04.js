function executeFlow(condicao01, condicao02, condicao03) {
    if (condicao1 && condicao02 && condicao03) {
        console.log("Caminho 1");
    } else if (condicao01 && condicao02 && !condicao03) {
        console.log("Caminho 2");
    } else if (condicao01 && !condicao02 && condicao03) {
        console.log("Caminho 3");
    } else if (condicao01 && !condicao02 && !condicao03) {
        console.log("Caminho 4");
    } else if (!condicao1 && condicao02 && condicao03) {
        console.log("Caminho 5");
    } else if (!condicao01 && condicao02 && !condicao03) {
        console.log("Caminho 6");
    } else if (!condicao01 && !condicao2 && condicao3) {
        console.log("Caminho 7");
    } else if (!condicao01 && !condicao02 && !condicao03) {
        console.log("Caminho 8");
    } else {
        console.log("Nenhum caminho correspondente");
    }
}
