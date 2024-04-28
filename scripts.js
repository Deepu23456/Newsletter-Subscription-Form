const emailInput = document.getElementById("email")
const submitButton = document.querySelector(".submitbtn")
const errorSpan = document.querySelector(".label-error span")
const container = document.querySelector(".container")
const successHeadingSpan = document.querySelector(".success-heading span b")
const successMessage = document.querySelector(".success-message")
const dismissButton = document.querySelector(".success-btn button")

submitButton.addEventListener('click', (e) => {
    if (emailInput.value.match(emailInput.pattern)) {
        emailInput.parentElement.classList.remove("error")
        errorSpan.style.display = "none"
        container.style.display = "none"
        successMessage.style.display = "block"
        successHeadingSpan.textContent = `${emailInput.value}`
    } else {
        emailInput.parentElement.classList.add("error")
        errorSpan.style.display = "flex"
    }
})

emailInput.addEventListener('focus', (e) => {
    if(e.target.parentElement.classList[1] === "error"){
        emailInput.parentElement.classList.remove("error")
        errorSpan.style.display = "none"
    }
})

dismissButton.addEventListener("click", (e) => {
    container.style.display = "flex"
    successMessage.style.display = "none"
    emailInput.value = ""
})
