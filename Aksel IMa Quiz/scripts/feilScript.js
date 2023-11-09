const igjen = document.getElementById("tryAgain")
const start = document.getElementById("start")

igjen.addEventListener("click", function () {
    window.location = "oppgaver.html"
    localStorage.setItem("hearts",5)
})

start.addEventListener("click", function () {
    window.location = "index.html"
})