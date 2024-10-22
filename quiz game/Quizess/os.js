const questions =[
    {
        question: "What is an operating system?",
        answers: [
            {text: " interface between the hardware and application programs",correct:false},
            {text: "collection of programs that manages hardware resources",correct:false},
            {text: "system service provider to the application programs",correct:false},
            {text: "All of the mentioned",correct:true},
        ]
    },
    {
        question: " In Operating Systems, which of the following is/are CPU scheduling algorithms?",
        answers: [
            {text: "Priority",correct:false},
            {text: "Round Robin",correct:false},
            {text: "SJF",correct:false},
            {text: "All of the mentioned",correct:true},
        ]
    },
    {
        question: "The FCFS algorithm is particularly troublesome for ____________",
        answers: [
            {text: "operating system",correct:false},
            {text: "multiprocessor systems",correct:false},
            {text: "time sharing system",correct:true},
            {text: "multiprogramming",correct:false},
        ]
    },
    {
        question: "The main memory accommodates ____________",
        answers: [
            {text: "cpu",correct:false},
            {text: "user processor",correct:false},
            {text: "operating system",correct:true},
            {text: "All of the mentioned",correct:false},
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