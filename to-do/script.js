const inputBox = document.getElementById("input-box");
const listaContainer = document.getElementById("lista-container");

function AdicionarTarefa(){
    if(inputBox.value === ''){
        alert("Adicione alguma tarefa!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listaContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listaContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listaContainer.innerHTML);
}
function showTask(){
    listaContainer.innerHTML = localStorage.getItem("data");
}
showTask();