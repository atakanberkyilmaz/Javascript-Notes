// console.log("i like pizza!"); //Consola yazı yazmak için kullanılır
// console.log("its really good!");

// window.alert("I Really Love Pizza!"); //pop up yaratmak için kullanılır

// //This is a commnet
// /*
// This 
// is 
// a 
// comment
// */

// 
// let firstName = "Bro"; Stringler 
// let age = 21; int
// let student = true; bool   //let aslında var şeklinde bir değişken, her tipi alıyor

// console.log("Hello", firstName);
// console.log("You are",age,"years old");
// console.log("Enrolled:",student);

// document.getElementById("p1").innerHTML = "Hello" + firstName;
// document.getElementById("p2").innerHTML = "You are" + age + "years old";
// document.getElementById("p3").innerHTML = "Enrolled:" + student; // html ögelerine ulaşmak için innerHTML kullanılır

//Aritmetik İşlemler
// let students = 20;

// students = students + 1; //toplama
// students = students - 1; //çıkarma
// students = students * 1; //çarpma
// students = students / 1; //bölme

// let extraStudents = students %2;

// students +=1; //toplayıp, çıkartıp, çarpıp, bölüp direkt işlem yapılmış halini yazıyor
// students -=1;
// students *=2;
// students /=2;

// let extraStudents %= 3; //mod alma işleminde böyle bir şey yok
// matematik dersinde kullandığımız öncelik işlemi burada da var

// let result =(1 + 2* (3+4));

// console.log(result);

//Kullanıcıdan input alma
//kolay yoldan yapmak istiyorsak window.promt kullanılır
//uzun yoldan yapmak istersek ise html textbox kullanılır

//Prompt
// let username = window.prompt("What's your name?");
// console.log(username);AnimationTimeline

//Textbox
// let username;

// document.getElementById("myButton").onclick = function(){
//     username = document.getElementById("myText").ariaValueMax;
//     console.log(username);
//     document.getElementById("myLabel").innerHTML = "Hello" + username;
// }

//Tip değişimleri toInt, toParse tarzı

// let age = window.prompt("How old are you");
// age += 1;
// console.log("Happy Birthday! You are", age , "years old"); konsolda 22 yazmazi gerekirken 211 yazıyor tip dönüşümü olmadığı için

// let age = window.prompt("How old are you");

// console.log(typeof age);
// age = Number(age);
// age +=1;

// console.log("Happy Birthday! You are", age , "years old");


// let x;
// let y;
// let z;

// x = Number("3.14");
// y = String(3.14);
// z = Boolean("pizza");

// console.log(x, typeof x);
// console.log (y, typeof y);
// console.log (z, typeof z);

// const PI = 3.14159; // const değiştirmek istemediğimiz değişkenler için kullanılır

// let radius;
// let circumference;

// radius = window.prompt("Enter the radius of a circle");
// radius = Number(radius);

// //PI= 420,69;

// circumference = 2 * PI * radius;
// console.log("The circumference is :", circumference);

// Math Fonksiyonu
// let x = 3.14;
// let y = 5;
// let z = 9;
// let minimum;
// let maximum;

// x = Math.round(x); // en yakın inte yuvarlar -> 3.14 ü 3e
// x = Math.floor(x); // en yakın inte yuvarlar -> 3.99'u 3e
// x = Math.ceil(x); // en yakın inte yuvarlar -> 3.14'ü 4e
// x = Math.pow(x,2); //üst işlemleri
// x = Math.sqrt(x); //karekök
// x = Math.abs(x); // mutlak değer
// maximum = Math.max(x,y,z);
// minimum = Math.min(x,y,z);

// x= Math.PI;

// console.log(x);

//Hipotenüs
//Prompt
//  let a;
//  let b;
//  let c;

// a = window.prompt("Enter side A");
// a = Number(a);

// b= window.prompt("Enter side B");
// b= Number(b);

// c= Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

// console.log("Side C:", c);

//TextBox
// document.getElementById("submitButton").onclick = function(){
//     a = document.getElementById("aTextBox").value;
//     a = Number(a);

//     b = document.getElementById("bTextbox").value;
//     b = Number(b);

//     c= Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

//     document.getElementById("cLabel").innerHTML = "Side C:" + c;
// }

//Sayaç Uygulaması

// let count = 0;

// document.getElementById("decreaseBtn").onclick = function (){
//     count -=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

