const input = document.getElementById("inputField")
const inputText = document.getElementById("textDisplay")
let inputValue = input.value

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        inputValue = input.value.toLowerCase()
        if (inputValue == "golf") {
            inputText.textContent = "window.location = vinn.html"
        }
        else {
            inputText.textContent = "Det var feil, siden det er et bonus spørsmål får du uendlige liv! \n PS Hint: De har små baller" 
        }
    }
})