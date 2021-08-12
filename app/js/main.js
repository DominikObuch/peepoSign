let options = {
    //basic options variables
    signText: '',
    selectedPanel: {
        old: 0,
        current: 0
    },
    multilineText: true,
    width: '',
    height: '',
    //first panel of adv options variables
    fontSize: '',
    breakWords: false,
    verticalAlign: 'center',
    horizontalAlign: 'center',
    offset: '',
    fontBlur: '1',
    fontFamily: '',
    backgroundColor: null
}
const elements = {
    textOnSignEl: document.getElementById('text-on-sign'),
    frogImageEl: document.getElementById("frogImage"),
    inputSignTextEl: document.getElementById('signText'),
    fontSizeInputEl: document.getElementById('fontSize'),
    offsetOptionsEls: document.getElementsByClassName('offsetOptions'),
    choosePanelEl: document.getElementsByClassName('options__btn--settings'),
    advFormEl: document.getElementsByClassName('advanced-options'),
    fontBlurEl: document.getElementById('fontBlur'),
    horizontalAlignEls: document.querySelectorAll('#horizontalAlign span'),
    verticalAlignEls: document.querySelectorAll('#verticalAlign span'),
    setToDefaultEl: document.getElementById('setToDefault'),
    resolutionWidthEl: document.getElementById("resolutionWidth"),
    resolutionHeightEl: document.getElementById("resolutionHeight")
}
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
function updateCategory() {
    elements
        .choosePanelEl[options.selectedPanel.old]
        .classList
        .remove("options__btn--settings-active");

    elements
        .choosePanelEl[options.selectedPanel.current]
        .classList
        .add("options__btn--settings-active");

    elements.advFormEl[options.selectedPanel.old]
        .classList
        .add("display-none");
    elements.advFormEl[options.selectedPanel.current]
        .classList
        .remove("display-none");
}
function checkCategory(i) {
    options.selectedPanel.old = options.selectedPanel.current;
    options.selectedPanel.current = i;

}
for (let i = 0; i < 3; i++) {
    elements
        .choosePanelEl[i]
        .addEventListener("click", function () {
            checkCategory(i);
            updateCategory();
        });
}
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
for (let i = 0; i <= 2; i++) {
    elements
        .horizontalAlignEls[i]
        .addEventListener("click", function (el) {
            checkHorizontalAlign(el);
            updateHorizontalAlign();
        })
}

function updateHorizontalAlign() {
    let currentActive = null;
    for (let i = 0; i <= 2; i++) {
        elements
            .horizontalAlignEls[i]
            .classList
            .contains("options__select--active")
            ? elements
                .horizontalAlignEls[i]
                .classList
                .remove("options__select--active")
            : null;
        if (elements.horizontalAlignEls[i].dataset.horizontalalign === options.horizontalAlign) {
            currentActive = i
        }

    }
    elements
        .horizontalAlignEls[currentActive]
        .classList
        .add("options__select--active");
        elements.textOnSignEl.style.textAlign = options.horizontalAlign

}

function checkHorizontalAlign(el) {
    options.horizontalAlign = el.target.dataset.horizontalalign;
}
function handleOffsets() {
    let offsets = ""
    for (let i = 0; i < 4; i++) {
        offsets += offsetOptionsEls[i].value === ""
            ? "0 "
            : offsetOptionsEls[i].value + "px "
    }
    textOnSignEl.style.padding = offsets
}
for (let i = 0; i < 4; i++) {
    elements.offsetOptionsEls[i].addEventListener("input", handleOffsets);
}
function checkOffsets(){
    let offsets = "";
    for (let i = 0; i < 4; i++) {
        offsets += elements.offsetOptionsEls[i].value === ""
            ? "0 "
            : offsetOptionsEls[i].value + "px "
    }
    options.offset = offsets;
}
function updateOffsets(){
    textOnSignEl.style.padding = options.offset
}
function setToDefaultOptions(){
    options.multilineText = true;
    options.fontSize = '';
    options.breakWords = true;
    options.verticalAlign = 'center';
    options.horizontalAlign= 'center';
    options.offset = '';
    options.fontBlur = '';
    options.fontBlur = '';
    options.width = '';
    options.height = '';
    options.backgroundColor = null;
}
elements.setToDefaultEl.addEventListener('click',function(){
    setToDefaultOptions();
})
let handleVerticalAlign = () => {
    let verticalAlignEl = document.querySelectorAll("#verticalAlign span");
    let verticalAlignActive = 1; // which one is currently active
    for (let i = 0, il = verticalAlignEl.length; i < il; i++) {
        verticalAlignEl[i]
            .addEventListener("click", function () {
                if (!this.classList.contains("options__select--active")) {
                    this
                        .classList
                        .add("options__select--active");
                    textOnSignEl.style.alignItems = this.dataset.verticalalign;
                    verticalAlignEl[verticalAlignActive]
                        .classList
                        .remove("options__select--active");
                    verticalAlignActive = i
                }

            })
    }
}
handleVerticalAlign();



