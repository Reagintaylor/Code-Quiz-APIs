var startBtn = document.querySelector("#startbtn")
var timer = document.querySelector("#timer")
var listItems = document.querySelector("#list-items")
var questionEl = document.querySelector("#questions")
var ans1 = document.querySelector("#ans1")
var ans2 = document.querySelector("#ans2")
var ans3 = document.querySelector("#ans3")
var ans4 = document.querySelector("#ans4")
var results = document.querySelector("#results")

//Question and answer strings
var quiz = {
questions: ["Which element do you use to link a javscript file to an html file?", "Which program is primarily used for styling?", "what symbol is used in CSS to refer to an 'id' in html?", "Which property is used in javascript to style an element?", "Which of the following is not a primitive type in javascript?"],
answer1: ["<link></link>", "CSS", ".", "setAttribute()", "number"],
answer2: ["<a></a>", "Javascript", "/", "textContent", "boolean"],
answer3: ["<script></script>", "HTML", "[]", "console.log()", "span"],
answer4: ["<img/>", "jQuery", "#", "querySelector", "string"],
correctAnswers: ["<script></script>", "CSS", "#", "setAttribute()", "span"],
}

i = 1

// I added the functions up here so that it I can call them down below,
// else it will show up as undefined.
function endQuiz(){
    timer.textContent = "Time's Up!";
    question.textContent = "You scored " + secondsLeft;
    //getScore(); 
    //Clear the questions and answers
    ans1.textContent.setAttribute("style", "display:none;");
    ans2.textContent.setAttribute("style", "display:none;");
    ans3.textContent.setAttribute("style", "display:none;");
    ans4.textContent.setAttribute("style", "display:none;");
}
// Add highscore info


//buttons for the answers 
listItems.addEventListener("click", function(event){
    var answer = event.target.textContent;
    // console.dir(event.target.textContent);
    if(answer === quiz.correctAnswers[i]){ //fix if statement
        results.textContent = "Correct!";
    }
    else if(answer !== quiz.correctAnswers[i] && secondsLeft > 0){
        results.textContent = "Wrong...";
        secondsLeft = secondsLeft - 5;
    }
    else if(answer !== quiz.correctAnswers[i] && secondsLeft <= 0){
        clearInterval(timerItvl);
          // Calls function to end quiz and display score
        endQuiz();
    } 
    else if (answer === quiz.correctAnswers[4] && secondsLeft > 0){
        endQuiz();
    }   
    
    else {
        endQuiz();
    }
        //             question.textContent = "You scored " + secondsLeft;
        //         } else {
        //             secondsLeft = secondsLeft - 5;
        //             question.textContent = "You scored " + secondsLeft;
        //             }

    if (i < quiz.questions.length){
        questionEl.textContent = quiz.questions[i];
        ans1.textContent = quiz.answer1[i];
        ans2.textContent = quiz.answer2[i];
        ans3.textContent = quiz.answer3[i];
        ans4.textContent = quiz.answer4[i];
        i++;
        console.log("button shoud go to next qs")
    }  

    if(i === (quiz.questions[4])){
        endQuiz();
    }

    });


// start button function
startBtn.addEventListener("click", function(){
    startTimer();
    document.querySelector(".start-text").style.display = "none";
    document.querySelector("#instructions").style.display = "none";
    listItems.style.visibility = "visible";
    
    questionEl.textContent = quiz.questions[0];
    ans1.textContent = quiz.answer1[0];
    ans2.textContent = quiz.answer2[0];
    ans3.textContent = quiz.answer3[0];
    ans4.textContent = quiz.answer4[0];


})



var secondsLeft = 60 

// timer function
var startTimer = function() {
    startBtn.style.display = "none"
    var timerItvl = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        timer.setAttribute("style", "color: teal; font-size: 50px;");

        if(secondsLeft <= 5) {
            timer.setAttribute("style", "color: red; font-size: 50px;");
        }

        if(secondsLeft === 0) {
          // Stops timer
          clearInterval(timerItvl);
          // Calls function to end quiz and display score
          endQuiz();
        }
      }, 1000);
    
}

// function endQuiz(){
//     timer.textContent = "Time's Up!";
//     question.textContent = "You scored " + secondsLeft;
//     //getScore();
//     //Clear the questions and answers
//     ans1.textContent.setAttribute("style", "display:none;");
//     ans2.textContent.setAttribute("style", "display:none;");
//     ans3.textContent.setAttribute("style", "display:none;");
//     ans4.textContent.setAttribute("style", "display:none;");
// }

// Add highscore info
