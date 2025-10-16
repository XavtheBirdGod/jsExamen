let arrayDieren = ["hond", "kat", "vis", "vogel", "konijn"]
let alleMan = ""
for(let i = 0; i<=4; i++){
if(i<4){
    alleMan += arrayDieren[i] + ","
} else {
    alleMan += arrayDieren[i]
}
}
console.log(alleMan)