const favouriteButton = document.querySelector('[data-js="favouritebutton"]');
const test = document.querySelector('[data-js="svg"]');

favouriteButton.addEventListener ("click", () => {
    test.classList.toggle("quiz-card__bookmarked");
});
