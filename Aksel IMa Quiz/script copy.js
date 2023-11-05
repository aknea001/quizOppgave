const knapp = document.getElementById("startKnapp")
const oppgave1 = document.getElementById("question1")
const startSide = document.getElementById("startside")

knapp.addEventListener("click", function () {
    startSide.style.display = "none"
    oppgave1.style.display = "block"
})