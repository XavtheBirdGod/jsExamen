let arrayGetal = [];
for(let i = 1; i<=5;i++){
    let getal = parseInt(prompt("geef een getal"))
    arrayGetal.push(getal)
}

for(let getal of arrayGetal){
    if(getal > 10){
        console.log(getal)
    }
}
//console.log(arrayGetal)