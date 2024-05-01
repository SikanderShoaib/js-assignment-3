


//Answer 02


var integer1 = prompt("Enter a integer 1 to display the larger");
var integer2 = prompt("Enter a integer 2 to display the larger");
if(integer1 > integer2){
    document.write("Your integer one is larger than integer two");
}else if(integer1 == integer2){
    document.write("Your integer one is equal to integer two");
}else if(integer1 < integer2){
    document.write("Your integer two is larger than integer one");
}else if("" == ""){
    document.write("Please Enter a Valid Number");
}else{
    document.write("Please Enter a Valid Number");
}


//Answer 03


var userNumber = prompt("Enter a number that check the number is zero postive or negative");
if(userNumber == 0){
    document.write("The number is zero");
}else if(userNumber > 1){
    document.write("The number is positive");
}else{
    document.write("The number is negative");
}

//Answer 04


var vowels = prompt("Enter a correct vowels");
if(vowels == "a"){
    document.write("The " + vowels + " is vowels");
}else if(vowels == "e"){ 
    document.write("The " + vowels + " is vowels");
}else if(vowels == "i"){
    document.write("The " + vowels + " is vowels");
}else if(vowels == "o"){
    document.write("The " + vowels + " is vowels");
}else if(vowels == "u"){
    document.write("The " + vowels + " is vowels");
}else{
    document.write("The " + vowels + " consonant");
}
//Answer 05


var correctPassword = prompt("Store a correct password");
var clonePassword = prompt("Store a new password");
if (clonePassword === "") {
    document.write("Please Enter Your Pssword")
}else if(correctPassword === clonePassword){
    document.write("Correct");
}else{
    document.write("Incorrect Password");
}

//Answer 06


var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
console.log(greeting);
}
else{
    greeting = "Good evening";
    console.log(greeting);
}


//Answer 07


var time = +prompt("Enter a time in 24 hour format");
if (time >= 0 && time < 12) {
    document.write("Good Morning");
}else if(time >= 12 && time < 17){
    document.write("Good Afternoon");
}else if(time >=17 && time < 21){
    document.write("Good Evening");
}else if(time >=21 && time < 24){
    document.write("Good Night");
}else{
    document.write("Enter a Valid Time");
}