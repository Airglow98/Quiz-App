const favouriteButton = document.querySelector('[data-js="favouritebutton"]');
const svg = document.querySelector('[data-js="svg"]');
const answerButton = document.querySelector('[data-js="answerButton"]');
const hiddenAnswer = document.querySelector('[data-js="hiddenAnswer"]');
/* const formSubmitButton = document.querySelector('[data-js="form-submitbutton"]') */

favouriteButton.addEventListener ("click", () => {
    svg.classList.toggle("quiz-card__bookmarked");
});


  
    answerButton.addEventListener("click", () => {
      if (answerButton.innerText === "Show Answer") {
        answerButton.textContent = "Hide Answer";
      } else {
        answerButton.textContent = "Show Answer";
      }
      hiddenAnswer.classList.toggle("not-hidden__answer");
    
    });














/*
const darkModeButton = document.querySelector('[data-js="darkModeButton"]');
const htmlGoesDark = document.querySelector('[data-js="htmlGoesDark"]');

console.log(darkModeButton)

/darkModeButton.addEventListener ("click", () => {
    htmlGoesDark.classList.toggle("darkmode");
});
 */