// document.getElementById("resetBtn").onclick = function (){
//     count =0;
//     document.getElementById("countLabel").innerHTML = count;
// }
// document.getElementById("increaseBtn").onclick = function (){
//     count +=1;
//     document.getElementById("countLabel").innerHTML = count;
// }

//Zar Uygulaması
// let x;
// let y;
// let z;

// document.getElementById("rollButton").onclick = function(){

//     x = Math.floor(math.random() * 6) + 1;
//     y = Math.floor(math.random() * 6) + 1;
//     z = Math.floor(math.random() * 6) + 1;

//     document.getElementById("xLabel").innerHTML = x;
//     document.getElementById("yLabel").innerHTML = y;
//     document.getElementById("zLabel").innerHTML = z;
// }

//String metotları

// let username = "Atakan Berk Yılmaz";
// let phone = "123-456-7890";

// console.log(userName.length); //username'in bit uzunluğunu verir
// console.log(userName.charAt(0)); //0. bitte ne yazıyor onu gösterir
// console.log(userName.indexOf("a")); // username'de kaç tane a var onu gösterir
// console.log(userName.lastIndexOf("a")); // sonuncu a hangi bitte onu gösterir
// userName = userName.trim(); //kelimeyi böler
// userName = username.toUpperCase(); //kelimenin hepsini büyük harf yapma
// username = username.toLowerCase(); //kelimenin hepsini küçük harf yapma

// phoneNumber = phoneNumber.replaceAll("-",""); // - olan kısımları boşluğa çevirir

// let fullName = "Snoop Dogg"; //İsmi ad ve soyada ayırma
// let firstName;
// let lastName;

// firstName = fullName.slice(0,3); 
// lastName = fullName.slice(4);

// firstName = fullName.slice(0, fullName.indexOf("")); //Boşluk olana kadar al
// lastName = fullName.slice(fullName.indexOf("") + 1); // boşluktan sonraki kısmı al

// console.log(firstName);
// console.log(lastName);

//Method zinciri
// let userName = "bro";

// let letter = userName.charAt(0).toUpperCase().trim();

// console.log(letter);

//If else bloğu

// let age =65;

// if(age>=65){
//     console.log("You are a senior citizen!");
// }
// else if(age >=18){
//     console.log("You are an adult!");
// }
// else if(age < 0){
//     console.log("You haven't born yet!");
// }
// else{
//     console.log("You are a child");
// }

// let online = true;

// if(online){
//     console.log("You are online!");
// }
// else{
//     console.log("You are offline!");
// }

//Checked Box
// document.getElementById("myButton").onclick = function(){
//     if(document.getElementById("myCheckBox").checked){
//         console.log("You are subscribed!");
//     }
//     else{
//         console.log("You are Not Subscribed!");
//     }
// }

// document.getElementById("myButton").onclick = function(){
//     const myCheckBox = document.getElementById("myCheckBox");
//     const visaBtn = document.getElementById("visaBtn");
//     const mastercardBtn = document.getElementById("mastercardBtn");
//     const paypalBtn = document.getElementById("paypalBtn");
    
//     if(myCheckBox.checked){
//         console.log("You are Subscribed!");
//     }
//     else{
//         console.log("You are not subscribed!");
//     }

//     if(visaBtn.checked){
//         console.log("You are paying with a Visa!");
//     }
//     else if(mastercardBtn.checked){
//         console.log("You are paying with a Mastercard!");
//     }
//     else if(paypalBtn.checked){
//         console.log("You are paying with Paypal!");
//     }
//     else{
//         console.log("You must select a payment type");
//     }
//}

// Swith Case Yapısı

// let grade = 65;

// switch(true){
//     case grade >= 90:
//     console.log("You did great!");
//     break;
//     case grade >=80:
//         console.log("You did good!");
//         break;
//         case grade >=70:
//             console.log("You did okay!");
//             break;
//             case grade >=60:
//         console.log("You passed ... barely");
//         break;
//         case grade >60:
//         console.log("You FAILED!");
//         break;
//         default:
//             console.log(grade, "is not a letter grade");
// }

// && ve || bağlaçları -> && bağlacı iki durumda doğru ise
//                     -> || bağlacı iki durumdan herhangi biri doğru ise

//     let temp = 50; -> 
    
//     if(temp > 0 && temp < 30){
//         console.log('the weather is good!');
//     }
//     else{
//         console.log('The weather is bad!');
//     }

