{
    const showOrHidePoem = () => {
        const poem = document.querySelector(".js-poem");

        poem.classList.toggle("poem--hidden")
    }

    const updateButtonText = () => {
        const showOrHide = document.querySelector(".js-showOrHide");
        const poem = document.querySelector(".js-poem");

        showOrHide.innerText = poem.classList.contains("poem--hidden") ? "Pokaż" : "Ukryj";
    };

    const init = () => {
        const button = document.querySelector(".js-button");

        button.addEventListener("click", showOrHidePoem);
        button.addEventListener("click", updateButtonText);
    };

    init();
}