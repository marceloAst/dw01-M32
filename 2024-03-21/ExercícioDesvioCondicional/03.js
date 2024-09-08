function esvioCondicional03(condicao01, condicao02, condicao03) {
    if (condicao01) {
        if (condicao02) {
            if (condicao03) {
                console.log("Caminho 1");
            } else {
                console.log("Caminho 2");
            }
        } else {
            if (condicao03) {
                console.log("Caminho 3");
            } else {
                console.log("Caminho 4");
            }
        }
    } else {
        if (condicao02) {
            if (condicao03) {
                console.log("Caminho 5");
            } else {
                console.log("Caminho 6");
            }
        } else {
            if (condicao03) {
                console.log("Caminho 7");
            } else {
                console.log("Caminho 8");
            }
        }
    }
}
