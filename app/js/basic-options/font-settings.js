const fontSizeInputEl = document.getElementById("fontSize");
fontSizeInputEl.addEventListener("input",function(){
    if(this.value === ""){
        fontSizePeepo(document.getElementById("text-on-sign"),inputSignTextEl.value)
    }else{
        document.getElementById("text-on-sign").style.fontSize = this.value+"px"
    }
})
const breakWordsEl = document.getElementById("breakWords");
breakWordsEl.addEventListener("change",function(){
    if(this.checked){
        textOnSignEl.style.wordBreak = "break-all";
    }else{
        textOnSignEl.style.wordBreak = "unset";
    }
})