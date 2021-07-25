let inputSignTextEl = document.getElementById("sign-text");

function updateSign(){
    let textOnSignEl = document.getElementById("text-on-sign");
    textOnSignEl.textContent = inputSignTextEl.value;
    fontSizePeepo(textOnSignEl,inputSignTextEl.value)
}
inputSignTextEl.addEventListener("input", updateSign);


function fontSizePeepo(el, text) {
    let isDesktop = window.width >= 1024 ? true: false;
    if(isDesktop){
        if (text.length <= 6) {
            el.style.fontSize = "7vw";
        }
        else if (text.length <= 19) {
            el.style.fontSize = "6vw";
        }
        else if( text.length >=20){
            el.style.fontSize = "3.5vw";
        }
    }else{
        if (text.length <= 7) {
            el.style.fontSize = "10vw";
        }
        else if (text.length <= 15) {
            el.style.fontSize = "6vw";
        }
        else if( text.length >=16){
            el.style.fontSize = "4vw";
        }
    }
}

// function smallRandomNumber(){
//     return +(Math.random()*0.2).toFixed(2)
// }
// function animationRandomizer(el){
//     animationCount = 20000 /* Math.round((Math.random()+1)*3) */
//     console.log(animationCount)
//     el.style.animationIterationCount = `1, ${animationCount},1`
//     el.style.animationTimingFunction= `ease, cubic-bezier(${.25 + smallRandomNumber()}, ${.1 + smallRandomNumber()}, ${.25 + smallRandomNumber()}, ${1 + smallRandomNumber()})`
//     jumpingAnimationDuration = (Math.random()+0.5*1.2).toFixed(2)
//     el.style.animationDuration = `1s,${jumpingAnimationDuration}s,1s`
//     el.style.animationDelay = `0s, 1s, ${(jumpingAnimationDuration*animationCount)+1}s`
// }

//.peepo {
//     position: absolute;
//     bottom: 0;
//     display: flex;
//     justify-content: center;
//     animation-name: entering, jumping, leaving;
// }

// .peepo--image {
//     width: 350px;
// }

// .peepo--text {
//     font-family: 'Roboto Mono', monospace;
//     line-height: 1.2em;
//     max-width: 300px;
//     position: absolute;
//     padding: 10%;
//     padding-top: 20%;
//     padding-bottom: 0;
//     max-height: 26%;
//     text-align: center;
//     transform: rotate(7deg);
//     overflow: hidden;
//     word-wrap: break-word;
//     text-overflow: ellipsis;

// }
// @keyframes leaving{
//     to{
//         transform: translateY(100%);
//     }
// }
// @keyframes entering {
//     0% {
//         transform: translateY(100%);
//     }

//     100% {
//         transform: translateY(0%);
//     }
// }

// @keyframes jumping {

//     50% {

//         transform: translateY(-10%);
//     }

//     100% {
//         transform: translateY(0%);
//     }
// }