const formElement = document.querySelector('[data-js="form"]');


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    event.target.reset();
   alert("Thanks for your question");
    });

    const quizQuestionBlock = document.createElement('div');
    const quizQuestion = document.createElement('p');
    const quizQuestionAnswerButton= document.createElement('button');
    const quizQuestionTag = document.createElement('li');
    const quizQuestionFavouriteButton = document.createElement('svg');