const coment = document.getElementById("Comentarios");
const url = "https://jsonplaceholder.typicode.com/comments";

fetch(url)
.then(respuesta => respuesta.json())
.then(objetos => mostrar(objetos))
.catch(error => console.log(error))

function mostrar(array){
    for (let i=0; i<10; i++) {
        coment.innerHTML += `<div class="comentario-api"><h4>${array[i].email}</h4>
                            <p>${array[i].body}</p> </div>`;
    }
}