//     let temp = 50; 

//     if(temp<= 0 || temp >=30){
//         console.log('The weather is good')
//     }
//     else{
//         console.log('The weather is bad!');
//     }

// ! Not Operatoru
// true -> false false -> true yapar
// let temp = 15;
// let sunny = true;

// if(!(temp > 0)){
//     console.log("It's cold outside");
// }
// else{
//     console.log("It's warm outside");
// }

// if(!sunny){
//     console.log("It's cloudy outside");
// }
// else{
//     console.log("It's sunny outside");
// }

// while loop -> bazı kodları tekrar et

// let userName = "";

// while(userName == ""|| userName ==null){
//     userName = window.prompt("Enter your name");
// }

// console.log("Hello", userName);

// for loop -> bir for döngüsüne kadar tekrar

// for(let i = 10; i>0; i-=3){
//     console.log(i);
// }

// console.log("HAPPY NEW YEAR")

// break -> looptan çıkmak için
// continue -> looptaki bir iterasyonu skipler

// for(let i = 1; i<=20; i+=1){
//     if(i == 13){
//         continue;
//     }
//     console.log(i);
// }

//nested loop -> döngü içinde döngü

// let rows = window.prompt('Enter # of rows');
// let columns = window.prompt('Enter # of columns');

// for(let i= 1; i<= rows; i+=1){
//     for(let j=1; j<=3; j+=1){
//         console.log(j);
//     }
// }

// funciton -> kodu 1 kere tanımla, her yerde kullan -> method tarzı

// function startProgram(){
//     let userName = "Bro";
//     let age = 21;

//     happyBirthday(userName, age);
// }

// function happyBirthday(userName, age){
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday to you!");
//     console.log("Happy Birthday dear", userName);
//     console.log("Happy Birthday to you!");
//     console.log("You are", age,"years old!");

// }

// return -> geriye değer göndermek için kullanılır

// let area;
// let width;
// let height;

// width = window.prompt("Enter width");
// height = window.prompt("Enter height");

// area = getArea(width, height);

// console.log("The area is:", area);

// function getArea(width, height){
//     return width * height;
// }

//Ternary -> if else bloğunun kısa yolu
// condition ? exprIfTrue : exprIfFalse

// checkWinner(false);

// function checkWinner(win){
//     win ? console.log('You win!') : console.log('You Lose!');
// }

// `` -> es6 ile gelen string yazma şekli -> Template literals olarak geçiyor

// let userName = "Bro";
// let items = 3;
// let total = 75;

// console.log("Hello", userName);
// console.log("You have", items, "items in your cart");
// console.log("Your total is $", total);

// console.log(`Hello ${userName}`);
// console.log(`You have ${items} items in your cart`);
// console.log(`Your total is $${total}`);

// let text = 
// `Hello ${userName}
// You Have ${items} items in your cart
// Your total is $${total}`;

// console.log(text); -> bu kısımda yukarıdan aşağıya doğru güncel stringin içine nasıl yazı yazılır onu görüyoruz ve aşağıya doğru daha gelişmiş bir hal alıyor ^-^


// Sayı Tahmini Oyunu

// const answer = Math.floor(Math.random()*10 + 1);
// let guesses = 0;

// document.getElementById("submitButton").onclick = function(){

//     let guess = document.getElementById("guessField").value
//     guesses+=1;

//     if(guess == answer){
//         alert(`${answer} is the #. It took you ${guesses} guess`)
//     }
//     else if(guess<anser){
//         alert("Too small!");
//     }
//     else{
//         alert("Too large");
//     }
// }

//Sıcaklığı fahrenheit ya da celsiusa çevirme

// document.getElementById("submitButton").onclick = function(){
//     let temp;

//     if(document.getElementById("cButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toCelsius(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°C"

//     }
//     else if(document.getElementById("fButton").checked){
//         temp = document.getElementById("textBox").value;
//         temp = Number(temp);
//         temp = toFahrenheit(temp);
//         document.getElementById("tempLabel").innerHTML = temp + "°F"
        
//     }
//     else{
//         document.getElementById("tempLabel").innerHTML="Select a unit";
//     }
// }
// function toCelsius(temp){
//     return(temp-32) * (5/9);
// }

// function toFahrenheit(temp){
//     return temp * 9 / 5 + 32;
// }

//Diziler

// let fruits = ["apple", "orange","banana"];

