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