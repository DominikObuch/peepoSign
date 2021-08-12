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