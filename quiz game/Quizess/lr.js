const questions =[
    {
        question: "1. All guns are boats.2. Some boats are not guns",
        answers: [
            {text: "If only conclusion 1 follows.",correct:false},
            {text: "If only conclusion 2 follows.",correct:false},
            {text: "If either 1 or 2 follows.",correct:false},
            {text: "If neither 1 nor 2 follows.",correct:true},
        ]
    },
    {
        question: "2. If A+B means A is the mother of B; A-B means A is the brother of B; A%B means A is the father of B and A*B means A is the sister of B, Which of the following shows that P is the maternal Uncle of Q ?",
        answers: [
            {text: "Q-N+M*P",correct:false},
            {text: "Q-S%P",correct:false},
            {text: "P+S*N-Q",correct:false},
            {text: "P-M+N*Q",correct:true},
        ]
    },
    {
        question: "Find out the wrong in the given sequence of numbers: 582,605,588,611,634,617,600",
        answers: [
            {text: "611",correct:false},
            {text: "634",correct:true},
            {text: "605",correct:false},
            {text: "600",correct:false},
        ]
    },
    {
        question: "Paisa:Rupee:: ? :Kilometre",
        answers: [
            {text: "Metre",correct:false},
            {text: "Hectometre",correct:false},
            {text: "Quintal",correct:false},
            {text: "Decametre",correct:true},
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