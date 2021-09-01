let options = {
    //basic options variables
    signText: '',
    selectedPanel: {
        old: 0,
        current: 0
    },
    multilineText: true,
    width: '',
    height: '',
    //first panel of adv options variables
    fontSize: '',
    verticalAlign: 'center',
    horizontalAlign: 'center',
    offsets: [0,0,0,0],
    fontBlur: '1',
    fontFamily: '',
    backgroundColor: null
}
const elements = {
    textOnSignEl: document.getElementById('text-on-sign'),
    frogImageEl: document.getElementById("frogImage"),
    inputSignTextEl: document.getElementById('signText'),
    fontSizeInputEl: document.getElementById('fontSize'),
    offsetOptionsEls: document.getElementsByClassName('offsetOptions'),
    choosePanelEl: document.getElementsByClassName('options__btn--settings'),
    advFormEl: document.getElementsByClassName('advanced-options'),
    fontBlurEl: document.getElementById('fontBlur'),
    horizontalAlignEls: document.querySelectorAll('#horizontalAlign span'),
    verticalAlignEls: document.querySelectorAll('#verticalAlign span'),
    setToDefaultEl: document.getElementById('setToDefault'),
    resolutionWidthEl: document.getElementById("resolutionWidth"),
    resolutionHeightEl: document.getElementById("resolutionHeight")
}