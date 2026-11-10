import './style.css'


// const a = document.getElementById("lorem")
// const a = document.getElementsByClassName("lorem")
// const a = document.getElementsByTagName("lorem")

const a = document.querySelector("#lorem")
// const a = document.querySelector("article")
const articles = document.querySelectorAll("article")


// a.textContent = "🔥"
a.classList.add("blue")


// const button = document.querySelector("button")
// if (!button) throw "error";

const formulario = document.querySelector("#formularioDeArticulos")

formulario.addEventListener("submit", (event) => {

  event.preventDefault();

  // const titulo = document.getElementById("inputTitulo").value
  // const content = document.getElementById("inputContenido").value

  const data = new FormData(formulario);

  const newArticle = document.createElement("article");
  newArticle.id = "xxx";
  newArticle.classList.add("importante");

  const newTitle = document.createElement("h2")
  newTitle.textContent = data.get("titulo")

  const newContent = document.createElement("p")
  newContent.textContent = data.get("contenido")

  newArticle.appendChild(newTitle)
  newArticle.appendChild(newContent)

  const allCards = document.querySelector("section.cards");
  allCards.appendChild(newArticle)

  formulario.reset();
})

const bola = document.querySelector(".bola");

bola.addEventListener("click", (event) => {
  // console.log("click!!");
  bola.classList.add("clicked")

  setTimeout(() => {
    bola.classList.remove("clicked")
  }, 250)

})



document.addEventListener("mousemove", (evento) => {
  console.log(evento.clientX, evento.clientY)
  bola.style.top = evento.clientY - 25 + "px";
  bola.style.left = evento.clientX - 25 + "px";
})


