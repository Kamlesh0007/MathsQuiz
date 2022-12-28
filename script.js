const questionEl = document.getElementById("question");
const questionFormEl = document.getElementById("questionForm");
const scoreEl = document.getElementById("score");
const input = document.getElementById("answerInput");
let storedAnswer;
let score = localStorage.getItem("score");
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);// include minimum number as well as maximum number
};

const generateQuestion = () => {
    const randomNumber1 = randomNumber(1, 20);
    const randomNumber2 = randomNumber(1, 20);
    const questionType = randomNumber(1, 4);

let question,answer;
if (randomNumber1 > randomNumber2 && questionType > 2) {
    firstNumber = randomNumber1;
    secondNumber = randomNumber2;
  } else {
    firstNumber = randomNumber2;
    secondNumber = randomNumber1;
  }
    switch(questionType){
        case 1:
            question = `Q. What is ${firstNumber} multiply by ${secondNumber} ?`;
            answer = firstNumber * secondNumber;
            break;
          case 2:
            question = `Q. What is ${firstNumber} Add to ${secondNumber} ?`;
            answer = firstNumber + secondNumber;
            break;
          case 3:
            question = `Q. What is ${firstNumber} Divided By ${secondNumber} ?`;
            answer = firstNumber / secondNumber;
            break;
          case 4:
            question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
            answer = firstNumber - secondNumber;
            break;
          default:
            question = `Q. What is ${firstNumber} Subtract from ${secondNumber} ?`;
            answer = firstNumber - secondNumber;
            break;
        }
    
    return {question,answer}  // return object 

}
const showQuestion =()=>
{
    const {question
    ,answer}=generateQuestion();
    questionEl.innerText=question;
    scoreEl.innerText=score
    storedAnswer=answer;
}
showQuestion();

const checkAnswer=(event)=>{
    event.preventDefault();
const userAnswer=parseInt(input.value);
if(userAnswer===storedAnswer){
    score++;
    Toastify({
        text: `Your are ✔ and your score is ${score} `,
        gravity: "bottom",
        position: "center",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
}
else{
    score--;
    Toastify({
        text: `Your are ✘ and your score is ${score} `,
        gravity: "bottom",
        position: "center",
        style: {
          
          background: "linear-gradient(to right, #e33217, #ff001e)",
        },
      }).showToast();
}
scoreEl.innerText=score;
localStorage.setItem("score",score)
event.target.reset();
showQuestion();
}

