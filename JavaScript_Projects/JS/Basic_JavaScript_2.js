function My_Function() {
    var string="This text is green!";
    var result=string.fontcolor("green");
    document.getElementById("Green_Text").innerHTML=result;
}
function myFunction() {
    var sentance="I am learning";
    sentance += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentance;
}
function add(x, y) {
    var x="2";
    var y="4";
    return x+y;
}