const feil = document.querySelectorAll(".feilKnapp")
const heartDisplays = document.querySelectorAll(".hearts")
let hearts = localStorage.getItem("hearts")
hearts = 5

heartDisplays.forEach(function (heartDisplay) {
    heartDisplay.src = "bilder/hearts/" + hearts + "hearts.png"
})

feil.forEach(function (feilButton) {
    feilButton.addEventListener("click", function () {
        hearts -= 1
        
        heartDisplays.forEach(function (heartDisplay) {
            heartDisplay.src = "bilder/hearts/" + hearts + "hearts.png"
        })        

        localStorage.setItem("hearts", hearts)
        if (hearts <= 0) {
            window.location = "feil.html"
        }
    })
})