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
    } else finish();
}

