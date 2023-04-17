let button = document.querySelector(".js-button");
let poem = document.querySelector(".js-poem");
let showOrHide = document.querySelector(".js-showOrHide");

button.addEventListener("click", () => {
    poem.classList.toggle("poem--hidden");

    showOrHide.innerText = poem.classList.contains("poem--hidden") ? "Pokaż" : "Ukryj";
});