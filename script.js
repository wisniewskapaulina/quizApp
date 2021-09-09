const quizData = [
    {
        question: "How can you tell the age of most trees?",
        a: "By measuring the tree's width",
        b: "By measuring the tree's height",
        c: "By counting the rings on the trunk",
        d: "By counting the number of branches",
        correct: "c" 
    }, {
        question: "What is an annual plant?",
        a: "One that dies in a year",
        b: "One that loses its leaves in the winter",
        c: "One that lives for more than two years",
        d: "One that dies every two years",
        correct: "a"        
    }, {
        question: "What is chocolate made from?",
        a: "Coffee beans",
        b: "Cocoa beans",
        c: "Durum wheat",
        d: "Chicory",
        correct: "b"
    }, {
        question: "What are leaves for?",
        a: "To soak up the sun's energy and convert it into food",
        b: "To protect plants from the rain",
        c: "To protect flowers from insects and other animals",
        d: "To make the plant look pretty",
        correct: "a"
    }, {
        question: "What is a decidous plant?",
        a: "A plant that bears fruit",
        b: "A plant that keeps its leaves all year around",
        c: "To plant that loses its leaves each year",
        d: "A plant that bears cones all year round",
        correct: "c"
    }, {
        question: "An extract from which species of succulent is used to produce tequila?",
        a: "Aloe",
        b: "Echeveria",
        c: "Agave",
        d: "Sedum",
        correct: "c"
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

//funkcja zaciągająca pytania i odpowiedzi z tablicy
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//start
loadQuiz();


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
            console.log(answerEl.id)
        }
    });
    return answer;
}



//usuwanie zaznaczonej odpowiedzi przy kolejnym pytaniu
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h4>You answered correctly at ${score}/${quizData.length} questions.</h4>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});