let resolutionWidthEl = document.getElementById("resolutionWidth")
let resolutionHeightEl = document.getElementById("resolutionHeight")
let proportion = 508/469;
function setMaxImageWidth(){
    if(resolutionWidthEl.value > document.getElementById("frogSection").offsetWidth){
        resolutionWidthEl.value = document.getElementById("frogSection").offsetWidth;
    }
}
function removeMinusNumbers(){
    if(resolutionWidthEl.value.includes("-")){
        resolutionWidthEl.value = resolutionWidthEl.value.replace("-","");
    }
    if(resolutionHeightEl.value.includes("-")){
        resolutionHeightEl.value = resolutionHeightEl.value.replace("-","");
    }
}
function setMaxImageHeight(){
    if(resolutionHeightEl.value > Math.round(proportion * +document.getElementById("frogSection").offsetWidth)){
        resolutionHeightEl.value = Math.round(proportion * +document.getElementById("frogSection").offsetWidth);
    }
}
function handleEmptyAxis(){
    if(resolutionHeightEl.value === ""){
        document.getElementById("frogImage").style.height = resolutionWidthEl.value * proportion  +"px";
        resolutionHeightEl.placeholder = Math.round(resolutionWidthEl.value * proportion);
    }
    if(resolutionWidthEl.value === ""){
        document.getElementById("frogImage").style.width = resolutionHeightEl.value / proportion  +"px";
        resolutionWidthEl.placeholder = Math.round(resolutionHeightEl.value / proportion);
    }
}
resolutionHeightEl.addEventListener("input",function(){
    removeMinusNumbers()
    setMaxImageHeight();
    document.getElementById("frogImage").style.height = this.value +"px";
    handleEmptyAxis()
})
resolutionWidthEl.addEventListener("input",function(){
    console.log("yea")
    removeMinusNumbers();
    setMaxImageWidth();
    document.getElementById("frogImage").style.width = this.value +"px";
    handleEmptyAxis()
})
