//zad1
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


//zad3
//Zad3-4
function car(Marka, Model, RokProdukcji, Kolor, Predkosc){
    this.Marka = Marka;
    this.Model = Model;
    this.RokProdukcji = RokProdukcji;
    this.Kolor = Kolor;
    this.Predkosc = Predkosc;
    this.LessSpeed = function(a){
        this.speed = this.speed - a;
    }
    this.MoreSpeed = function(a){
        this.speed = this.speed + a;
    }
    this.genInforamation = function(){
        return (this.Marka + " " + this.Model + " (" + this.RokProdukcji + "), " + "Kolor: " + this.Kolor + ", " + "Prędkość: " + this.Predkosc)
    }
    this.age = function(){
        let year = new Date()
        return "Wiek samochodu: " + (year.getFullYear - this.RokProdukcji)
    }
}

const car1 = new car('Renault','Megane', '2016','Yellow','220')
console.log(car1.genInforamation())



orm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validForm()) {
        alert('Sukces');
    }
});

const nameField = document.querySelector("[name='name']");
nameField.addEventListener('input', () => {
    requiredValidation(nameField);
    minLengthValidation(nameField, 2);
});

const surnameField = document.querySelector("[name='surname']");
surnameField.addEventListener('input', () => {
    requiredValidation(surnameField);
    minLengthValidation(surnameField, 2);
});


const emailField = document.querySelector("[name='email']");
emailField.addEventListener('input', () => {
    requiredValidation(emailField);
    minLengthValidation(emailField, 2);
    emailValidation(emailField);
});


const passwordField = document.querySelector("[name='password']");
passwordField.addEventListener('input', () => {
    requiredValidation(passwordField);
});

const confirmPasswordField = document.querySelector("[name='confirm-password']");
confirmPasswordField.addEventListener('input', () => {
    validConfirmPassword();
});

