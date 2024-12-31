import { questions } from './questions.js';
const subjectSelect = document.getElementById('subject-select');

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
let userAnswers = [];
let showExplanations = false;
let alwaysShowExplanations = false;

let currentQuestions = questions; // set initial questions

showExplanationsCheckbox.addEventListener('change', (event) => {
    showExplanations = event.target.checked;
    updateExplanationsVisibility();
});

alwaysShowExplanationsCheckbox.addEventListener('change', (event) => {
    alwaysShowExplanations = event.target.checked;
    updateExplanationsVisibility();
});


subjectSelect.addEventListener('change', async (event) => {
    const selectedSubject = event.target.value;
    console.log("selected subject: ", selectedSubject)
     await loadQuestions(selectedSubject);
    resetQuiz();
    buildQuiz();
});
filterCorrectButton.addEventListener('click', () => filterQuestions('correct'));
filterIncorrectButton.addEventListener('click', () => filterQuestions('incorrect'));
filterEmptyButton.addEventListener('click', () => filterQuestions('empty'));
filterAllButton.addEventListener('click', () => filterQuestions('all'));
checkCorrectsButton.addEventListener('click', () => checkAllCorrectAnswers(false));
 checkCorrectsSimplyButton.addEventListener('click', () => checkAllCorrectAnswers(true));

async function loadQuestions(subject) {
    try {
         const currentDir = import.meta.url.substring(0, import.meta.url.lastIndexOf('/'))
          const module = await import(`${currentDir}/${subject}.js`);
        currentQuestions = module.questions;
        userAnswers = new Array(currentQuestions.length).fill(null);
       updateScoreDisplay()
    } catch (error) {
         console.error('Failed to load questions:', error);
          // Use the alert function to check the full error
          alert(`Error loading questions for subject ${subject}: ${error.message}`);
        currentQuestions = [];
    }
}