// fruits.push("lemon"); --> eleman eklemek için kullanılır
// fruits.pop(); --> son elemanı çıkartır
// fruits.unshift("mango"); --> başlangıça eleman ekle
// fruits.shift(); --> başlangıçtaki elemanı kaldır

// let length = fruits.length;
// let index = fruits.index0f("kiwi");

// console.log(index);

// let prices =[5, 10, 15, 20,25];

// /*
// for(let i = prices.length - 1; i>=0; i-=1){
//     console.log(prices[i]);
// }
// */

// for(let price of prices){
//     console.log(price)
// }

// let fruits = ["banana","apple", "orange", "mango"];
// //fruits = fruits.sort(); --> a'dan zye sıralar
// fruits = fruits.sort().reverse(); --> z'den a'ya sıralar

// for(let fruit of fruits){
//     console.log(fruit);
// }

// 2 Boyutlu Diziler

// let fruits = ["apples","oranges","bananas"];
// let vegetables =["carrots", "onions","potatoes"];
// let meats = ["eggs","chicken","fish"];

// let groceryList = [fruits, vegetables, meats];
// groceryList[2][2] = "steak";

// for(let list of groceryList){
//     for(let food of list){
//         console.log(food);
//     }
// }

// Spread Operator -> iki tane sınıfı birleştirmek için kullanılır

// let class1 = ["Spongebob", "Patrick", "Sandy"];
// let class2 = ["Squidward", "Mr.Krabs","Plankton"];

// class1.push(...class2);

// console.log(...class1);

// Rest Parametreleri -> Fonksiyonlara sınır sayısı olmadan parametre geçmeye olanak verir.

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;
// let e = 5;

// console.log(sum(a, b, c, d, e,));

// function sum(x,y, ...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number
//     }
//     return total
// }

// Callback -> Callback function başka bir fonksiyonun 
// çalışmasını tamamladıktan sonra , bir başka fonksiyonun işlevini başlatır.

// sum(2,3,displayDOM);

// function sum(x,y, callBack){
//     let result = x + y;
//     callBack(result);
// }

// function displayConsole(output){
//     console.log(output);
// }

// function displayDOM(output){
//     document.getElementById("myLabel").innerHTML = output;
// }

// array.forEach() = döngü oluşturmamızı ve 
//bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur

// let students = ["spongebob","patrick","squidward"];
// students.forEach(capitalize);
// students.forEach(print);

// function capitalize(element, index, array){
//     array[index] = element[0].toUpperCase() + element.substring();
// }

// function print(element){
//     console.log(element);
// }

// array.map() -> endisine parametre olarak gönderilen dizinin her bir elemanını belirlenen 
//bir işleme tabi tutup, yeni bir dizi meydana getirir. mesela dizideki her sayının karesini almak istiyorsak bunu kullanırız

// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map(square);
// let cubes = numbers.map(cube);

// cubes.forEach(print);

// function square (element) {
//     return Math.pow(element,2);
// }
// function cube(element){
//     return Math.pow(element, 3);
// }
// function print(element){
//     console.log(element);
// }

//array.reduce() --> Oluşturulan diziyi yer alan her eleman üzerinde 
//soldan sağa tarayarak işlem yapar ve tek bir değere düşürür

// let prices = [5, 10, 15, 20, 25, 30];
// let total = prices.reduce(checkOut);

// console.log(`The total is : $${total}`);

// function checkOut(total, element){
//     return total + element;
// }

//Dizi sıralama

// let grades = [100, 50, 90, 60, 80, 70];

// grades = grades.sort(ascendingSort);

// grades.forEach(print);

// function descendingSort(x,y){
//     return y - x;
// }
// function ascendingSort(x,y){
//     return x - y;
// }
// function print(element){
//     console.log(element);
// }

//Sayaç
// let count = 0;

// document.getElementById("increaseButton").onclick = function(){
//     count +=1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// document.getElementById("decreaseButton").onclick = function(){
//     count -=1;
//     document.getElementById("myLabel").innerHTML = count;
// }

// Arrow Fonksiyonları -> kolaylaştırma için kullanılır
// =>

// let grades = [100, 50, 90, 60, 80, 70];

// grades.sort((x,y) => y - x);
// grades.forEach((element) => console.log(element));


//Karıştırma Fonksiyonu

// let cards = ["A", "2", "3", "4", "5",]

