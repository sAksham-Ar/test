//text effect
document.addEventListener('DOMContentLoaded', function (event) {
    var x = window.matchMedia("(max-width: 768px)")
    if (x.matches){
    var dataText = [
        "Welcome to SpAts",
        "Welcome to SpAts",
        "Welcome to SpAts",
        "Made of star stuff"
    ];
}
else
{
    var dataText = [
        "Welcome to SpAts",
        "Welcome to SpAts",
        "Welcome to SpAts",
        "Welcome to SpAts",
        "Made of star stuff"
    ];
}

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            document.getElementById("typewrite").innerHTML = text.substring(0, i + 1) +
                '<span aria-hidden="true" class="banner_text_w3ls"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback)
            }, 50);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 1000);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function () {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
            
        }
    }
    // start the text animation
    StartTextAnimation(0);
   
});

//preloader

var myVar;

function preloader() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}

document.addEventListener('contextmenu', event => event.preventDefault());

//modal form

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}