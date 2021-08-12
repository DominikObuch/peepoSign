elements
    .fontBlurEl
    .addEventListener("input", function () {
        checkFontBlur();
        updateFontBlur();
        updateInputBlur();
    })

function updateFontBlur() {
    elements.textOnSignEl.style.filter = `blur(${options.fontBlur}px)`;
}
function checkFontBlur() {
    options.fontBlur = elements.fontBlurEl.value
    if (options.fontBlur < 0) {
        options.fontBlur = 0
    } else if (options.fontBlur > 99) {
        options.fontBlur = 99
    } else if (options.fontBlur == "") {
        options.fontBlur = 0
    }
}
function updateInputBlur() {
    elements.fontBlurEl.value = parseFloat(options.fontBlur)
}