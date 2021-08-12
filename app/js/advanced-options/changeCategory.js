function updateCategory() {
    elements
        .choosePanelEl[options.selectedPanel.old]
        .classList
        .remove("options__btn--settings-active");

    elements
        .choosePanelEl[options.selectedPanel.current]
        .classList
        .add("options__btn--settings-active");

    elements.advFormEl[options.selectedPanel.old]
        .classList
        .add("display-none");
    elements.advFormEl[options.selectedPanel.current]
        .classList
        .remove("display-none");
}
function checkCategory(i) {
    options.selectedPanel.old = options.selectedPanel.current;
    options.selectedPanel.current = i;

}
for (let i = 0; i < 3; i++) {
    elements
        .choosePanelEl[i]
        .addEventListener("click", function () {
            checkCategory(i);
            updateCategory();
        });
}