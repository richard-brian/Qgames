document.addEventListener('DOMContentLoaded', function() {
    const rangePreco = document.getElementById('rangePreco');
    const valorAtual = document.getElementById('valorAtual');
    const orcamentosaved = document.getElementById('orcamento-salvo');

    
    function atualizarValor() {
        valorAtual.textContent = rangePreco.value;
    }
    rangePreco.addEventListener('input', atualizarValor);

    orcamentosaved.addEventListener('submit', function (event){
        event.preventDefault();
        const valorFinal = rangePreco.value; 
        localStorage.setItem('Orcamento', valorFinal);

        console.log('Redirecionando para o quiz...');
        
        window.location.href = "paginaQuiz.html";
    });
});
