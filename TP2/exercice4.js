const pairs = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let count = 0;

for (let [a, b] of pairs) {

    let eq = (a == b);
    let seq = (a === b);

    console.log(`${JSON.stringify(a)} == ${JSON.stringify(b)} -> ${eq} | ${JSON.stringify(a)} === ${JSON.stringify(b)} -> ${seq}`);

    if (eq !== seq) {
        count++;
    }
}

console.log("---");
console.log(count + " paire(s) où == et === donnent des résultats différents");