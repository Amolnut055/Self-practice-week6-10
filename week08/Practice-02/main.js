const getBoxEl = document.getElementById("box")
const buttons = Array.from(document.querySelectorAll("button"))

for (const button of buttons) {
    button.addEventListener("click", () => {
        switch (button.dataset.color) {
            case "red":
                getBoxEl.style.backgroundColor = "red"
                break;
            case "blue":
                getBoxEl.style.backgroundColor = "blue"
                break;
            case "green":
                getBoxEl.style.backgroundColor = "green"
                break;

        }
    })
}

// const getBoxEl = document.getElementById("box")
// const buttons = Array.from(document.querySelectorAll("button[data-color]"))

// for (const button of buttons) {
//     button.addEventListener("click", () => {
//         getBoxEl.style.backgroundColor = button.dataset.color
//     })
// }