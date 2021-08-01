document.getElementById("multiline").addEventListener("input", () => {
    if(document.getElementById("multiline").checked){
        textOnSignEl.style.whiteSpace = "normal";
    }
    else{
        textOnSignEl.style.whiteSpace = "nowrap";
    }
})