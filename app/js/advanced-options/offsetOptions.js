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