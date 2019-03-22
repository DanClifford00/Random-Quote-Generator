/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
var message = '';
var randomNumber;
var red;
var green;
var blue;

/*Below is an array of objects containing quotes,sources,citations and years */
var quotes = [
    {
        quote: "Those who dare to fail miserably can achieve greatly.",
        source: "John F.Kennedy",
        citation: "Anti-Apartheid speech",
        year: 1966,
        tag: "#Politics"
    },

    {
        quote: "With great power comes great responsibility",
        source: "Uncle Ben",
        citation: "Spiderman",
        year: 2002,
        tag: "#Movies"
    },

    {
        quote: "Never say never. Because limits, like fears are often just an illusion.",
        source: "Michael Jordan",
        citation: "Basketball Hall of Fame induction speech",
        year: 2009,
        tag: "#Sports"
    },

    {
        quote: "First, solve the problem. Then, write the code.",
        source: "John Johnson",
        tag: "#Programming"
    },

    {
        quote: "Just because something doesn't do what you planned it to do doesn't mean it's useless.",
        source: "Thomas A. Edison",
        tag: "#Engineering"
    },

    {
        quote: "Tell me and I forget, teach me and I may remember, involve me and I learn.",
        source: "Benjamin Franklin",
        tag: "#Politics"
    },

    {
        quote: "Simplicity is the ultimate sophistication.",
        source: "Leonardo da Vinci",
        tag: "#Engineering"
    }
]

function randomColor() {
	var randomBackgroundColor;
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomBackgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomBackgroundColor;
}

/*This function allows a different quote to be displayed every 10 seconds once its called*/
function timer(){
    timeout = setInterval(printQuote, 10000);
    randomColor();
}
/*This function replaces the contents of the HTML Div and replaces it with the message string*/
function print(quote) {
	var messageDiv = document.getElementById('quote-box');
	messageDiv.innerHTML = quote;
}
/*Function getRandomQuote generates random number and stores it in a variable. This random number is used get a random object within the array*/
function getRandomQuote(){
    randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}
/*Function printQuote builds the HTML string using the random property values generated */
function printQuote(){
    var randomQuote = getRandomQuote();
    message ='<p class="quote">' + randomQuote.quote + '</p>';
    message += '<p class="source">' + randomQuote.source;

    if ( randomQuote.citation ) {
        message += '<span class="citation">' + randomQuote.citation + '</span>';
    }   else{
            message += '';
        }
    if ( randomQuote.year ){
        message += '<span class="year">' + randomQuote.year + '</span>';
    }    else{
            message += '';
    }
    if ( randomQuote.tag ){
        message += '<span>' + randomQuote.tag + '</span>';
    }    else{
            message += '';
    }
    message += '</p>';
    print(message);

    var presentColor = randomColor();
    document.getElementById('background-color').style.backgroundColor = presentColor;
    document.getElementById('loadQuote').style.backgroundColor = presentColor;
}

/*When the buttom is clicked the EventListener responds and the printQuote function is called*/
document.getElementById('loadQuote').addEventListener('click', printQuote, false);
timer();
