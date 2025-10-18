import { deleteQuote, getAllQuotes, addQuote, updateQuote } from "./quote.js"
// Lesson 3 - Events Starter

let quotes = getAllQuotes()

// Select DOM elements
const quoteList = document.getElementById("quote-list")
const form = document.getElementById("quoteForm")
const contentInput = document.getElementById("content")
const authorInput = document.getElementById("author")
const idInput = document.getElementById("quoteId")
const randomBtn = document.getElementById("randomBtn")
const randomDisplay = document.getElementById("randomQuoteDisplay")

function createQuoteElement(quote) {
  // a quote element example
  const { id, content, author } = quote

  const quoteEl = document.createElement("div")
  const deleteBtn = document.createElement("button")
  const editBtn = document.createElement("button")
  const contentEl = document.createElement("p")
  const authorEl = document.createElement("p")

  quoteEl.dataset.id = id
  deleteBtn.dataset.id = id
  deleteBtn.textContent = "delete"
  deleteBtn.classList.add("delete-btn")

  editBtn.dataset.id = id
  editBtn.textContent = "Edit"
  editBtn.classList.add("edit-btn")

  contentEl.textContent = content
  authorEl.textContent = author

  quoteEl.append(contentEl, authorEl, editBtn, deleteBtn)

  editBtn.addEventListener("click", () => {
    idInput.value = id
    contentInput.value = content
    authorInput.value = author
  })

  deleteBtn.addEventListener("click", () => deleteQuoteFromDOM(id))

  return quoteEl
}

// Add, edit, delete quote functions

function addQuoteToDOM(quote) {
  const element = createQuoteElement(quote)
  quoteList.append(element)
}

function updateQuoteInDOM(quote) {
  const id = idInput.value
  const quoteEl = document.querySelector(`div[data-id='${id}']`)

  if (id && quoteEl) {
    const element = createQuoteElement(quote)
    quoteEl.replaceWith(element)
  }
}

function deleteQuoteFromDOM(id) {
  const element = document.querySelector(`div[data-id='${id}']`)

  if (element) {
    element.remove()
    deleteQuote(id)
    quotes = getAllQuotes()
  }
}

function renderQuotes() {
  quoteList.replaceChildren()
  if (quotes.length > 0) quotes.forEach((q) => addQuoteToDOM(q))
}

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const quote = quotes[randomIndex]

  if (quotes.length < 1) {
    return randomDisplay.innerHTML = "<p>-- No quotes to show --</p>"
  }

  randomDisplay.innerHTML = `<p>"${quote.content}" — ${quote.author}</p>`
}

// Event listeners for form submission, edit, and delete clicks

randomBtn.addEventListener("click", showRandomQuote)
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const content = contentInput.value
  const author = authorInput.value
  const id = parseInt(idInput.value)

  if (id) {
    const updatedQuote = updateQuote(id, content, author)
    quotes = getAllQuotes()
    updateQuoteInDOM(updatedQuote)
  } else {
    const quote = addQuote(content, author)
    quotes = getAllQuotes()
    addQuoteToDOM(quote)
  }

  form.reset()
  idInput.value = ""
})

renderQuotes()
