let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];

for (let valeur of nombres) {
    if (Number.isNaN(valeur)) {
        console.log(valeur + " -> INVALIDE");
    }

    else if (valeur === Infinity || valeur === -Infinity) {
        console.log(valeur + " -> INFINI");
    }

    else if (1 / valeur === -Infinity) {
        console.log(valeur + " -> ZERO NEGATIF");
    }

    else if (Number.isInteger(valeur)) {

        if (Number.isSafeInteger(valeur)) {
            console.log(valeur + " -> ENTIER SUR");
        } else {
            console.log(valeur + " -> ENTIER HORS LIMITES");
        }

    }

    else {
        console.log(valeur + " -> DECIMAL");
    }
    
}