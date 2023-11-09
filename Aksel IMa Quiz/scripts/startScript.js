const knapp = document.getElementById("startKnapp")

localStorage.setItem("hearts", 5)

knapp.addEventListener("click", function () {
    window.location = ("oppgaver.html")
})