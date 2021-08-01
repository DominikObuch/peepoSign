"use strict";

const textOnSignEl = document.getElementById("text-on-sign");
const inputSignTextEl = document.getElementById("sign-text");
const fontSizeInputEl = document.getElementById("fontSize");
const offsetOptionsEls = document.getElementsByClassName("offsetOptions");
const breakWordsEl = document.getElementById("breakWords");
breakWordsEl.addEventListener("change",function(){
    if(this.checked){
        textOnSignEl.style.wordBreak = "break-all";
    }else{
        textOnSignEl.style.wordBreak = "unset";
    }
})
const choosePanelEl = document.getElementsByClassName("options__btn--settings");
let selectedPanel = 0;
const advFormEl = document.getElementsByClassName("advanced-options");

for (let i = 0; i < 3; i++) {
    choosePanelEl[i].addEventListener("click", () => {
        if (i !== selectedPanel) {
            choosePanelEl[selectedPanel]
                .classList
                .remove("options__btn--settings-active");
            choosePanelEl[i]
                .classList
                .add("options__btn--settings-active");

            advFormEl[selectedPanel]
                .classList
                .add("display-none");
            advFormEl[i]
                .classList
                .remove("display-none");

            selectedPanel = i;
        }
    });
}
const fontBlurEl = document.getElementById("fontBlur");
fontBlurEl.addEventListener("input",function(){
    textOnSignEl.style.filter = `blur(${fontBlurEl.value}px)`;
})
let handlehorizontalAlign = () => {
    let horizontalAlignEl = document.querySelectorAll("#horizontalAlign span");
    let horizontalAlignActive = 1; // which one is currently active
    for (let i = 0, il = horizontalAlignEl.length; i < il; i++) {
        horizontalAlignEl[i]
            .addEventListener("click", function () {
                if (!this.classList.contains("options__select--active")) {
                    this
                        .classList
                        .add("options__select--active");
                    textOnSignEl.style.textAlign = this.dataset.horizontalalign;
                    horizontalAlignEl[horizontalAlignActive]
                        .classList
                        .remove("options__select--active");
                    horizontalAlignActive = i
                }

            })
    }
}
handlehorizontalAlign();
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
    offsetOptionsEls[i].addEventListener("input", handleOffsets);
}
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
                    console.dir(this)
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
function capture() {
    const captureEl = document.querySelector('#capture')
    html2canvas(captureEl, {
        scrollY: -window.scrollY,
        backgroundColor: null
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
        a.setAttribute('download', 'my-image.png')
        a.setAttribute('href', image)
        a.click()
        canvas.remove()
    })
}

const btn = document.querySelector('#download')
btn.addEventListener('click', capture)
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

document.getElementById("multiline").addEventListener("input", () => {
    if(document.getElementById("multiline").checked){
        textOnSignEl.style.whiteSpace = "normal";
    }
    else{
        textOnSignEl.style.whiteSpace = "nowrap";
    }
})
let resolutionWidthEl = document.getElementById("resolutionWidth")
let resolutionHeightEl = document.getElementById("resolutionHeight")
let proportion = 508/469;
function setMaxImageWidth(){
    if(resolutionWidthEl.value > document.getElementById("frogSection").offsetWidth){
        resolutionWidthEl.value = document.getElementById("frogSection").offsetWidth;
    }
}
function removeMinusNumbers(){
    if(resolutionWidthEl.value.includes("-")){
        resolutionWidthEl.value = resolutionWidthEl.value.replace("-","");
    }
    if(resolutionHeightEl.value.includes("-")){
        resolutionHeightEl.value = resolutionHeightEl.value.replace("-","");
    }
}
function setMaxImageHeight(){
    if(resolutionHeightEl.value > Math.round(proportion * +document.getElementById("frogSection").offsetWidth)){
        resolutionHeightEl.value = Math.round(proportion * +document.getElementById("frogSection").offsetWidth);
    }
}
function handleEmptyAxis(){
    if(resolutionHeightEl.value === ""){
        document.getElementById("frogImage").style.height = resolutionWidthEl.value * proportion  +"px";
        resolutionHeightEl.placeholder = Math.round(resolutionWidthEl.value * proportion);
    }
    if(resolutionWidthEl.value === ""){
        document.getElementById("frogImage").style.width = resolutionHeightEl.value / proportion  +"px";
        resolutionWidthEl.placeholder = Math.round(resolutionHeightEl.value / proportion);
    }
}
resolutionHeightEl.addEventListener("input",function(){
    removeMinusNumbers()
    setMaxImageHeight();
    document.getElementById("frogImage").style.height = this.value +"px";
    handleEmptyAxis()
})
resolutionWidthEl.addEventListener("input",function(){
    console.log("yea")
    removeMinusNumbers();
    setMaxImageWidth();
    document.getElementById("frogImage").style.width = this.value +"px";
    handleEmptyAxis()
})

inputSignTextEl.addEventListener("input", function (el) {
    document.getElementById("text-on-sign").textContent = el.target.value;
});

textOnSignEl.addEventListener("input", function (el) {
    addBrIfEmpty(el.target,el.target.textContent)
    document.getElementById("sign-text").value = document.getElementById("text-on-sign").textContent;
})
function addBrIfEmpty(el,text){
    if(text === ""){
        el.appendChild(document.createElement("br"))
    }
}



// function smallRandomNumber(){     return +(Math.random()*0.2).toFixed(2) }
// function animationRandomizer(el){     animationCount = 20000 /*
// Math.round((Math.random()+1)*3) */     console.log(animationCount)
// el.style.animationIterationCount = `1, ${animationCount},1`
// el.style.animationTimingFunction= `ease, cubic-bezier(${.25 +
// smallRandomNumber()}, ${.1 + smallRandomNumber()}, ${.25 +
// smallRandomNumber()}, ${1 + smallRandomNumber()})` jumpingAnimationDuration =
// (Math.random()+0.5*1.2).toFixed(2) el.style.animationDuration =
// `1s,${jumpingAnimationDuration}s,1s` el.style.animationDelay = `0s, 1s,
// ${(jumpingAnimationDuration*animationCount)+1}s` } .peepo {     position:
// absolute;     bottom: 0;     display: flex;     justify-content: center;
// animation-name: entering, jumping, leaving; } .peepo--image {     width:
// 350px; } .peepo--text {     font-family: 'Roboto Mono', monospace;
// line-height: 1.2em;     max-width: 300px;     position: absolute; padding:
// 10%;     padding-top: 20%;     padding-bottom: 0;     max-height: 26%;
// text-align: center;     transform: rotate(7deg);     overflow: hidden;
// word-wrap: break-word;     text-overflow: ellipsis; } @keyframes leaving{ to{
//         transform: translateY(100%);     } } @keyframes entering {     0% {
//     transform: translateY(100%);     }     100% {     transform:
// translateY(0%);     } } @keyframes jumping {     50% { transform:
// translateY(-10%);     }     100% {         transform: translateY(0%);     } }
//# sourceMappingURL=sourcemaps/main.js.map
