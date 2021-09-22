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
questions: ["ques1", "ques2", "ques3", "ques4", "ques5"],
answer1: ["1234", "5678 ", "66 ", " 77", " 88"],
answer2: ["33 ", " 55", " 66", "77 ", " 88"],
answer3: [" 44", "55 ", " 66", "77 ", " 99"],
answer4: ["55 ", "55 ", " 66", "77 ", " 99"],
correctAnswers: [" 44", "5678", " 66", " 77", " 99"],
}

i = 1

//buttons for the answers 
listItems.addEventListener("click", function(){
    var answer = event.target.textContent
    // target = correctAnswers[1];
    if(answer == quiz.correctAnswers[i]){ //fix if statement
        results.textContent = "Correct!"
    }
    else if(secondsLeft > 0){
        results.textContent = "Wrong...";
        secondLeft = secondsLeft - 5;
    }

    if (i < quiz.questions.length){
        questionEl.textContent = quiz.questions[i];
        ans1.textContent = quiz.answer1[i];
        ans2.textContent = quiz.answer2[i];
        ans3.textContent = quiz.answer3[i];
        ans4.textContent = quiz.answer4[i];
        i++;
    console.log("button shoud go to next qs")
    }  

    });
// //Question #2
//     function question2(){
//         question.textContent = quiz.questions[1];
//         ans1.textContent = quiz.answer1[1];
//         ans2.textContent = quiz.answer2[1];
//         ans3.textContent = quiz.answer3[1];
//         ans4.textContent = quiz.answer4[1];

//         if (quiz.correctAnswers[1] === quiz.answer1[1] && secondsLeft!== 0){
//             question3();
//         } else {
//             secondsLeft = secondsLeft - 5;
//             question3();
//             }
//     }
// //Question #3
//     function question3(){
//         question.textContent = quiz.questions[2];
//         ans1.textContent = quiz.answer1[2];
//         ans2.textContent = quiz.answer2[2];
//         ans3.textContent = quiz.answer3[2];
//         ans4.textContent = quiz.answer4[2];

//         if (quiz.correctAnswers[2] === quiz.answer4[2] && secondsLeft!== 0){
           
//             question4();
//         } else {
//             secondsLeft = secondsLeft - 5;
//             question4();
//             }
//     }
// //Question #4
//     function question4(){
//         question.textContent = quiz.questions[3];
//         ans1.textContent = quiz.answer1[3];
//         ans2.textContent = quiz.answer2[3];
//         ans3.textContent = quiz.answer3[3];
//         ans4.textContent = quiz.answer4[3];

//         if (quiz.correctAnswers[3] === quiz.answer1[3] && secondsLeft!== 0){
//             question5();
//         } else {
//             secondsLeft = secondsLeft - 5;
//             question5();
//             }
//     }
// //Question #5
//     function question5(){
//         question.textContent = quiz.questions[4];
//         ans1.textContent = quiz.answer1[4];
//         ans2.textContent = quiz.answer2[4];
//         ans3.textContent = quiz.answer3[4];
//         ans4.textContent = quiz.answer4[4];

//         if (quiz.correctAnswers[4] === quiz.answer3[4] && secondsLeft!== 0){
            
//             question.textContent = "You scored " + secondsLeft;
//         } else {
//             secondsLeft = secondsLeft - 5;
//             question.textContent = "You scored " + secondsLeft;
//             }
//     }


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

    //name of function for eventlistener

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
        
        //Deduct 5 secs when a question is answered incorrectly
        //if()
    
      }, 1000);
    
}

function endQuiz(){
    timer.textContent = "Time's Up!"
    //getScore();
    //Clear the questions and answers
}

// Add highscore info