for (let i = 0; i <= 2; i++) {
    elements
        .verticalAlignEls[i]
        .addEventListener("click", function (el) {
            checkVerticalAlign(el);
            updateVerticalAlign();
        })
}

function updateVerticalAlign() {
    let currentActive = null;
    for (let i = 0; i <= 2; i++) {
        elements
            .verticalAlignEls[i]
            .classList
            .contains("options__select--active")
            ? elements
                .verticalAlignEls[i]
                .classList
                .remove("options__select--active")
            : null;
        if (elements.verticalAlignEls[i].dataset.verticalalign === options.verticalAlign) {
            currentActive = i
        }

    }
    elements
        .verticalAlignEls[currentActive]
        .classList
        .add("options__select--active");
        elements.textOnSignEl.style.alignItems = options.verticalAlign

}

function checkVerticalAlign(el) {
    options.verticalAlign = el.target.dataset.verticalalign;
}
function capture() {
    const captureEl = document.querySelector('#capture')
    html2canvas(captureEl, {
        scrollY: -window.scrollY,
        backgroundColor: options.backgroundColor
    }).then(canvas => {
        document
            .body
            .appendChild(canvas)
        canvas.style.display = 'none'
        return canvas;
    }).then(canvas => {
        const image = canvas
            .toDataURL('image/png')
            .replace('image/png', 'image/octet-stream')
        const a = document.createElement('a')
        a.setAttribute('download', 'peepoSign.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
    })
}

const btn = document.querySelector('#download')
btn.addEventListener('click', capture)
elements.inputSignTextEl.addEventListener("input", function (el) {
    options.signText = el.target.value;
    elements.textOnSignEl.textContent = options.signText;
    addBrIfEmpty(elements.textOnSignEl,elements.textOnSignEl.textContent);
});
elements.textOnSignEl.addEventListener("input", function () {
    options.signText = elements.textOnSignEl.textContent;
    document.getElementById("signText").value = options.signText;
    addBrIfEmpty(elements.textOnSignEl,elements.textOnSignEl.textContent);
})
function addBrIfEmpty(el,text){
    if(text === ""){
        el.appendChild(document.createElement("br"))
    }
}


let shouldAdjustFontSize = true;
fontSizeInputEl.addEventListener("input", function () {
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
    fontSizeInputEl.placeholder = Math.round(window.getComputedStyle(textOnSignEl).fontSize.replace("px", ""));
    if (shouldAdjustFontSize) {
        adjustFontSizePeepo();
        updateFontSize();
    }
})
observeSignChanges.observe(textOnSignEl, {
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

let proportion = 508 / 469;
function setMaxImageWidth() {
    if (options.width > document.getElementById("frogSection").offsetWidth) {
        options.width = document.getElementById("frogSection").offsetWidth
    }
}
function setMaxImageHeight() {
    if (options.height > Math.round(proportion * + document.getElementById("frogSection").offsetWidth)) {
        options.height = Math.round(proportion * + document.getElementById("frogSection").offsetWidth);
    }
}
function removeMinusAxis() {
    if (options.width.toString().includes("-")) {
        options.width = options
            .width
            .replace("-", "")
    }
    if (options.height.toString().includes("-")) {
        options.height = options
            .height
            .replace("-", "")
    }
}

function handleEmptyAxis() {
    if (options.height === "") {
        elements.frogImageEl.style.height = "auto";
        elements.resolutionHeightEl.placeholder = options.width !== ""
            ? `${Math.round(options.width * proportion)}px`
            : "height"
    }
    if (options.width === "") {
        elements.frogImageEl.style.width = "auto";
        elements.resolutionWidthEl.placeholder = options.height !== ""
            ? `${Math.round(options.height / proportion)}px`
            : "width";
    }
}

function checkWidth() {
    options.width = elements.resolutionWidthEl.value;
}
function checkHeight() {
    options.height = elements.resolutionHeightEl.value;
}
function updateWidth() {
    elements.frogImageEl.style.width = options.width + "px";
    elements.resolutionWidthEl.value = options.width;

    elements.frogImageEl.style.height = options.height + "px";
    elements.resolutionHeightEl.value = options.height;
}
elements.resolutionHeightEl
    .addEventListener("input", function () {
        checkHeight();
        removeMinusAxis();
        setMaxImageHeight();
        handleEmptyAxis();
        updateWidth();
    })
elements.resolutionWidthEl.addEventListener("input", function () {
    checkWidth();
    removeMinusAxis();
    setMaxImageWidth();
    handleEmptyAxis();
    updateWidth();
})
//# sourceMappingURL=sourcemaps/main.js.map
