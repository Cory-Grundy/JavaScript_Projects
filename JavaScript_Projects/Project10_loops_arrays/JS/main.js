function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}
/* Above code is a basic loop and counst up from 1 to 10. */
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}
/* Above this code is a for Loop. */
function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}
/* This is an array function and it deals with cats. (Not all the time) */
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$950";
    Musical_Instrument.strings = " and a five pack of strings";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + Musical_Instrument.strings + " for free.";
}
/* This code is broken, getting it fixed soon.   (Update) Another typo... */
var X = 82;
document.write("<br>" + X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);
/* ((More broken code,) No longer broken, moved the script tag in the html file to the bottom of the html file and it works now. I also removed the defer tag at the request of Instructor Levi.) This code is a let and a variable together, supposed to produce 3 numbers but they don't show up. */
function retun_function() {
    return Math.PT;
}
document.getElementById("Return_Function");
/* This is a part of the return function. it doesn't seem to want to work either, maybe because of broken code above? */
let car = {
    make: "Chevrolete ",
    model: "Corolla ",
    year: "1999 ",
    color: "gold ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();
/* This block of code creates an object using the let statement. */