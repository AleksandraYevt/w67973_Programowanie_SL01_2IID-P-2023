//zad1
let liczba = 4
function silnia(liczba) {
    if (liczba == 0 || liczba == 1 ) {
        return 1
    }
    else {
        do {
            return liczba * silnia(liczba - 1)
        }
        while (liczba > 0)
    }
}

console.log(`Silnia ${liczba} jest równa ${silnia(liczba)}`) 


//zad2
function color1() {
    document.getElementById("p1").style.backgroundColor = '#B3A4FF';
    document.getElementById("p2").style.backgroundColor = "transparent";
    document.getElementById("p3").style.backgroundColor = "transparent";
}
function color2() {
    document.getElementById("p1").style.backgroundColor = "transparent";
    document.getElementById("p2").style.backgroundColor = "#A4B0FF";
    document.getElementById("p3").style.backgroundColor = "transparent";
}
function color3() {
    document.getElementById("p1").style.backgroundColor = "transparent";
    document.getElementById("p2").style.backgroundColor = "transparent";
    document.getElementById("p3").style.backgroundColor = "#A4FFBF";
}