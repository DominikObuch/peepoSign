function checkBreakWords(el) {
    options.breakWords = el.target.checked
        ? true
        : false;
}
function updateBreakWords() {
    elements.textOnSignEl.style.wordBreak = options.breakWords
        ? "break-all"
        : "unset";

}
document
    .getElementById("breakWords")
    .addEventListener("change", function (el) {
        checkBreakWords(el);
        updateBreakWords();
    });