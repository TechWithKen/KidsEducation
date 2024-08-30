document.addEventListener('DOMContentLoaded', function() {
    const questions = [
        { question: "What is the square root of 49?", answer: "7" },
        { question: "What is the probability that tomorrow is Monday?", answer: "1/7" },
        { question: "Who is the founder of CIH?", answer: "John Doe" },
        { question: "What is 2 + 2?", answer: "4" },
        { question: "What is the capital of France?", answer: "Paris" },
        {question: "What is the capital of Nigeria?", answer: "Abuja"},
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const nameSection = document.getElementById('nameSection');
    const quizSection = document.getElementById('quizSection');
    const scoreSection = document.getElementById('scoreSection');

    const playerNameDisplay = document.getElementById('playerName');
    const questionTitle = document.getElementById('questionTitle');
    const questionText = document.getElementById('questionText');
    const resultDisplay = document.getElementById('result');
    const finalScoreDisplay = document.getElementById('finalScore');

    const nameForm = document.getElementById('nameForm');
    const quizForm = document.getElementById('quizForm');
    const answeredList = document.getElementById('answeredList');

    nameForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const playerName = document.getElementById('name').value;
        playerNameDisplay.textContent = `Player: ${playerName}`;
        nameSection.style.display = 'none';
        quizSection.style.display = 'block';
        loadQuestion();
    });

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userAnswer = document.getElementById('answerInput').value.trim();
        const correctAnswer = questions[currentQuestionIndex].answer;

        const answeredQuestion = document.createElement('li');
        answeredQuestion.innerHTML = `
            <strong>${questions[currentQuestionIndex].question}</strong><br>
            Your answer: <span style="color: ${userAnswer.toLowerCase() === correctAnswer.toLowerCase() ? 'green' : 'red'};">
            ${userAnswer}</span><br>
            Correct answer: ${correctAnswer}
        `;
        answeredList.appendChild(answeredQuestion);

        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            score++;
            resultDisplay.textContent = 'Correct!';
        } else {
            resultDisplay.textContent = `Incorrect! The correct answer was ${correctAnswer}.`;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            showScore();
        }
    });

    function loadQuestion() {
        document.getElementById('answerInput').value = '';
        questionTitle.textContent = `Question ${currentQuestionIndex + 1}`;
        questionText.textContent = questions[currentQuestionIndex].question;
        resultDisplay.textContent = '';
    }

    function showScore() {
        quizSection.style.display = 'none';
        scoreSection.style.display = 'block';
        finalScoreDisplay.textContent = `${playerNameDisplay.textContent} You scored ${score} out of ${questions.length}!`;
    }
});