// shuffle(cards);

// console.log(cards);

// function shuffle(array){
// let currentIndex = array.length;


// while(currentIndex !=0){
//     let randomIndex = Math.floor(Math.random() * array.length)
//     currentIndex-=1;

//     let temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
// }
// return array;

// }

// Map -> key-value şeklinde nesneleri tutar

// const store = new Map([
//     ["tshirt",20],
//     ["jeans", 30],
//     ["socks",10],
//     ["underwear",50],
// ]);

// store.get("tshirt"); -> tshirtü store'a ekler
// store.set("hat",40); -> aynı şekilde
// store.delete("hat"); -> silme işlemi
// console.log(store.has("underwear")); -> underwear'ı store'a ekler
// console.log(store.size); -> storedaki bitleri söyler

// store.forEach((value, key)) => console.log(`${key} $${value}`)

// object -> property ve metodların grup şeklinde oluşması
// property -> nesnenin sahip oldukları
// metod -> nesnenin yapabildikleri
// . kullanarak ulaşılabilinir

// const car = {
//     mode :"Mustang", // noktalı virgül değil virgül kullanılır
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log("You drive the car");
//     };
//     brake : function(){
//         console.log("You step on the brakes");
//     }
// }

// console.log(car2.model);
// console.log(car2.color);
// console.log(car2.year);

// car.drive();
// car.brake();

//this -> nesneyi referans almak için kullanılır

// const car = {
//     mode :"Mustang", // noktalı virgül değil virgül kullanılır
//     color:"red",
//     year:2023,

//     drive : function(){
//         console.log(`You drive the ${this.model}`); -> bu şekilde kullanılır
//     };
//     brake : function(){
//         console.log("You step on the brakes");
//     }
// }

// window.name ="myCoolWindow";
// console.log(window.name);

// class -> nesne oluşturmak için bir taslak tanımlamak için kullanılır
// (property ve metodları)

// class Player{
//     score = 0;

//     pause(){
//         console.log("You paused the game");
//     }
//     exit(){
//         console.log("You exited the game")|
//     }
// }

// const player1 = new Player();
// const player2 = new Player();

// player1.score += 1;

// console.log(player1.score);
// console.log(player2.score);

// player1.pause();
// player2.exit();

// constructor -> yapıcı metod

// class Student{
    
//     constructor(name,age, gpa){
//         this.name = name;
//         this.age = age;
//         this.gpa = gpa;
//     }
//     study(){
//         console.log(`${this.name} is studying`);
//     }
// }

// const student1 = new Student ("Spongebob", 30, 3.2);
// const student2 = new Student ("Patrick Şivayzi", 25, 3.4);

// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gpa);
// console.log(student2.name);

// super ->  kalıtım alınan sınıfın kurucusuna parametre geçirmek için kullanılır

// class Animal{
// constructor(name,age){
//     this.name = name;
//     this.age = age;
// }
// }

// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name,age);
//         this.runSpeed = runSpeed;
//     }
// }

// class Fish extends Animal {
//     constructor(name, age, swimSpeed){
//         super(name,age);
//         this.swimSpeed = swimSpeed;
//     }
// }

// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name,age);
//         this.flySpeed = flySpeed;
//     }
// }

// const rabbit = new Rabbit("rabbit", 1, 40);
// const fish = new Fish("fish", 2, 80);
// const hawk = new Hawk("hawk", 3, 200);

// console.log(fish.name);
// console.log(fish.age);
// console.log(fish.swimSpeed);

// get -> propertye ulaşmak için kullanılır
// set -> propertye değer ataması için kullanılır

// class Car{
//     constructor(power){
//         this._gas = 25;
//         this._power = power;
//     }
//     get power(){
//         return `${this._power}hp`;
//     }
//     get gas(){
//         return `${this._gas} L (${this._gas / 50 * 100 } %)`;
//     }

//     set gas(value){
//         if(value > 50){
//             value = 50;
//         }
//         else if(value < 0){
//             value = 0;

//         }
//         this._gas = value;
//     }
// }

// let car = new Car(400);

// console.log(car.power);
// console.log(car.gas);

// Nesnelerin dizi şeklinde oluşturulması
// class Car{
//     constructor(model, year, color){
//         this.model = model;
//         this.year = year;
//         this.color = color;
//     }

