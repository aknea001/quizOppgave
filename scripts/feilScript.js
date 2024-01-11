const igjen = document.getElementById("tryAgain")
const start = document.getElementById("start")

igjen.addEventListener("click", function () {
    window.location = "oppgaver.html"
    localStorage.setItem("hearts",5)
    localStorage.setItem("opg", 1)
    localStorage.setItem("hint", 3)
})

start.addEventListener("click", function () {
    window.location = "index.html"
})