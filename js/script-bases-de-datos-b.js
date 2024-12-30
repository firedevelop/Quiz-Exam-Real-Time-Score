import { questions } from './questions-bases-de-datos-b.js';

const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-quiz');
const resultDiv = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');
const showExplanationsCheckbox = document.getElementById('show-explanations');
const alwaysShowExplanationsCheckbox = document.getElementById('always-show-explanations');
const filterCorrectButton = document.getElementById('filter-correct');
const filterIncorrectButton = document.getElementById('filter-incorrect');
const filterEmptyButton = document.getElementById('filter-empty');
const filterAllButton = document.getElementById('filter-all');
const correctCountSpan = document.getElementById('correct-count');
const incorrectCountSpan = document.getElementById('incorrect-count');
const emptyCountSpan = document.getElementById('empty-count');
const allCountSpan = document.getElementById('all-count');
const checkCorrectsButton = document.getElementById('check-corrects');
const checkCorrectsSimplyButton = document.getElementById('check-corrects-simply');

let questionsAnswered = 0;
let correctAnswers = 0;
const userAnswers = new Array(questions.length).fill(null);
let showExplanations = false;
let alwaysShowExplanations = false;

showExplanationsCheckbox.addEventListener('change', (event) => {
    showExplanations = event.target.checked;
    updateExplanationsVisibility();
});

alwaysShowExplanationsCheckbox.addEventListener('change', (event) => {
    alwaysShowExplanations = event.target.checked;
    updateExplanationsVisibility();
});

filterCorrectButton.addEventListener('click', () => filterQuestions('correct'));
filterIncorrectButton.addEventListener('click', () => filterQuestions('incorrect'));
filterEmptyButton.addEventListener('click', () => filterQuestions('empty'));
filterAllButton.addEventListener('click', () => filterQuestions('all'));
checkCorrectsButton.addEventListener('click', () => checkAllCorrectAnswers(false));
checkCorrectsSimplyButton.addEventListener('click', () => checkAllCorrectAnswers(true));

function buildQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `<p>${question.question}</p>`;

        const optionsDiv = document.createElement('div');
        optionsDiv.classList.add('options');
        question.options.forEach((option, optionIndex) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${index}`;
            input.value = optionIndex;
            input.id = `question-${index}-option-${optionIndex}`;

            input.addEventListener('change', () => checkAnswer(index, optionIndex));

            const label = document.createElement('label');
            label.htmlFor = `question-${index}-option-${optionIndex}`;
            label.textContent = option;

            const optionDiv = document.createElement('div');
            optionDiv.appendChild(input);
            optionDiv.appendChild(label);
            optionsDiv.appendChild(optionDiv);
        });

        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);

        const explanationDiv = document.createElement('div');
        explanationDiv.classList.add('explanation');
        explanationDiv.style.display = 'none';
        setExplanationText(explanationDiv, question);
        questionDiv.appendChild(explanationDiv);
    });
    updateExplanationsVisibility();
    updateScoreDisplay();
}

function checkAnswer(questionIndex, selectedOption) {
    const questionDiv = document.querySelector(`#quiz-container > div:nth-child(${questionIndex + 1})`);
    const explanationDiv = questionDiv.querySelector('.explanation');

    if (userAnswers[questionIndex] === null) {
        questionsAnswered++;
    }

    const previousAnswer = userAnswers[questionIndex];
    userAnswers[questionIndex] = parseInt(selectedOption);

    if (parseInt(selectedOption) === questions[questionIndex].answer) {
        if (previousAnswer !== questions[questionIndex].answer) {
            correctAnswers++;
        }

        questionDiv.classList.add('correct');
        questionDiv.classList.remove('incorrect');
        if (!alwaysShowExplanations) {
            explanationDiv.style.display = 'none';
        }
        explanationDiv.innerHTML = "";
    } else {
        if (previousAnswer === questions[questionIndex].answer) {
            correctAnswers--;
        }
        questionDiv.classList.add('incorrect');
        questionDiv.classList.remove('correct');
        explanationDiv.style.display = alwaysShowExplanations ? 'block' : (showExplanations ? 'block' : 'none');
        setExplanationText(explanationDiv, questions[questionIndex]);
    }
    updateExplanationsVisibility();
    updateScoreDisplay();
}

function setExplanationText(explanationDiv, question) {
    explanationDiv.innerHTML = `<p>Explanation: ${question.explanation || "No explanation provided"}</p>`;
}

function updateExplanationsVisibility() {
    const allExplanations = document.querySelectorAll('.explanation');
    allExplanations.forEach((explanation, index) => {
        const questionDiv = document.querySelector(`#quiz-container > div:nth-child(${index + 1})`);
        if (alwaysShowExplanations) {
            explanation.style.display = 'block';
            setExplanationText(explanation, questions[index]);
        } else if (showExplanations && questionDiv.classList.contains('incorrect')) {
            explanation.style.display = 'block';
        } else {
            explanation.style.display = 'none';
        }
    });
}

function updateScoreDisplay() {
    const incorrectAnswers = questionsAnswered - correctAnswers;
    const emptyAnswers = questions.length - questionsAnswered;
    correctCountSpan.textContent = correctAnswers;
    incorrectCountSpan.textContent = incorrectAnswers;
    emptyCountSpan.textContent = emptyAnswers;
    allCountSpan.textContent = questions.length;
    scoreDisplay.innerHTML = ``;
}

function filterQuestions(filterType) {
    const allQuestionDivs = document.querySelectorAll('#quiz-container > div');

    allQuestionDivs.forEach((questionDiv, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);

        if (filterType === 'all') {
            questionDiv.style.display = 'block';
        } else if (filterType === 'correct') {
            if (selectedOption && parseInt(selectedOption.value) === questions[index].answer) {
                questionDiv.style.display = 'block';
            } else {
                questionDiv.style.display = 'none';
            }
        } else if (filterType === 'incorrect') {
            if (selectedOption && parseInt(selectedOption.value) !== questions[index].answer) {
                questionDiv.style.display = 'block';
            } else {
                questionDiv.style.display = 'none';
            }
        } else if (filterType === 'empty') {
            if (!selectedOption) {
                questionDiv.style.display = 'block';
            } else {
                questionDiv.style.display = 'none';
            }
        }
    });
}
function checkAllCorrectAnswers(simply) {
    const allQuestionDivs = document.querySelectorAll('#quiz-container > div');
    allQuestionDivs.forEach((questionDiv, index) => {
          const optionsDiv = questionDiv.querySelector('.options');
          const correctInput = optionsDiv.querySelector(`input[name="question-${index}"][value="${questions[index].answer}"]`);

          if(correctInput){
            correctInput.click();

          }

         if (simply) {
             optionsDiv.querySelectorAll(`input:not([value="${questions[index].answer}"])`).forEach(input => input.closest('div').style.display = 'none');
        } else {
             optionsDiv.querySelectorAll('input').forEach(input => input.closest('div').style.display = 'block');
       }
     });
}



function showResults() {
    let correctAnswers = 0;
    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);

        if (selectedOption) {
            const selectedAnswer = parseInt(selectedOption.value);
            if (selectedAnswer === question.answer) {
                correctAnswers++;
            }
        }
    });

    const incorrectAnswers = questions.length - correctAnswers;
    resultDiv.innerHTML = `You got <span class='correct-text'>${correctAnswers} correct</span> and <span class='incorrect-text'>${incorrectAnswers} incorrect</span>`;
}

buildQuiz();
submitButton.addEventListener('click', showResults);