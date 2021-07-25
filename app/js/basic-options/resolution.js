let resolutionWidthEl = document.getElementById("resolutionWidth")
let resolutionHeightEl = document.getElementById("resolutionHeight")
resolutionHeightEl.addEventListener("input",function(){
    console.log(this.value)
    document.getElementById("frogImage").style.height = this.value +"px";
})
resolutionWidthEl.addEventListener("input",function(){
    console.log(this.value)
    document.getElementById("frogImage").style.width = this.value +"px";
})