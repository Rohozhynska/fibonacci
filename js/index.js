let num = parseFloat(prompt('Enter a number'))
let numFibb = [1, 1];


for (let k = 2 ; k>0;) {
    
    let r = numFibb[numFibb.length - 2]
    let k = numFibb[numFibb.length - 1]
    let m = r + k
    numFibb.push(m);
    if (k<num) { continue
    }
    else{
       document.write(m)
    }
    
}
    
//alert(numFibb[numFibb.length-1])
    
    // {numFibb.push(m)
    // if (m<num) {continue}

    //     alert(m)}


    // r=numFibb.length;
    // let k=0+numFibb[0]
    // numFibb.push(k)
    //     let m=k+numFibb[0];
    //     numFibb.push(m)
    // do {  k=k+m;;
    // numFibb.push(k)
    // let r=r+k
    // } while (numFibb.length==num)
    // function count(numFibb) {
    // }
