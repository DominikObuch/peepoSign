function capture() {
    const captureEl = document.querySelector('#capture')
    html2canvas(captureEl, {scrollY: -window.scrollY})
        .then(canvas => {
            document.body.appendChild(canvas)
            canvas.style.display = 'none'
            return canvas;
        })
        .then(canvas => {
            const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream')
            const a = document.createElement('a')
            a.setAttribute('download', 'my-image.png')
            a.setAttribute('href', image)
            a.click()
            canvas.remove()
        })
}

const btn = document.querySelector('#download')
btn.addEventListener('click', capture)