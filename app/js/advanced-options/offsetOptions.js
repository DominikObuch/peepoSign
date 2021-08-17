function checkOffsets(i) {
    options.offsets[i] = elements.offsetOptionsEls[i].value === ""
        ? "0"
        : elements.offsetOptionsEls[i].value;

}
function updateOffsets() {
    let offsetVertical = `calc(7% + ${options.offsets[0] - options.offsets[1]}px`;
    elements.textOnSignEl.style.top = offsetVertical;
    let offsetHorizontal = `calc(8% + ${options.offsets[2] - options.offsets[3]}px`;
    elements.textOnSignEl.style.left = offsetHorizontal;

}
function updateOffsetsInputs() {
    for (let i = 0; i < elements.offsetOptionsEls.length; i++) {
        console.log(options.offsets[i] === 0)
        elements.offsetOptionsEls[i].value = options.offsets[i] === 0 ? "": options.offsets[i];
    }
}

for (let i = 0; i <= 3; i++) {
    elements
        .offsetOptionsEls[i]
        .addEventListener("input", function () {
            checkOffsets(i);
            updateOffsets();
        });

}
