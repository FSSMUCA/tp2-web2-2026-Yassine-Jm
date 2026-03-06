let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];
let N = valeurs.length;

for (let i = 0; i < N; i++) {
    console.log(valeurs[i] , "-->" , typeof valeurs[i]);
}