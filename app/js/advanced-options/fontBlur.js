const fontBlurEl = document.getElementById("fontBlur");
fontBlurEl.addEventListener("input",function(){
    textOnSignEl.style.filter = `blur(${fontBlurEl.value}px)`;
})