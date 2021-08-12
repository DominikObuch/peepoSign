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