//zad1
function wiek(){
    let wiek = Number(prompt('Podaj swój wiek:'))
    if (wiek >= 18){
        alert('Jesteś pełnoletnim(-a)!')
    }
    else{
        alert('Nie jesteś pełnoletnim(-a)!')
    }
}


//zad2
function temperatura(){
    let temp = prompt("Podaj temperaturu w stopniach Celsjusza")
    console.log(`${temp * 1.8 + 32} w stopniach Fahrenheita`)
}

//zad3
let liczby = [1, 5, 7, 9,-2, 0, 8]

    //1
let sum = 0
for (let i = 0; i < liczby.length; i++){
    sum += liczby[i]
}
console.log(sum)

    //2
let parz = liczby.filter(element => element % 2 === 0);
console.log(parz);

    //3
const pomnoz = liczby.map(element => element * 3);
console.log(pomnoz);

    //4
let nAlbumu = 67973;
liczby.push(nAlbumu);
console.log(liczby);
let znajd = liczby.find(element => element == nAlbumu)
console.log(znajd)
liczby.pop()

    //5
let sr_ar = sum/liczby.length
console.log(sr_ar)

    //6
let max_l = 0
for (let i = 0; i < liczby.length; i++){
    if (max_l < liczby[i]){
        max_l = liczby[i]
    }
}
console.log(max_l)

    //7
let wyst = 5
let il = 0
for (let i=0; i < liczby.length; i++){
    if(wyst == liczby[i]){
        il += 1;
    }
}
console.log(`Liczba ${wyst} wystąpiła ${il} raz(-y)`)


//zad4
let c_fib = [1, 1]
for (i = 2; i < 100; i++){
    c_fib.push(c_fib[i-1]+c_fib[i-2])
}
console.log(c_fib)