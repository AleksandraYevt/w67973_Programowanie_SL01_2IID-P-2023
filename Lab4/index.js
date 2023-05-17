//Zad1
function book (Name, Author, Year) {
    this.Name = Name;
    this.Author = Author;
    this.Year = Year;
    this.FullName = function(){
        return this.Name + ' - ' + this.Author + ' ' + this.Year
    }
}

const book1 = new book('The Little Prince', 'Antoine de Saint-Exupéry','1943')
console.log(book1.FullName())


//Zad2
function student(Name, Surname, Number, o1, o2, o3){
    this.Name = Name;
    this.Surname = Surname;
    this.Number = Number;
    this.o1 = o1;
    this.o2 = o2;
    this.o3 = o3;
    this.srednia = function(){
        return (o1+o2+o3)/3
    }
}

const student1 = new student('Oleksandra','Yevtushenko','w67973', 5, 5, 4)
console.log(student1.srednia())


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