function buildQuiz() {
      const scoreDisplay = document.getElementById('score-display');
        const correctCountSpan = document.getElementById('correct-count');
        const incorrectCountSpan = document.getElementById('incorrect-count');
         const emptyCountSpan = document.getElementById('empty-count');
         const allCountSpan = document.getElementById('all-count');
     quizContainer.innerHTML = ''; // Clear previous questions
     currentQuestions.forEach((question, index) => {
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

             const label = document.createElement('label');
             label.htmlFor = `question-${index}-option-${optionIndex}`;
             label.textContent = option;

             const optionDiv = document.createElement('div');
             optionDiv.appendChild(input);
             optionDiv.appendChild(label);
             optionsDiv.appendChild(optionDiv);

         });
         optionsDiv.addEventListener('click', (event) => {
             const target = event.target.closest('div');
             if (target) {
                 const input = target.querySelector('input[type="radio"]');
                 if(input){
                     input.checked = true;
                    checkAnswer(index, parseInt(input.value));
                 }
            }
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

    if (parseInt(selectedOption) === currentQuestions[questionIndex].answer) {
        if (previousAnswer !== currentQuestions[questionIndex].answer) {
            correctAnswers++;
        }

        questionDiv.classList.add('correct');
        questionDiv.classList.remove('incorrect');
        if (!alwaysShowExplanations) {
            explanationDiv.style.display = 'none';
        }
        explanationDiv.innerHTML = "";
    } else {
        if (previousAnswer === currentQuestions[questionIndex].answer) {
            correctAnswers--;
        }
        questionDiv.classList.add('incorrect');
        questionDiv.classList.remove('correct');
        explanationDiv.style.display = alwaysShowExplanations ? 'block' : (showExplanations ? 'block' : 'none');
        setExplanationText(explanationDiv, currentQuestions[questionIndex]);
    }
    updateExplanationsVisibility();
    updateScoreDisplay();
}

function setExplanationText(explanationDiv, question) {
    const explanationText = question.explanation || "No explanation provided";
        let formattedExplanation = explanationText.replace(/`{3}java\n([\s\S]*?)`{3}/gs, (match, code) => {
             return `<pre><code>${code.trim()}</code></pre>`;
        });
     explanationDiv.innerHTML = `<p>Explanation: ${formattedExplanation}</p>`;
}

function updateExplanationsVisibility() {
    const allExplanations = document.querySelectorAll('.explanation');
    allExplanations.forEach((explanation, index) => {
        const questionDiv = document.querySelector(`#quiz-container > div:nth-child(${index + 1})`);
        if (alwaysShowExplanations) {
            explanation.style.display = 'block';
            setExplanationText(explanation, currentQuestions[index]);
        } else if (showExplanations && questionDiv.classList.contains('incorrect')) {
            explanation.style.display = 'block';
        } else {
            explanation.style.display = 'none';
        }
    });
}
 function resetQuiz() {
    questionsAnswered = 0;
      correctAnswers = 0;
      quizContainer.innerHTML = ''; // Clear previous questions
      userAnswers = new Array(currentQuestions.length).fill(null);
    const scoreDisplay = document.getElementById('score-display');
       if(scoreDisplay){
        scoreDisplay.innerHTML = ``;
         }

     updateScoreDisplay();
 }


function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score-display');
     const correctCountSpan = document.getElementById('correct-count');
        const incorrectCountSpan = document.getElementById('incorrect-count');
         const emptyCountSpan = document.getElementById('empty-count');
         const allCountSpan = document.getElementById('all-count');

    const incorrectAnswers = questionsAnswered - correctAnswers;
    const emptyAnswers = currentQuestions.length - questionsAnswered;
    if (correctCountSpan) {
          correctCountSpan.textContent = correctAnswers;
        }
        if (incorrectCountSpan) {
          incorrectCountSpan.textContent = incorrectAnswers;
        }
       if (emptyCountSpan) {
        emptyCountSpan.textContent = emptyAnswers;
      }
        if (allCountSpan) {
          allCountSpan.textContent = currentQuestions.length;
        }
         if(scoreDisplay){
            scoreDisplay.innerHTML = ``;
         }

}


 function filterQuestions(filterType) {
     const allQuestionDivs = document.querySelectorAll('#quiz-container > div');

     allQuestionDivs.forEach((questionDiv, index) => {
         const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);

         if (filterType === 'all') {
             questionDiv.style.display = 'block';
         } else if (filterType === 'correct') {
             if (selectedOption && parseInt(selectedOption.value) === currentQuestions[index].answer) {
                 questionDiv.style.display = 'block';
             } else {
                 questionDiv.style.display = 'none';
             }
         } else if (filterType === 'incorrect') {
             if (selectedOption && parseInt(selectedOption.value) !== currentQuestions[index].answer) {
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
          const correctInput = optionsDiv.querySelector(`input[name="question-${index}"][value="${currentQuestions[index].answer}"]`);

          if(correctInput){
            correctInput.click();

          }

         if (simply) {
             optionsDiv.querySelectorAll(`input:not([value="${currentQuestions[index].answer}"])`).forEach(input => input.closest('div').style.display = 'none');
        } else {
             optionsDiv.querySelectorAll('input').forEach(input => input.closest('div').style.display = 'block');
       }
     });
}

function showResults() {
    let correctAnswers = 0;
    currentQuestions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);

        if (selectedOption) {
            const selectedAnswer = parseInt(selectedOption.value);
            if (selectedAnswer === question.answer) {
                correctAnswers++;
            }
        }
    });

    const incorrectAnswers = currentQuestions.length - correctAnswers;
    resultDiv.innerHTML = `You got <span class='correct-text'>${correctAnswers} correct</span> and <span class='incorrect-text'>${incorrectAnswers} incorrect</span>`;
}

 buildQuiz(); // Build the initial quiz
submitButton.addEventListener('click', showResults);