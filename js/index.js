let num = parseFloat(prompt('Enter a number'));
let numFibb = [1, 1];
for (let i = 2; i < num; i++) {
    let r = numFibb[numFibb.length - 2];
    let k = numFibb[numFibb.length - 1];
    let m = r + k;
    numFibb.push(m);
}
alert(numFibb[numFibb.length - 1]);
