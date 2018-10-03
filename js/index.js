let num = parseFloat(prompt('Enter a number'));
let numFibb = [1, 1];
for (let i = 2; i < num; i++) {
    let j = numFibb[numFibb.length - 2];
    let k = numFibb[numFibb.length - 1];
    let r = j + k;
    numFibb.push(r);
}
alert(numFibb[numFibb.length - 1]);

let num = parseFloat(prompt('Enter a number'));
let numFibb = [1, 1];
for (let i = 2; i < num; i++) {
    let m = numFibb[0] + numFibb[1];
    numFibb.splice(0, 2, numFibb[1], m)
}
alert(numFibb[numFibb.length - 1]);

let num = parseFloat(prompt('Enter a number'));
let numFibb = [1, 1];
do {
    let j = numFibb[numFibb.length - 2];
    let k = numFibb[numFibb.length - 1];
    let r = j + k;
    numFibb.push(r);
} while (numFibb.length < num)
alert(numFibb[numFibb.length - 1]);

let num = parseFloat(prompt('Enter a number'));
let numFibb = [1, 1];
for (let i = 2; i < num; i++) {
    let sum = numFibb.reduce((acc, el) => acc + el)
    numFibb.splice(0, 2, numFibb[1], sum)
}
numFibb.shift();
document.write(numFibb);

let num = parseFloat(prompt('Enter a number'));
let numFibb = [1, 1];
function fBine() {
    const phi = ((1 + Math.sqrt(5)) / 2);
    const n = Math.pow(phi, num) / Math.sqrt(5);
    return Math.round(n);
}
alert(fBine());
