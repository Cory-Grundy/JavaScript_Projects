document.write(typeof 5);

function my_function() {
    document.getElementById("Test").innerHTML = 0/0;
}
//this fucntion should try to divide by zero.
function my_function2() {
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}
//This function will tell the user that the sentance is a string.
function my_function3() {
    document.getElementById("Test3").innerHTML = isNaN('007');
}
//This functionwill see if there are numbers in the function, then display false, becasue it is all letters.
function my_function4() {
    document.getElementById("Test4").innerHTML = document.write(2E310);
}
//This function will display the highest possible floating point number.  It also breaks the webpage, probably because of how large the number is before saying Infinity.
function my_function5() {
document.getElementById("Test5").innerHTML = document.write(-3E310);
}
//This function will display the lowest possible number floating point number.  This one also breaks the webpage, will need to see how to fix it.
function my_function6() {
document.getElementById("Test6").innerHTML = !(10 > 5);
}
//This function will utilize the NOT operator and display true.
function my_function7() {
document.getElementById("Test7").innerHTML = !(10 < 5);
}
//This function will also use the NOT operator to display false.

document.write(5>2 && 10>4);
document.write(5>10 || 10>4);

//Extra code, that I do not recall why it is here. (Notes?)
// document.write(10 > 2);

// document.write(10 < 2);

// console.log (2+2)

// document.write("10" + 5);

// console.log(23 < 6);
document.write(10 == 10);

document.write(3 == 11);
x = 4;
y = 4;
document.write(x === y);
a = 34;
b = "cats";
document.write(a === b);

// c = "42";
// d = 42;
// document.write(c === d);

// e = "cats";
// f = "dogs";
// document.write(e === f);

//Apparently with or without any break statements, it breaks the code here. I had an instructor with me on Zoom and even he was surprized at what was going on.