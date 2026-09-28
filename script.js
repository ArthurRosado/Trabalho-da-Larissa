const botoes = document.querySelectorAll(".filtro");

const itens = document.querySelectorAll(".item-card");

const cardapio = document.querySelector(".cardapio");

const secoes = document.querySelectorAll(".lado-direito section");


botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        const categoriaSelecionada = botao.dataset.categoria;


        /* =========================
           BOTÃO ATIVO
        ========================== */

        botoes.forEach(function(botaoAtual) {

            botaoAtual.classList.remove("ativo");

        });

        botao.classList.add("ativo");


        /* =========================
           ALTERA O MODO DO CARDÁPIO
        ========================== */

        cardapio.classList.remove(
            "modo-todos",
            "modo-carnes",
            "modo-guarnicoes",
            "modo-bebidas"
        );

        cardapio.classList.add(
            "modo-" + categoriaSelecionada
        );


        /* =========================
           MOSTRA / ESCONDE PRODUTOS
        ========================== */

        itens.forEach(function(item) {

            const categoriaItem = item.dataset.categoria;


            if (
                categoriaSelecionada === "todos" ||
                categoriaItem === categoriaSelecionada
            ) {

                item.classList.remove("item-escondido");

            } else {

                item.classList.add("item-escondido");

            }

        });


        /* =========================
           MOSTRA / ESCONDE SEÇÕES
        ========================== */

        secoes.forEach(function(secao) {

            const categoriaSecao = secao.dataset.categoria;


            if (
                categoriaSelecionada === "todos" ||
                categoriaSecao === categoriaSelecionada
            ) {

                secao.classList.remove("secao-escondida");

            } else {

                secao.classList.add("secao-escondida");

            }

        });

    });

});