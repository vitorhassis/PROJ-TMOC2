const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const questionqnt = document.querySelector(".questionqnt");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

import questions from "./question.js";

let currentIndex = 0; //uma variavel que mantem o indice da pergunta atual dentro do array questions;
let questionsCorrect = 0;

btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinish.style.display = "none";
}

function nextQuestion(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if (currentIndex < questions.length -1) {
        currentIndex++;
        loadQuestion();
    } else {
        finish();
    } 
}

function finish() {
    textFinish.innerHTML = `Você acertou ${questionCorrect} de ${question.length}`;
    content.style.display = "none";
    contentFinish.style.display = "flex";
}

function loadQuestion() {
    questionqnt.innerHTML = `${currentIndex + 1}/${question.length}`;
    const item = questions [currentIndex]; //obter a pergunta e sua resposta de acordo com o indice atual
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
          ${answer.option}
        </button>
        `;
        //atributo data-correct é usado para armazenar a informação sobre se a resposta é correta ou não. Ou seja, quando o usuário clica em um botão, o código verifica o valor de data-correct para determinar se a resposta está correta (answer correct) dentre as opções de resposta (answer.option)

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();
