var counter = new Date ("Apr 12, 2025 11:24:00").getTime()

var countFunc = setInterval(function() {
    var currentTime = new Date().getTime();
})

// var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
// var hours = Math.floor ((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
// var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
// var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

console.log(countFunc);

const element = document.getElementById("linkedImg");
    element.addEventListener("click", bowlFunction);

function bowlFunction() {
    document.getElementById("bowlSentence").innerHTML = "This is a gif showing a clay bowl being made!";
}

