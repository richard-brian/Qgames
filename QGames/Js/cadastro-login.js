
const formCadastro = document.getElementById('form-cadastro');


if (formCadastro) {
    formCadastro.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        console.log('Enter pressionado no Cadastro!');
        window.location.href = "paginaQuiz.html"
        
    });
}



const formLogin = document.getElementById('form-login');


if (formLogin) {
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        
        const emailLogin = document.getElementById('email').value;
        const senhaLogin = document.getElementById('floatingPassword').value;
        
        console.log('Enter pressionado no Login! Tentando conectar com:', emailLogin);
        
        window.location.href = "paginaQuiz.html"
    });
}