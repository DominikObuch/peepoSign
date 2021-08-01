let shouldAdjustFontSize = true;
fontSizeInputEl.addEventListener("input", function () {
    if (this.value === "") {
        adjustFontSizePeepo(document.getElementById("text-on-sign"), inputSignTextEl.value);
        shouldAdjustFontSize = true;
    } else {
        shouldAdjustFontSize = false;
        document
            .getElementById("text-on-sign")
            .style
            .fontSize = this.value + "px"
    }
})
const observeSignChanges = new MutationObserver(function(){
    fontSizeInputEl.placeholder = Math.round(window.getComputedStyle(textOnSignEl).fontSize.replace("px",""));
    shouldAdjustFontSize ? adjustFontSizePeepo(textOnSignEl,textOnSignEl.textContent):null;
})
observeSignChanges.observe(textOnSignEl,{childList:true,attributes:true, characterData: true,subtree:true})
adjustFontSizePeepo(textOnSignEl, "")

function adjustFontSizePeepo(el, text) {

    let isDesktop = window.screen.width >= 1024
        ? true
        : false;
    if (isDesktop) {
        if (text.length <= 6) {
            el.style.fontSize = "7vw";
        } else if (text.length <= 19) {
            el.style.fontSize = "6vw";
        } else if (text.length >= 20) {
            el.style.fontSize = "3.5vw";
        }
    } else {
        if (text.length <= 7) {
            el.style.fontSize = "10vw";
        } else if (text.length <= 15) {
            el.style.fontSize = "6vw";
        } else if (text.length >= 16) {
            el.style.fontSize = "4vw";
        }
    }
}
