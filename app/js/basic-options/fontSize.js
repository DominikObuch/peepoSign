let shouldAdjustFontSize = true;
elements
    .fontSizeInputEl
    .addEventListener("input", function () {
        if (this.value === "") {
            adjustFontSizePeepo();
            updateFontSize();
            shouldAdjustFontSize = true;
        } else {
            shouldAdjustFontSize = false;
            options.fontSize = this.value + "px";
            updateFontSize();
        }
    })
const observeSignChanges = new MutationObserver(function () {
    elements.fontSizeInputEl.placeholder = Math.round(window.getComputedStyle(elements.textOnSignEl).fontSize.replace("px", ""));
    if (shouldAdjustFontSize) {
        adjustFontSizePeepo();
        updateFontSize();
    }
})
observeSignChanges.observe(elements.textOnSignEl, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
})

function adjustFontSizePeepo() {

    let isDesktop = window.matchMedia('(min-width: 1024px)')
    if (isDesktop) {
        if (options.signText.length <= 6) {
            options.fontSize = "7vw";
        } else if (options.signText.length <= 19) {
            options.fontSize = "6vw";
        } else if (options.signText.length >= 20) {
            options.fontSize = "3.5vw";
        }
    } else {
        if (options.signText.length <= 7) {
            options.fontSize.fontSize = "10vw";
        } else if (options.signText.length <= 15) {
            options.fontSize = "6vw";
        } else if (options.signText.length >= 16) {
            options.fontSize = "4vw";
        }
    }
}
function updateFontSize() {
    elements.textOnSignEl.style.fontSize = options.fontSize;
}

adjustFontSizePeepo();
updateFontSize();