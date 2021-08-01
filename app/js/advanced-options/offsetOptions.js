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