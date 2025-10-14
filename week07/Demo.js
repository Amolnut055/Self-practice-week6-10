// 1. append <p> under <div id="demo">
const demoEl = document.getElementById("demo")
const text1 = document.createElement("p")
const text2 = document.createElement("p")
const text3 = document.createElement("p")
// 1.5 add format="italic" attribute to <p>
text1.setAttribute("format","italic")
text2.setAttribute("format","italic")
text3.setAttribute("format","italic")
// 2. try to add three different text types
// 2.1 add <i>Sample Italic Text</i> with innerHTML
text1.innerHTML = "<i>Sample Italic Text</i>"
// 2.2 add <i>Sample Italic Text</i> with innerText
text2.innerText = "<i>Sample Italic Text</i>"
// 2.3 add <i>Sample Italic Text</i> with textContent
text3.textContent = "<i>Sample Italic Text</i>"

demoEl.append(text1,text2,text3)
