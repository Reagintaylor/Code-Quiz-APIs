var startBtn = document.querySelector("#startbtn")
var timer = document.querySelector("#timer")
var listItems = document.querySelector("#list-items")
var question = document.querySelector("#questions")
var ans1 = document.querySelector("#ans1")
var ans2 = document.querySelector("#ans2")
var ans3 = document.querySelector("#ans3")
var ans4 = document.querySelector("#ans4")

//Qeustion and answer strings
var quiz = {
questions: ["qyes1", "ques2", "ques3", "ques4", "ques5"],
answer1: ["1234", "5678 ", "66 ", " 77", " 88"],
answer2: ["33 ", " 55", " 66", "77 ", " 88"],
answer3: [" 44", "55 ", " 66", "77 ", " 99"],
answer4: ["55 ", "55 ", " 66", "77 ", " 99"],
correctAnswers: [" 44", "5678", " 66", " 77", " 99"],
}

// start button function
startBtn.addEventListener("click", function(){
    startTimer();
    document.querySelector(".start-text").style.display = "none";
    document.querySelector("#instructions").style.display = "none";
    listItems.style.visibility = "visible";
    question.textContent = quiz.questions[0];
    ans1.textContent = quiz.answer1[0];
    ans2.textContent = quiz.answer2[0];
    ans3.textContent = quiz.answer3[0];
    ans4.textContent = quiz.answer4[0];

    //name of function for eventlistener
   myFunction();
})

//buttons for the answers 
var myFunction = listItems.addEventListener("click", function(){

    if (quiz.correctAnswers[0] === quiz.answer3[0]){
        alert("Correct!");
        question2();
    } else {
        alert("Wrong...");
         question2();
        }
        
//Question #2
    function question2(){
        question.textContent = quiz.questions[1];
        ans1.textContent = quiz.answer1[1];
        ans2.textContent = quiz.answer2[1];
        ans3.textContent = quiz.answer3[1];
        ans4.textContent = quiz.answer4[1];

        if (quiz.correctAnswers[1] === quiz.answer1[1]){
            alert("Correct!");
            question3();
        } else {
            alert("Wrong...");
            question3();
            }
    }
//Question #3
    function question3(){
        question.textContent = quiz.questions[2];
        ans1.textContent = quiz.answer1[2];
        ans2.textContent = quiz.answer2[2];
        ans3.textContent = quiz.answer3[2];
        ans4.textContent = quiz.answer4[2];

        if (quiz.correctAnswers[2] === quiz.answer4[2]){
            alert("Correct!");
            question4();
        } else {
            alert("Wrong...");
            question4();
            }
    }
//Question #4
    function question4(){
        question.textContent = quiz.questions[3];
        ans1.textContent = quiz.answer1[3];
        ans2.textContent = quiz.answer2[3];
        ans3.textContent = quiz.answer3[3];
        ans4.textContent = quiz.answer4[3];

        if (quiz.correctAnswers[3] === quiz.answer1[3]){
            alert("Correct!");
            question5();
        } else {
            alert("Wrong...");
            question5();
            }
    }
//Question #5
    function question5(){
        question.textContent = quiz.questions[4];
        ans1.textContent = quiz.answer1[4];
        ans2.textContent = quiz.answer2[4];
        ans3.textContent = quiz.answer3[4];
        ans4.textContent = quiz.answer4[4];

        if (quiz.correctAnswers[4] === quiz.answer3[4]){
            alert("Correct!");
            //getScore();
        } else {
            alert("Wrong...");
            //getScore();
            }
    }
});

var secondsLeft = 60 

// timer function
var startTimer = function() {
    startBtn.style.display = "none"
    var timerItvl = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft;
        timer.setAttribute("style", "color: blue; font-size: 30px;");

        if(secondsLeft <= 5) {
            timer.setAttribute("style", "color: red; font-size: 40px;");
        }

        if(secondsLeft === 0) {
          // Stops timer
          clearInterval(timerItvl);
          // Calls function to end quiz and display score
          endQuiz();
        }
        
        //Deduct 5 secs when a question is answered incorrectly
        //if()
    
      }, 1000);
    
}

function endQuiz(){
    timer.textContent = "Time's Up!"
    //getScore();
    //Clear the questions and answers
}