//     drive(){
//         console.log(`You drive the ${this.model}`);
//     }
// }
// const car1 = new Car("Mustang", 2023, "red",);
// const car2 = new Car("Corvette", 2024, "blue");
// const car3 = new Car("Lambo", 2022, "yellow");

// const cars = [car1, car2, car3];

// console.log(cars[0].model);
// console.log(cars[1].model);
// console.log(cars[2].model);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();

// startRace(cars);

// function startRace(cars){
//     for(const car of cars){
//         car.drive();
//     }

// }

// Anonymous nesneler -> ismi olmayan nesnelerdir
// direkt referans tutulmamıştır, syntax'ı zayıftır

// class Card{
//     constructor(value,suit){
//         this.value = value;
//         this.suit = suit;
//     }
// }

// let cards = [ new Card("A", "Hearts"), -> virgül kullanılıyor
//               new Card("A", "Spades"),
//               new Card("A", "Diamonds"),
//               new Card("A", "Clubs")];

// cards.forEach(card => console.log(`${card.value} ${card.suit}`))

// Hata Yönetimi

// throw -> hata fırlatma

// try {
//     let x = window.prompt("Entera #");
//     x = Number(x);

//     if(isNaN(x)) throw("That wasn't a number");
//     if(x == "") throw "That was empty!";

//     console.log(`${x} is a number`);
// }

// catch(error){
//     console.log(error);
// }
// finally{
//     console.log("This always executes");
// }

// setTimeout();

// function firstMessage(){
//     alert(`Buy this course for $500!`);
// }
// function secondMessage(){
//     alert(`This is not scam!`);
// }
// function thirdMessage(){
//     alert(`DO IT`);
// }

// setInterval() -> Bir işlemi belirli zaman aralıklarında 
// tekrarlayan iki parametre alan bir fonksiyondur.

// let count = 0;
// let max = window.prompt("Count up to what #?");
// max = Number(max);

// const myTimer = setInterval(countUp, 1000);

// function countUp(){
//     count+=1;
//     console.log(count);
//     if(count >= max){
//         clearInterval(myTimer);
//     }
//}

// let date = new Date(); -> date yazılma şekilleri
// let date = new Date(0);
// let date = new Date(2023, 0, 1, 2, 3, 4, 5);
// let date = new Date("January1, 2023 00:00:00");

// let year = date.getFullYear(); -> bilgisayarın yılını gösterir
// let dayOfMonth = date.getDate(); -> hangi ayda olduğunu gösterir
// let dayOfWeek = date.getDay() -> haftanin kaçıncı gününde olduğunu gösterir
// let month = date.getMonth();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// let seconds = date.getSeconds();
// let ms = date.getMilliseconds();

// date.setFullYear(2024); -> tarihe 2024ü ekler, set kullanıyoruz
// date.setMonth(11);
// date.setDate(31);
// date.setHours(23);
// date.setMinutes(1);
// date.setSeconds(30);
// date.setMilliseconds(0);

// date = date.toLocaleString();
// document.getElementById("myLabel").innerHTML = date;,

// Date İşlemleri
// function formatDate(date){
//     let year = date.getFullYear();
//     let month = date.getMonth();
//     let day = date.getDate();

//     return `${month}/${day}/${year}`
// }

// function formatTime(date){
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();
    
//     let am0rPm = hours >= 12 ? "pm" : "am";
    
//     hours =(hours %12) || 12;
//     return `${hours}:${minutes}:${seconds}`
// }

// Saat Programı

// const myLabel = document.getElementById("myLabel");

// update();
// setInterval(update, 1000);

// function update(){

//     let date = new Date();
//     myLabel.innerHTML = formatTime(date);

//     function formatTime(date){
//         let hours = date.getHours();
//         let minutes = date.getMinutes();
//         let seconds = date.getSeconds();
//         let am0rPm = hours >= 12 ? "pm" : "am";

//         hours = (hours %12) || 12;

//         hours = formatZeroes(hours);
//         minutes = formatZeroes(hours);
//         seconds = formatZeroes(hours);

//         return 
//     }

//     function formatZeroes(time){
//         time = time.toString();
//         return time.length < 2 ? "0" + time : time;
//     }
// }

// synchronous code -> Kodlar yukarıdan aşağıya doğru sırayla işlenir 
// ve bir satırdaki işlem bitmeden diğer satıra geçilmez -> senkron kod buna denir

// asynchronous code -> uzun zaman alan veya farklı görevdeki işlemler aynı anda gerçekleştirilir. -> asenkron kod

