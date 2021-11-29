const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .10)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Inside which HTML element do we put the JavaScript?',
    answers: [
      { text: '<javascript>', correct: false },
      { text: '<scripting>', correct: false },
      { text: '<js>', correct: false },
      { text: '<script>', correct: true },
    ]
  },
  {
    question: `If you type the following code in the console window, what result will you get?
    3 > 2 > 1 === false;`,
    answers: [
      { text: 'true', correct: true },
      { text: 'false', correct: false },
    ]
  },
  {
    question: 'JavaScript is a ___ -side programming language.',
    answers: [
      { text: ' Client', correct: false },
      { text: 'Server', correct: false },
      { text: 'Both', correct: true },
      { text: 'None', correct: false }
    ]
  },
  {
    question: `What is the output of the following code in the console?
    var x = 0;
    function fun(){
    ++x;
    this.x = x;
    return x;
    }
    var bar = new new fun;
    console.log(bar.x);`,
    answers: [
      { text: 'ReferenceError', correct: false },
      { text: 'Undefined', correct: false },
      { text: '1', correct: false},
      { text: 'TypeError', correct: true },
    ]
  },
  {
    question: 'Which of the following will write the message “Hello DataFlair!” in an alert box?',
    answers: [
      { text: 'alertBox(“Hello DataFlair!”);', correct: false },
      { text: 'alert(Hello DataFlair!);', correct: false },
      { text: 'msgAlert(“Hello DataFlair!”);', correct: false},
      { text: 'alert(“Hello DataFlair!”);', correct: true },
    ]
  } , 
  {
    question: 'How do you find the minimum of x and y using JavaScript?',
    answers: [
      { text: 'min(x,y);', correct: false },
      { text: 'Math.min(x,y)', correct: true },
      { text: 'Math.min(xy)', correct: false},
      { text: 'min(xy);', correct: false },
    ]
  }, 
   {
    question: `If the value of x is 40, then what is the output of the following program?
    (x % 10 == 0)? console.log(“Divisible by 10”) : console.log(“Not divisible by 10”);`,
    answers: [
      { text: ' ReferenceError', correct: false },
      { text: 'Divisible by 10', correct: true },
      { text: 'Not Divisible by 10', correct: false},
      { text: 'None of the above', correct: false },
    ]
  },  
  {
    question: 'Which JavaScript label catches all the values, except for the ones specified?',
    answers: [
      { text: ' catch', correct: false },
      { text: 'label', correct: false },
      { text: 'try', correct: false},
      { text: 'default', correct: true },
    ]
  },  
  {
    question: 'Which are the correct “if” statements to execute certain code if “x” is equal to 2?',
    answers: [
      { text: ' if(x 2)', correct: false },
      { text: ' if(x = 2)', correct: false },
      { text: ' if(x == 2)', correct: true},
      { text: ' if(x != 2 )', correct: false },
    ]
  },  
  {
    question: `What will the code return?
    Boolean(3 < 7)`,
    answers: [
      { text: ' true', correct: true },
      { text: ' false', correct: false },
      { text: ' NaN', correct: false},
      { text: ' SyntaxError', correct: false },
    ]
  }
]