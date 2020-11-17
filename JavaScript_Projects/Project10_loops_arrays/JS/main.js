function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Mucical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$950";
    Musical_Instrument.strings = "a five pack of strings";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price + Musical_Instrument.strings + " for free.";
}

var X = 82;
document.write("<br>" + X);
{
    let X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

function retun_function() {
    return Math.PT;
}
document.getElementById("Return_Function");
