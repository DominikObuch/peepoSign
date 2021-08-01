const breakWordsEl = document.getElementById("breakWords");
breakWordsEl.addEventListener("change",function(){
    if(this.checked){
        textOnSignEl.style.wordBreak = "break-all";
    }else{
        textOnSignEl.style.wordBreak = "unset";
    }
})