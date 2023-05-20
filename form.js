const formElement = document.querySelector('[data-js="form"]');


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const questionTextInput= data.yourQuestionTextarea;
    const answerTextInput = data.yourAnswerTextarea;
    const tag = data.tag;

    event.target.reset();


   const quizQuestionBlock = document.createElement('div');
   const quizQuestion = document.createElement('p');
   const quizQuestionAnswer = document.createElement('p');
   const quizQuestionAnswerButton= document.createElement('button');
   const quizQuestionTagUl = document.createElement('ul');
   const quizQuestionTag = document.createElement('li');
   const quizQuestionFavouriteButton = document.createElement('button');
 

quizQuestionBlock.classList.add('music-card');
quizQuestionAnswer.classList.add('hidden__answer');
quizQuestionAnswerButton.classList.add('quiz-card__answerbutton');
quizQuestionTagUl.classList.add('quiz-card__tag');
quizQuestionTag.classList.add('quiz-card__musik-tag');
quizQuestionFavouriteButton.classList.add('quiz-card__favourite-button');



   quizQuestion.textContent = questionTextInput;
   quizQuestionAnswer.textContent = answerTextInput;
   quizQuestionAnswerButton.textContent = "Show Answer";
   quizQuestionTag.textContent = tag;


quizQuestionFavouriteButton.innerHTML=` <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
height="3em"
width="3em"
data-js="svg"
class="quiz-card__not-bookmarked"
>
<path
  d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09
3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
/>
</svg>`;


   document.body.append(quizQuestionBlock);
   quizQuestionBlock.append(quizQuestion);
   quizQuestionBlock.append(quizQuestionAnswer);
   quizQuestionBlock.append(quizQuestionAnswerButton);
   quizQuestionBlock.append(quizQuestionTagUl);
   quizQuestionTagUl.append(quizQuestionTag);
   quizQuestionBlock.append(quizQuestionFavouriteButton);
 
    });

   
