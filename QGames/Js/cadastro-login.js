
const formCadastro = document.getElementById('form-cadastro');
if (formCadastro) {
    formCadastro.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailCadastro = document.getElementById('email').value;
        const senhaCadastro = document.getElementById('floatingPassword').value;
        const usuario = document.getElementById('username').value;
        localStorage.setItem('nomeUsuario', usuario);

        console.log('`Pressione enter para prosseguir`!');
        window.location.href = "paginaQuiz.html"

    });
}

const formLogin = document.getElementById('form-login');
if (formLogin) {
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault();


        const emailLogin = document.getElementById('email').value;
        const senhaLogin = document.getElementById('floatingPassword').value;
        
        console.log('Pressione enter para continuar', emailLogin);

        window.location.href = "paginaQuiz.html"
    });
}




// Recupera o valor salvo no localStorage
const usuario = localStorage.getItem('nomeUsuario');

// Seleciona a div
const perfilusername = document.getElementById('perfil-username');

// Se o usuário existir, insere no HTML
if (usuario) {
    perfilusername.innerHTML += `<h1>${usuario}</h1>`;
    
} 
else {
    perfilusername.innerHTML += `<h1>Visitante</h1>`; // Caso não encontre o cadastro
}
