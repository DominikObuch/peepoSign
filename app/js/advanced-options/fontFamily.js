const apikey = "AIzaSyDvwX-EQPmNL8RRY2yXxuMcRkPQ2iTqasw";
let fonts = [];
let loadedFontlimits = 50; //from 1 to max 1090 fonts;

function checkFontFamily() {
    options.fontFamily = document
        .getElementById("fontFamily")
        .value;
}
function updateFontFamily() {
    elements.textOnSignEl.style.fontFamily = options.fontFamily;
    document
        .getElementById("fontFamily")
        .style
        .fontFamily = options.fontFamily;
}
document
    .getElementById("fontFamily")
    .addEventListener("change", () => {
        checkFontFamily();
        updateFontFamily();
    })

document.addEventListener('DOMContentLoaded', () => {
    fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDvwX-EQPmNL8RRY2yXxuMc" +
                "RkPQ2iTqasw&sort=popularity")
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < loadedFontlimits; i++) {
                if (data.items[i].files.regular) {
                    fonts.push(new FontFace(data.items[i].family, `url(${data.items[i].files.regular.replace("http://", "https://")})`))
                    let newSelectEl = document.createElement("option");
                    newSelectEl.style.fontFamily = data.items[i].family;
                    newSelectEl.innerText = data.items[i].family;
                    document
                        .getElementById("fontFamily")
                        .appendChild(newSelectEl)
                }
            }
            console.log(fonts)
            return (fonts)
        })
        .then(fonts => {
            for (let i = 0; i < fonts.length; i++) {
                fonts[i]
                    .load()
                    .then(function (loadedFace) {
                        document
                            .fonts
                            .add(loadedFace);
                        document.querySelectorAll("#fontFamily option")[i].style.fontFamily = fonts[i].family
                    })
                    .catch(() => {
                        console.log("couldnt load a font")
                    })
            }
        })
})