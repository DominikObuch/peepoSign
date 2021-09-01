
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
    if(options.height === "" && options.width === ""){
        elements.frogImageEl.style.height = "";
        elements.frogImageEl.style.width = "";
    }
}

function checkWidth() {
    options.width = elements.resolutionWidthEl.value;
}
function checkHeight() {
    options.height = elements.resolutionHeightEl.value;
}
function updateResolution() {
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
        updateResolution();
    })
elements.resolutionWidthEl.addEventListener("input", function () {
    checkWidth();
    removeMinusAxis();
    setMaxImageWidth();
    handleEmptyAxis();
    updateResolution();
})