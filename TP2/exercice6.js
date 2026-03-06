let nom = null ;
let age = 0 ;
let ville = "" ;
let score = undefined ;
let actif = false ;

// Partie A:

console.log("nom ?? 'valeur par défaut' ->", nom ?? "valeur par défaut");
console.log("age ?? 'valeur par défaut' ->", age ?? "valeur par défaut");
console.log("ville ?? 'valeur par défaut' ->", ville ?? "valeur par défaut");
console.log("score ?? 'valeur par défaut' ->", score ?? "valeur par défaut");
console.log("actif ?? 'valeur par défaut' ->", actif ?? "valeur par défaut");

// Partie B :

console.log("nom || 'valeur par défaut' ->", nom || "valeur par défaut");
console.log("age || 'valeur par défaut' ->", age || "valeur par défaut");
console.log("ville || 'valeur par défaut' ->", ville || "valeur par défaut");
console.log("score || 'valeur par défaut' ->", score || "valeur par défaut");
console.log("actif || 'valeur par défaut' ->", actif || "valeur par défaut");

// Partie C :
let def = "valeur par défaut"

function comparer(nomVar, valeur) {

    let r1 = valeur ?? def
    let r2 = valeur || def

    if (r1 === r2) {
        console.log(nomVar + " : ?? et || -> même résultat")
    } else {
        console.log(nomVar + " : ?? et || -> résultat différent")
    }

}

comparer("nom", nom);
comparer("age", age);
comparer("ville", ville);
comparer("score", score);
comparer("actif", actif);