// console.log("Start");
// console.log("This step is synchronous");
// console.log("End")

// console.log("Start");
// setTimeout(() => console.log("This is asynchronous"),5000);


// console.time() -> işlemin başlangıç ve bitiş süresi arasındaki 
// farkı yani işlem süresini verir
// //start
// console.time("Response time");

// //alert
// setTimeout(() => console.log("Hello!"), 3000);

// //end
// console.timeEnd("Response time");

// promise ->  asenkron bir operasyonu senkrona çeviriyosun ve ileri bir zaman için yapacağına
// söz veriyorsun

// const wait = time => new Promise(resolve =>{
//     setTimeout(resolve,time);
// });

// wait(3000).then(() => console.log("Thanks for waiting!"));

// async = promise'e geri dönmek için fonksiyon oluşturma da kullanılı

// async function loadFile(){
//     let fileLoaded = false;

//     if (fileLoaded){
//         return "File Loaded";
//     }
//     else{
//         throw("File not loaded");
//     }
// }

// loadFile().then(value => console.log(value))
//           .catch(error => console.log(error));


// await -> asenkron fonksiyonu beklemek için oluşturulur

// async function loadFile(){
//          let fileLoaded = false;
    
//          if (fileLoaded){
//              return "File Loaded";
//          }
//          else{
//              throw("File not loaded");
//         }
//      }
//      async function startProcess(){
//         try{
//             let message = await loadFile();
//             console.log(message);
//         }
//         catch(error){
//             console.log(error);
//         }
//      }
//      startProcess();
    
    
//ES 6 Modülleri

// import {PI, getCircumference, getArea} from "./math_util.js";
// import * as MathUtil from "./math_util.js";
// console.log(MathUtil.PI);

// let circumreference = getCircumference(10);
// console.log(circumreference);

// let area = MathUtil.getArea(10);
// console.log(area);

//DOM -> Document Object Model (API)

// console.dir(document); -> document'e ulaşır
// console.log(document.title); -> document'in başlığını yazar
// console.log(document.URL); -> document urlsine ulaşır
// document.title = "Title goes here!";
// document.location = "http://www.google.com";

// document.body.style.backgroundColor = "skyblue";
// document.getElementById("myDiv").innerHTML = "Hello";

// let element = document.getElementById("myTitle");
// element.style.backgroundColor = "lightgreen";

// let fruits = document.getElementsByName("fruits");

// fruits.forEach(fruit => {
//     if(fruit.checked){
//         console.log(fruit.value);
//     }
// })

// Element selectors!

// let vegetables = document.getElementsByTagName("li");
// vegetables[0].style.backgroundColor = "lightgreen";

// let desserts = document.getElementsByClassName("desserts");
// desserts[2].style.backgroundColor = "lightgreen";

// let element = document.querySelector("[for]");
// element.style.backgroundColor = "lightgreen";

// let elements = document.querySelectorAll("[for]");
// elements.forEach(element =>{
//     element.style.backgroundColor = "lightgreen";
// })

// DOM Traversal https://zellwk.com/blog/dom-traversals/
// let element = document.querySelector("#vegetables");
// let child = element.lastElementChild;
// child.style.backgroundColor = "lightgreen"

// .firstElementChild -> Dizinin ilk child'ı
// .lastElementChild  -> son child
// .parentElement -> parent olan eleman
// .nextElementSibling -> 
// .previousElementSibling
// .children[]
// Array.from(.children)

// HTML elements ekleme/değiştirme
// .innerHTML (XSS saldırılarına karşı güvenli)
// .textContent (daha güvenli)

// const nameTag = document.createElement("h1");
// nameTag.textContent = window.prompt("Enter your name")
// document.body.append(nameTag);

// const myList = document.querySelector("#fruit");
// const listItem = document.createElement("li");
// listItem.textContent = "mango";
// myList.append(listItem);
// myList.prepend(listItem);
// myList.insertBefore(listItem, myList.getElementsByTagName("li")[2]);

// CSS Propertyleri degiştirme/ekleme

// const title = document.getElementById("myTitle");
// title.style.backgroundColor = "#222222"; -> arkaplan rengi
// title.style.color = "rgb(50,200,250)"; -> title'ın rengi
// title.style.fontFamily = "consolas";   -> font
// title.style.textAlign="center"; -> text nerede olacak
// title.style.border ="2px solid"; -> boyutu nasıl olacak
// title.style.display = "block";

