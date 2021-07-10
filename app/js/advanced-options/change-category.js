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