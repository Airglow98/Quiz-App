
const quizCards = document.querySelectorAll('[data-js="quizCard"]');

export default function Quizcards (){
    quizCards.forEach(quizCard => {
      const answerButton = quizCard.querySelector('[data-js="answerButton"]');
      const hiddenAnswer = quizCard.querySelector('[data-js="hiddenAnswer"]');
      const favouriteButton = quizCard.querySelector('[data-js="favouritebutton"]');
      const svg = quizCard.querySelector('[data-js="svg"]');
  
      answerButton.addEventListener("click", () => {
        if (answerButton.innerText === "Show Answer") {
          answerButton.textContent = "Hide Answer";
        } else {
          answerButton.textContent = "Show Answer";
        }
        hiddenAnswer.classList.toggle("not-hidden__answer");
      });
  
      favouriteButton.addEventListener ("click", () => {
        svg.classList.toggle("quiz-card__bookmarked");
     
    });  
      });
    };
  