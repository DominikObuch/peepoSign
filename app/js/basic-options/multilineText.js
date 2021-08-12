function checkMultilineText() {
    if (document.getElementById("multiline").checked) {
        options.multilineText = "normal";
    } else {
        options.multilineText = "nowrap";
    }
}
function updateMultilineText() {
    textOnSignEl.style.whiteSpace = options.multilineText;
}
document
    .getElementById("multiline")
    .addEventListener("input", function () {
        checkMultilineText();
        updateMultilineText();
    });