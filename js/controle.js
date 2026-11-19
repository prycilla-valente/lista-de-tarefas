let contador = 0;

let input = document.getElementById("inputTarefa"); // Pega o elemento de input da tarefa
let btnAdd = document.getElementById("btn-add"); // Pega o botão de adicionar tarefa
let main = document.getElementById("areaLista")

function addTarefa() {
    //pegar primeiro o valor digitado no input
    let valorInput = input.value;

    // se não for vazio, nem nulo, nem indefinido

    if((valorInput !=="") && (valorInput!==null) && (valorInput!==undefined)) {
        // !== significa "diferente de" e é usado para comparar valores sem conversão de tipo
        // && significa "e" e é usado para combinar múltiplas condições
             
        ++contador;


        
        let novoItem = `
         <div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="material-icons">radio_button_unchecked</i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
              
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete"><i class="material-icons">delete</i> Deletar</button>
            </div>
        </div>
        
        `;

        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;
        
        // ZERAR OS CAMPINHOS
        input.value ="";
        input.focus(); // Coloca o foco de volta no input para facilitar a digitação da próxima tarefa
        

    }
}
// serve para deletar uma tarefa específica pelo seu id
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");

    console.log(classe);

    var icone = document.getElementById("icone_" + id);

    if (classe == "item") {
        item.classList.add("clicado");

        icone.innerText = "check_circle";

        item.parentNode.appendChild(item); // serve para mover o item clicado para o final da lista

    } else {
        item.classList.remove("clicado");

        icone.innerText = "radio_button_unchecked";
    }
}

// ADICIONAR TAREFA AO TECLEAR ENTER 
input.addEventListener("keyup", function(event) {
    // SE TECLOU ENTER (13)
    if (event.keyCode === 13) {
        event.preventDefault(); // Impede o comportamento padrão do Enter, que pode ser enviar um formulário
        btnAdd.click()
    }
});

