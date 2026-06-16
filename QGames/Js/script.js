const opcoes = document.querySelectorAll(".opcao");

let marcadas = [];

opcoes.forEach(opcao => {

    opcao.addEventListener("change", () => {

        if (opcao.checked) {

            marcadas.push(opcao);

            if (marcadas.length > 5) {

                let primeira = marcadas.shift();

                primeira.checked = false;
            }

        } else {

            marcadas = marcadas.filter(item => item !== opcao);
        }

    });

});