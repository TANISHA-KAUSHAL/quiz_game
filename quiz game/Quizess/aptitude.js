const questions =[
    {
        question: "Which one of the following is not a prime number?",
        answers: [
            {text: "31",correct:false},
            {text: "61",correct:false},
            {text: "91",correct:true},
            {text: "71",correct:false},
        ]
    },
    {
        question: "What least number must be added to 1056, so that the sum is completely divisible by 23 ?",
        answers: [
            {text: "3",correct:false},
            {text: "2",correct:true},
            {text: "18",correct:false},
            {text: "21",correct:false},
        ]
    },
    {
        question: "1397 x 1397 = ?",
        answers: [
            {text: "1951609",correct:true},
            {text: "1981709",correct:false},
            {text: "18362619",correct:false},
            {text: "2031719",correct:false},
        ]
    },
    {
        question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:",
        answers: [
            {text: "588 apples",correct:false},
            {text: "600 apples",correct:false},
            {text: "672 apples",correct:false},
            {text: "700 apples",correct:true},
        ]
    },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="Block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();
