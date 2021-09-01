function setToDefaultOptions() {
    options.multilineText = true;
    options.fontSize = '';
    options.breakWords = true;
    options.verticalAlign = 'center';
    options.horizontalAlign = 'center';
    options.offsets = [0,0,0,0];
    options.fontBlur = ''
    options.fontBlur = '';
    options.width = '';
    options.height = '';
    options.backgroundColor = null;
}
elements
    .setToDefaultEl
    .addEventListener('click', function () {
        setToDefaultOptions();

        adjustFontSizePeepo();
        updateFontSize();

        updateHorizontalAlign();
        updateVerticalAlign();


        updateOffsetsInputs();
        updateOffsets();

        defaultMultilineText();
        checkMultilineText();
        updateMultilineText();

        handleEmptyAxis();
        updateResolution();
    })