"use strict";
//Pirma uzduotis 11
let numeris = -5;

if (numeris <0){
    console.log(`Sis numeris ${numeris} yra neigiamas`)
}else{
    console.log(`Skaicius ${numeris} yra teigiamas`)
}

//Antra uzduotis

let diena = 2;

switch(diena){
    case 1:
        console.log("Sendien yra Pirmadienis");
        break;
    case 2:
        console.log("Sendien yra Antradienis");
        break;
    case 3:
        console.log("Sendien yra Treciadienis");
        break;
    case 4:
        console.log("Sendien yra Ketvirtadienis");
        break;
    case 5:
        console.log("Sendien yra Penktadienis");
        break;
    case 6:
        console.log("Sendien yra Sestadienis");
        break;
    case 7:
        console.log("Sendien yra Sekmadienis");
        break;
    default:
        console.log("neteisingai nurodytas skaicius");
        break;
}
//3 uzduotis
const one = prompt("Pirmas skaicius")
const two = prompt("Antras skaicius")
const three = prompt("Trecias skaicius")

const palyg = (a,b,c) =>{
    let maxi = Math.max(a,b,c);
    if (maxi == a){
        alert(`${a} yra didesnis uz ${b} ir ${c}`)
        console.log(`${a} yra didesnis uz ${b} ir ${c}`)
    }
    if (maxi == b){
        alert(`${b} yra didesnis uz ${a} ir ${c}`)
        console.log(`${b} yra didesnis uz ${a} ir ${c}`)
    }
    if (maxi == c){
        alert(`${c} yra didesnis uz ${a} ir ${b}`)
        console.log(`${c} yra didesnis uz ${a} ir ${b}`)
    }

};
palyg(one,two,three)