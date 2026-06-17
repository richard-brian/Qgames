const opcoes = document.querySelectorAll(".opcao");
const button = document.getElementById('quizComplete');
let marcadas = [];

opcoes.forEach(opcao => {

    opcao.addEventListener("change", () => {

        if (opcao.checked) {

            marcadas.push(opcao);

            if (marcadas.length > 5) {

                let primeira = marcadas.shift();

                primeira.checked = false;

            }
            if (marcadas.length >= 5){
                button.addEventListener("click", function(){
                    window.location.href = "resultado.html"
                });
            }


        } else {

            marcadas = marcadas.filter(item => item !== opcao);
        }

    });

});