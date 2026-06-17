
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


const usuario = localStorage.getItem('nomeUsuario');


const perfilusername = document.getElementById('perfil-username');
const result = document.getElementById('resultado');

if (perfilusername) {  
    perfilusername.innerHTML += `
    <h1><i class="bi bi-person-circle"
    style="font-size: 3rem; color: blue; margin-right: 5px;"></i>${usuario} </h1>
    <span style="font-size: 1rem; color: rgb(121, 121, 121);">Usuário há 2 meses | Há 1 listas criadas</span>`;
} 
else if(result){
    result.insertAdjacentHTML('afterbegin', `<h2 class="text-center mb-4 text-white">Ok ${usuario} aqui está o jogo que mais se encaixa em seu perfil!</h2>`);
}
else if(result){
    result.insertAdjacentHTML('afterbegin', '<h2 class="text-center mb-4 text-white">Ok Visitante aqui está o jogo que mais se encaixa em seu perfil!</h2>');
}
else {
    perfilusername.innerHTML += `<h1><i class="bi bi-person-circle"
    style="font-size: 3rem; color: blue; margin-right: 5px;"></i>Visitante </h1>
    <span style="font-size: 1rem; color: rgb(121, 121, 121);">Usuário há 2 meses | Há 1 listas criadas</span>`;
}
