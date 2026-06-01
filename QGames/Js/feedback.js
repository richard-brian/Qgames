const botao = document.getElementById("btnEnviar");

const comentario = document.getElementById("comentario");

const nota = document.getElementById("nota");

const publicar = document.getElementById("publicar");

const lista = document.getElementById("listaComentarios");

botao.addEventListener("click", function(){

    let textoComentario = comentario.value;

    let valorNota = nota.value;

    // VERIFICA CAMPO VAZIO

    if(textoComentario.trim() === ""){

        alert("Digite um comentário.");

        return;
    }

    // VERIFICA CHECKBOX

    if(publicar.checked){

        // CRIA CARD

        const card = document.createElement("div");

        card.classList.add("comentario-card");

        // CONTEÚDO

        card.innerHTML = `

            <div class="topo-comentario">

                <span class="nota-comentario">
                    Nota: ${valorNota}
                </span>

            </div>

            <p class="texto-comentario">
                ${textoComentario}
            </p>

        `;

        // ADICIONA NO TOPO

        lista.prepend(card);

    }

    // LIMPA CAMPOS

    comentario.value = "";

    nota.value = "0-10";

    publicar.checked = false;

});