    document.getElementById('form-cadastro').addEventListener('submit', function(event) {
            // Evita que a página recarregue ao apertar Enter
            event.preventDefault();

            // Pegando os valores preenchidos (opcional, para validação)
            const email = document.getElementById('email').value;
            const user = document.getElementById('username').value;
            
            console.log('Enter pressionado! Formulário validado para:', email);

            window.location.href = "paginaQuiz.html";
            // AQUI VOCÊ COLOCA O CÓDIGO DA PRÓXIMA ETAPA
            // Exemplo: window.location.href = "proxima-etapa.html";
            // Ou chamar uma função que esconde este card e mostra outro.
        });
