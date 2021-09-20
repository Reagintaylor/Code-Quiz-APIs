var startBtn = document.querySelector(".startbtn")
var timer = document.querySelector("#timer")
var listItems = document.querySelector("#list-items")
var question = document.querySelector("#questions")
var ans1 = document.querySelector("#ans1")
var ans2 = document.querySelector("#ans2")
var ans3 = document.querySelector("#ans3")
var ans4 = document.querySelector("#ans4")

// start button function
startBtn.addEventListener("click", function(){
    startTimer();
    document.querySelector("#start-text").style.visibility = "collapse";
    listItems.style.visibility = "visible"
    question.textContent = "Blahhhjdijdifj"
    ans1.textContent = "ffff"
    ans2.textContent = "fffe"
    ans3.textContent = "fffr"
    ans4.textContent = "ffft"
    document.body.appendChild(ans1);
    document.body.appendChild(ans2);
    document.body.appendChild(ans3);
    document.body.appendChild(ans4);


})

var secondsLeft = 60 

// timer function
var startTimer = function() {
    var timerItvl = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops timer
          clearInterval(timerItvl);
          // Calls function to end quiz and display score
          endQuiz();
        }
        
        //Deduct 5 secs when a question is answered incorrectly
        if()
    
      }, 1000);
    
}

var endQuiz = function(){

}