document.addEventListener('DOMContentLoaded', function() {
    
    
    const rangePreco = document.getElementById('rangePreco');
    const valorAtual = document.getElementById('valorAtual');
    const formulario = document.querySelector('main form');
    
    

    
    function atualizarValor() {
        if (rangePreco && valorAtual) {
            valorAtual.textContent = rangePreco.value;
        }
    }

    if (rangePreco) {
        rangePreco.addEventListener('input', atualizarValor);
    }

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const valorFinal = rangePreco.value; 
            localStorage.setItem('Orcamento', valorFinal);

            

            console.log('Orçamento salvo: R$ ' + valorFinal);
            window.location.href = "paginaQuiz.html";
        });
    }

    
    
    const valorFinalSalvo = localStorage.getItem('Orcamento');
    const preferencia = document.getElementById('preco');
    const preferencia2 = document.getElementById('preco2');
    const preferencia3 = document.getElementById('preco3');
    if (preferencia && valorFinalSalvo) {
        
        const orcamentoNum = Number(valorFinalSalvo);

        if (orcamentoNum > 250) {
            
            preferencia.insertAdjacentHTML('afterbegin', `Preço: PS:R$349,90 PC:R$250 <i class="bi bi-hand-thumbs-up text-success"></i> `);
        } else if (orcamentoNum === 250) { 
            
            preferencia.insertAdjacentHTML('afterbegin', `Preço: PS:R$349,90 PC:R$250 <i class="bi bi-hand-thumbs-up text-warning"></i> `);
        } else if (orcamentoNum < 250) {
            preferencia.insertAdjacentHTML('afterbegin', `Preço: PS:R$349,90 PC:R$250 <i class="bi bi-hand-thumbs-down text-danger"></i> `);
        } else {
            preferencia.insertAdjacentHTML('afterbegin', `Preço: PS:R$349,90 PC:R$250 `);
        }
        
    }
    if (preferencia2 && valorFinalSalvo) {
        
        const orcamentoNum = Number(valorFinalSalvo);

        if (orcamentoNum > 440) {
            
            preferencia2.insertAdjacentHTML('afterbegin', `Preço: Nintendo:440 <i class="bi bi-hand-thumbs-up text-success"></i> `);
        } else if (orcamentoNum === 440) { 
            
            preferencia2.insertAdjacentHTML('afterbegin', `Preço: Nintendo:440 <i class="bi bi-hand-thumbs-up text-warning"></i> `);
        } else if (orcamentoNum < 440) {
            preferencia2.insertAdjacentHTML('afterbegin', `Preço: Nintendo:440 <i class="bi bi-hand-thumbs-down text-danger"></i> `);
        } else {
            preferencia2.insertAdjacentHTML('afterbegin', `Preço: PS:R$349,90 PC:R$250 `);
        }
        
    }
    if (preferencia3 && valorFinalSalvo) {
        
        const orcamentoNum = Number(valorFinalSalvo);

        if (orcamentoNum > 45) {
            
            preferencia3.insertAdjacentHTML('afterbegin', `Preço: Média:R$45,00 <i class="bi bi-hand-thumbs-up text-success"></i> `);
        } else if (orcamentoNum === 45) { 
            
            preferencia3.insertAdjacentHTML('afterbegin', `Preço: Média:R$45,00 <i class="bi bi-hand-thumbs-up text-warning"></i> `);
        } else if (orcamentoNum < 45) {
            preferencia3.insertAdjacentHTML('afterbegin', `Preço: Média:R$45,00 <i class="bi bi-hand-thumbs-down text-danger"></i> `);
        } else {
            preferencia3.insertAdjacentHTML('afterbegin', `Preço: Média:R$45,00 `);
        }
        
    }
});