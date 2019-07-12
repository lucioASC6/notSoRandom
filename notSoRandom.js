function random(num) {
    if (isNaN(num)) {
        throw "Parameter is not a number!";
    }
    else {
        console.log(Math.floor(Math.random() * num));
    }
}
// random(10);
// random(100);
// random("Hello, world!")

function randomLetter(ltr) {
    if (isNaN(ltr)) {
        console.log(ltr[Math.floor(Math.random() * ltr.length)]);
    }
    else {
        throw "Parameter is not a String!";
    }
}
// randomLetter("blah");
// randomLetter("abcdefg");
// randomLetter("z");
// randomLetter(8);

function myGuy(word) {
    if (isNaN(word)) {
        console.log(word + ", my guy");
    }
    else {
        throw "Parameter is not a String!";
    }   
}
// myGuy("Take it easy");
// myGuy(21);

function string_N_times(word, count) {
    if (! isNaN(word) || isNaN(count)) {
        throw "Parameter is not a String or a number!";
    }
    else {
        for(i = 0; i < count; i++) {
            console.log(word);
        }
    }
}
// string_N_times("All Star Code", 6);
string_N_times(6, "All Star Code");


function hypotenuse(num0, num1) {
    if (isNaN(num0) || isNaN(num1)) {
        console.log("Parameter is not a number!")
    }
    else {
        console.log(Math.sqrt(Math.pow(num0, 2) + Math.pow(num1, 2)));
    }
}
// hypotenuse(3, 4);
// hypotenuse(5, 12);
// hypotenuse(seven, twenty);