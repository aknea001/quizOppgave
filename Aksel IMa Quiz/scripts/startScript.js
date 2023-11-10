const knapp = document.getElementById("startKnapp")

localStorage.setItem("hearts", 5)
localStorage.setItem("opg", 1)

knapp.addEventListener("click", function () {
    window.location = ("oppgaver.html")
})