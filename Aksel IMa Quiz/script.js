const knapp = document.getElementById("startKnapp")
let counter = 0

knapp.addEventListener("click", function () {
    console.log("hello")
    counter += 1
    window.location="oppgave" + counter + ".html"
})