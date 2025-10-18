const keyLogEl = document.getElementById("keyLog")
const keyInput = document.getElementById("keyInput")

function showLog(message, color) {
    const p = document.createElement("p")
    p.style.color = color
    p.textContent = message
    keyLogEl.append(p)
}

keyInput.addEventListener("keydown", (e) => {
    const key = e.key
    if (key === "Enter") {
        showLog(`You pressed: ${key}`, "blue")
        return
    }
    showLog(`You pressed: ${key}`)
})