function esvioCondicional02(condicao01, condicao02, condicao03) {
    console.log("1");
    console.log("2");

    if (condicao01) {
        console.log("A");
    } else {
        if (condicao02) {
            if (condicao03) {
                console.log("B");
            } else {
                console.log("C");
            }
        } else {
            console.log("D");
        }
    }

    console.log("3");
    console.log("4");
}