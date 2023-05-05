console.log("Zadanie 1")
function zmienTekst() {
    document.getElementById("tekst").innerHTML = "Witaj na mojej stronie!";
    alert('Miłego dnia!')
}

console.log("Zadanie 2")

for (let i = 0; i <=100; i++) {
    console.log(i)
}

console.log("Zadanie 3")
function calc() {
    let a = Number(prompt('Podaj pierwszą liczbę:'))
    let b = Number(prompt('Podaj drugą liczbę:'))
    let c = a + b
    document.getElementById("zad3").innerHTML = `Dodawanie dwoch liczb: ${c}`;
}

console.log("Zadanie 4")
function czas(){
    let Time = new Date(), hours = Time.getHours(), minutes = Time.getMinutes(), seconds = Time.getSeconds()
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    document.getElementById("zad4").innerHTML ="Twój czas: " + hours + ":" + minutes + ":" + seconds
    setTimeout("czas()", 1000);
}

console.log("Zadanie 5")
function gra(){
    let num1 = Math.floor(Math.random() * 101), gra = true, sproby = 0
    while (gra) {
        let num2 = Number(prompt("Sprawdż: "));
        sproby += 1;
        if (num1 > num2){
            alert("Twoja liczba jest mniejsza")
        }
        if (num1 < num2){
            alert("Twoja liczba jest wjększa")
        }
        if (num1 == num2){
            alert("Congratulations! Liczba sprob:  " + sproby)
            gra = false
        }
    }
    document.getElementById("gra1").innerHTML = "Witam, liczba sprob:  " + sproby;
}
