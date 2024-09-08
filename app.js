function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um carro ou marca</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        marca = dado.marca.toLowerCase();
        tags = dado.tags.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        // ... (outros campos)

        if (titulo.includes(campoPesquisa) || marca.includes(campoPesquisa) || tags.includes(campoPesquisa) || descricao.includes(campoPesquisa) /* outros campos */) {
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p>Marca: ${dado.marca}</p>
                    <p>Ano: ${dado.ano}</p>
                    <p>Motor: ${dado.motor}</p>
                    <p>Potência: ${dado.potencia} cv</p>
                    <p>Descrição: ${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}