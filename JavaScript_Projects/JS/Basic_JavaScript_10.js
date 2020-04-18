function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Digit;
}
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for(Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content
}
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "purring";
    Cat_Picture[1] = "sleeping";
    Cat_Picture[2] = "playing";
    Cat_Picture[3] = "eating";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}
function constant_function () {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};    
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML="The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}
var X = 42;
document.write("<br>" + X);
{
    let X = 25;
    document.write("<br>" + X);
}
document.write("<br>" + x);
function pi() {
    return Math.PI;
}
document.getElementById("math").innerHTML = pi();