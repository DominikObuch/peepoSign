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