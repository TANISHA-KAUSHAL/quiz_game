const questions =[
    {
        question: " What is a data structure?",
        answers: [
            {text: " A programming language",correct:false},
            {text: " A collection of algorithms",correct:false},
            {text: " A way to store and organize data",correct:true},
            {text: " A type of computer hardware",correct:false},
        ]
    },
    {
        question: "Which data structure is used for implementing recursion?",
        answers: [
            {text: "Stack",correct:true},
            {text: "Queue",correct:false},
            {text: "List",correct:false},
            {text: "Array",correct:false},
        ]
    },
    {
        question: "Which data structure is needed to convert infix notation to postfix notation?",
        answers: [
            {text: "Tree",correct:false},
            {text: "Branch",correct:false},
            {text: "Stack",correct:true},
            {text: "Queue",correct:false},
        ]
    },
    {
        question: " What is the value of the postfix expression (6*(3-(2+4)))?",
        answers: [
            {text: "74",correct:false},
            {text: "-18",correct:true},
            {text: "22",correct:false},
            {text: "40",correct:false},
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