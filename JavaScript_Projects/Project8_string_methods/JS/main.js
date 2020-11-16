function Full_Sentence() {
    var part_1 = "This will ";
    var part_2 = "become ";
    var part_3 = "a full ";
    var part_4 = "sentence.";
    var whole_sentance = part_1.concat(part_2, part_3, part_4);
    document.getElementById("id_1").innerHTML = whole_sentance;
}
//This function concatenates many variabels into one, and in this case create a full sentance from parts. Pretty sure you could mix thes variables around to get different sentances or, make a large library of variables to concatenate them all together.
function slice_Method_1() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("id_2").innerHTML = Section;
}
//This function slices words out of a string.
function Upper_Function() {
    var str = "Hello World!";
    var res = str.toUpperCase();
    document.getElementById("id_3").innerHTML = res;
}
//This function returns the string as all UPPER CASE LETTERS.
function Search_Function() {
    var str = "Visit W3Schools!"; 
    var n = str.search("W3Schools");
    document.getElementById("id_4").innerHTML = n;
}
//This function searches the sentence in the html document for a specified word in a string, returning the number place it is in.
function string_Method() {
    var X = 182;
    document.getElementById("id_5").innerHTML = X.toString();
}
//This funciton converts an integer to a string.
function precision_Method() {
    var X = 12938.282761234293276;
    document.getElementById("id_6").innerHTML = X.toPrecision(10);
}
// This funciton will precisly display a number to a specified amount.
