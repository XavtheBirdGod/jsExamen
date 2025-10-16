let aantal = parseInt(prompt("hoeveel namen wilt u ingeven?"))
let arrayNamen = []
for(let i=1;i<=aantal;i++){
    let naam = prompt("geef naam in")
arrayNamen.push(naam)
}
let som = 0
for(let naam of arrayNamen){
    if(naam.length>5){
        som +=1
    }
}
console.log(som)
//console.log(arrayNamen)