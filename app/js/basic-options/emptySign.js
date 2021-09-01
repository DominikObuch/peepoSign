elements.inputSignTextEl.addEventListener("input", function (el) {
    options.signText = el.target.value;
    elements.textOnSignEl.textContent = options.signText;
    addBrIfEmpty(elements.textOnSignEl,elements.textOnSignEl.textContent);
});
elements.textOnSignEl.addEventListener("input", function () {
    options.signText = elements.textOnSignEl.textContent;
    document.getElementById("signText").value = options.signText;
    addBrIfEmpty(elements.textOnSignEl,elements.textOnSignEl.textContent);
})
function addBrIfEmpty(el,text){
    if(text === ""){
        el.appendChild(document.createElement("br"))
    }
}

