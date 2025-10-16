const getBoxEl = document.getElementById("box")

const add = document.getElementById("add")
const remove = document.getElementById("remove")
const toggle = document.getElementById("toggle")

add.onclick = () => getBoxEl.classList.add("bordered")
remove.onclick = () => getBoxEl.classList.remove("bordered")
toggle.onclick = () => getBoxEl.classList.toggle("bordered")