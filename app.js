function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let resultados = "";

    for (let dado of dados) {
        resultados += `
            
            <div class="item-resultado">
                <div class="container">
                    <img src="${dado.foto}" alt="">
                </div>
                <div> 
                    <h2>
                        <a href="#" target="_blank">${dado.codigo} - ${dado.nome}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <div class="caracteristicas">
                        <p>Nome Japonês - ${dado.nome_japones}</p>
                        <p>Espécie - ${dado.especie}</p>
                        <p>Tipo - ${dado.tipo}</p>
                    </div>
                    
                </div>
            </div>
            
        `;
    }

    section.innerHTML = resultados;
}