//Events
// const element = document.getElementById("myButton");
// const element = document.body;
// const element = document.getElementById("myText");
// const element = document.getElementById("myDiv");

// element.onclick = doSomething;
// element.onload = doSomething;
// element.onchange = doSomething;
// element.onmouseover = doSomething;
// element.onmouseout = doSomethingElse;
// element.onmousedown = doSomething;
// element.onmouseup = doSomethingElse;

// function doSomething(){
//     //alert("You did something!");
//     element.style.backgroundColor = "red";
// }
// function doSomethingElse(){
//     //alert ("You did something");
//     element.style.backgroundColor ="lightgreen"
// }

// .addEventListener(event, function, useCapture) -> HTML dökümanı üzerinde belirtilen
// elementi dinleyip,istenilen olay gerçekleştiğinde 
// bir metod çalıştırmak için kullanılır.

// const innerDiv = document.getElementById("innerDiv");
// const outerDiv = document.getElementById("outerDiv");

// innerDiv.addEventListener("click", changeBlue);
// outerDiv.addEventListener("click", changeBlue, true);

// function changeBlue(){
//     alert(`You selected ${this.id}`);
//     this.style.backgroundColor = "lightblue"
// }

// HTML Element'leri gizle/göster
// const myButton = document.querySelector("#myButton");
// const myImg = document.querySelector("myImg");

// myButton.addEventListener("click", () => {
//     console.log(myImg.style.display);
//     if(myImg.style.visibility== "hidden"){
//         myImg.style.visibility = "visible";
//     }
//     else{
//         myImg.style.display = "hidden";
//     }
// })

//Animasyon
// const myButton = document.getElementById("myButton");
// const myAnimation = document.getElementById("myDiv");

// myButton.addEventListener("click", begin);

// function begin(){
//     let timerId= null
//     let x = 0;
//     let y = 0;

//     timerIdsetInterval(frame, 5);

//     function frame(){
//         if(x >= 200 || y>=200){
//             clearInterval(timerId);
//         }
//         else {
//             x+=1;
//             y+=1;
//             myAnimation.style.left = x + "px";
//             myAnimation.style.top = y +"px";
//         }
//     }
// }

// CANVAS API
 let canvas = document.getElementById("myCanvas");
 let context = canvas.getContext("2d");

// context.strokeStyle = "purple";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(0, 0);
// context.lineTo(250, 250);
// context.lineTo(250, 500);
// context.moveTo(500, 0);
// context.lineTo(250,250);
// context.stroke();

// Üçgen
// context.strokeStyle = "g";
// context.fillStyle = "yellow";
// context.lineWidth = 10;
// context.beginPath();
// context.moveTo(250,0);
// context.lineTo(0,250);
// context.lineTo(500,250);
// context.lineTo(250,0);
// context.stroke();
// context.fill();

// Kare

// context.fillStyle="black";
// context.fillRect(0,0,250,250);
// context.strokeStyle ="black";
// context.strokeRect(0,0,250,250);

// context.fillStyle = "red";
// context.fillRect(0,250,250,250);
// context.strokeStyle = "black";
// context.strokeRect(0,250,250,250);

// context.fillStyle = "green";
// context.fillRect(250,250,250,250);
// context.strokeStyle = "black";
// context.strokeRect(250,250,250,250);

// context.fillStyle = "blue";
// context.fillRect(250,250,250,250);
// context.strokeStyle = "black";
// context.strokeRect(250,250,250,250);

// Daire
// (x, y, r, sAngle, eAngle, counterclockwise)
// context.fillStlye = "lightblue";
// context.strokeStyle = "darkblue";
// context.lineWidth =10;
// context.beginPath();
// context.arc(250,250,200,0,2*Math.PI);
// context.stroke();
// context.fill();

// window ->

//console.dir(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);
// console.log(window.scrollX);
// console.log(window.scrollY);

// console.log(window.location.href);
// window.location.href = "https://google.com";
// console.log(window.location.hostname);
// console.log(window.location.pathname);

// myButton.addEventListener("click",() =>window.open() );
// myButton.addEventListener("click", () => window.close());
// myButton.addEventListener("click", () => window.print());

// let age = window.prompt("Enter your age");
// if(age< 18){
//     window.alert("You must be 18+");
//     window.close
// }


