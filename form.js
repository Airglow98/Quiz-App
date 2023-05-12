const formElement = document.querySelector('[data-js="form"]');


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const questionTextInput= data.yourQuestionTextarea;
    const answerTextInput = data.yourAnswerTextarea;
    const tag= data.tag;

    event.target.reset();


   const quizQuestionBlock = document.createElement('div');
   const quizQuestion = document.createElement('p');
   const quizQuestionAnswer = document.createElement('p');
   const quizQuestionAnswerButton= document.createElement('button');
   const quizQuestionTagUl = document.createElement('ul');
   const quizQuestionTag = document.createElement('li');
 

quizQuestionBlock.classList.add('music-card');
quizQuestionAnswer.classList.add('hidden__answer');
quizQuestionAnswerButton.classList.add('quiz-card__answerbutton');
quizQuestionTagUl.classList.add('quiz-card__tag');
quizQuestionTag.classList.add('quiz-card__musik-tag');



   quizQuestion.textContent = questionTextInput;
   quizQuestionAnswer.textContent = answerTextInput;
   quizQuestionAnswerButton.textContent = "Show Answer";
   quizQuestionTag.textContent = tag;





   document.body.append(quizQuestionBlock);
   quizQuestionBlock.append(quizQuestion);
   quizQuestionBlock.append(quizQuestionAnswer);
   quizQuestionBlock.append(quizQuestionAnswerButton);
   quizQuestionBlock.append(quizQuestionTagUl);
   quizQuestionTagUl.append(quizQuestionTag);
 
    });

   
