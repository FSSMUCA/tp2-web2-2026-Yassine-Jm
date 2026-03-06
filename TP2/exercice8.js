let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// nom
let nomCorrige = nom.trim();
if (nomCorrige === "") {
    nomCorrige = "Inconnu";
}


let ageNombre = parseInt(age);
let ageStatut;
if (Number.isNaN(ageNombre) || ageNombre <= 0) {
    ageStatut = "valeur invalide";
} else {
    ageStatut = "valide";
}


let positionAt = email.indexOf("@");
let emailValide = false;

if (positionAt !== -1) {
    let partieApresAt = email.slice(positionAt + 1);
    if (partieApresAt.includes(".")) {
        emailValide = true;
    }
}


let score = parseInt(scoreJeu);
if (Number.isNaN(score)) {
    score = 0;
}


let adminBool = estAdmin === "true";

// derniereConnexion
let connexion = derniereConnexion ?? "Jamais connecté";

// nombreConnexions
let nbConnexions = Number(nombreConnexions);
let affichageConnexions;

if (nbConnexions === 0) {
    affichageConnexions = "Aucune connexion";
} else {
    affichageConnexions = nbConnexions;
}


console.log("===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nomCorrige + '" (corrigé : espaces supprimés)');
console.log("age              :", ageNombre, "(" + ageStatut + ")");
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide : pas de point après @") + ")");
console.log("scoreJeu         :", score, '(extrait depuis "' + scoreJeu + '")');
console.log("estAdmin         :", adminBool, '(attention : Boolean("false") = true, conversion manuelle requise)');
console.log('derniereConnexion: "' + connexion + '" (valeur par défaut via ??)');
console.log('nombreConnexions : "' + affichageConnexions + '" (0 après conversion)');
console.log("================================");