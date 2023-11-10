const start = document.getElementById("tilStartskjerm")
const taIgjen = document.getElementById("taIgjen")
const message = document.getElementById("vinnMessage")
const display = document.getElementById("bileDisplay")
let hearts = localStorage.getItem("hearts")


start.addEventListener("click", function () {
    window.location = "index.html"
})

taIgjen.addEventListener("click", function () {
    window.location = "oppgaver.html"
    localStorage.setItem("hearts", 5)
    localStorage.setItem("opg", 1)
    localStorage.setItem("hint", 3)
})

if (hearts == 5) {
    message.textContent = "WOW, du klarte alt! Bra jobba!"
    display.src = "bilder/fullScore.gif"
}
else if (hearts >= 3) {
    message.textContent = "Du gjorde ganske bra, du endte med " + hearts + " liv"
    display.src = "bilder/goodScore.gif"
}
else {
    message.textContent = "Du overlevde så vidt, du hadde bare " + hearts + " liv igjen, men bra jobba fortsatt"
    display.src = "bilder/badScore.gif"
}