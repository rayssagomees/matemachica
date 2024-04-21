document.addEventListener("DOMContentLoaded", function() {
    const capitulos = {
        1: [1, 2, 3],  // Exercícios disponíveis para o Capítulo 1
        2: [1, 2, 3],  // Exercícios disponíveis para o Capítulo 2
        // Adicione mais conforme necessário
    };

    const capitulosDropdown = document.getElementById("capitulos");
    const exerciciosDropdown = document.getElementById("exercicios");

    // Adiciona as opções de capítulos ao carregar a página
    Object.keys(capitulos).forEach(function(numero) {
        const option = document.createElement("option");
        option.value = numero;
        option.text = numero;
        capitulosDropdown.appendChild(option);
    });

    // Função para atualizar os exercícios quando o capítulo é alterado
    function atualizarExercicios() {
        const capituloSelecionado = capitulosDropdown.value;
        const exercicios = capitulos[capituloSelecionado];

        // Limpa as opções anteriores
        exerciciosDropdown.innerHTML = "";

        // Adiciona as novas opções
        exercicios.forEach(function(numero) {
            const option = document.createElement("option");
            option.value = numero;
            option.text = numero;
            exerciciosDropdown.appendChild(option);
        });
    }

    // Atualiza os exercícios quando o capítulo é alterado
    capitulosDropdown.addEventListener("change", atualizarExercicios);

    // Atualiza os exercícios quando a página é carregada
    atualizarExercicios();
});

function mostrarResposta() {
    const capituloSelecionado = document.getElementById("capitulos").value;
    const exercicioSelecionado = document.getElementById("exercicios").value;

    // Aqui você pode implementar a lógica para buscar e exibir a resposta do exercício selecionado
    const resposta = buscarResposta(capituloSelecionado, exercicioSelecionado);

    const respostaDiv = document.getElementById("resposta");
    respostaDiv.textContent = "Resposta do Exercício " + exercicioSelecionado + " do Capítulo " + capituloSelecionado + ": " + resposta;
}

// Função de exemplo para buscar a resposta (substitua por sua própria lógica)
function buscarResposta(capitulo, exercicio) {
    // Aqui você pode ter um objeto, array ou outra estrutura de dados para armazenar as respostas
    // e retornar a resposta correspondente ao capítulo e exercício selecionados
    // Este é apenas um exemplo fictício
    const respostas = {
        "1": {
            "1": "Resposta do exercício 1 do capítulo 1",
            "2": "Resposta do exercício 2 do capítulo 1",
            "3": "Resposta do exercício 3 do capítulo 1"
        },
        "2": {
            "1": "Resposta do exercício 1 do capítulo 2",
            "2": "Resposta do exercício 2 do capítulo 2",
            "3": "Resposta do exercício 3 do capítulo 2"
        }
        // Adicione mais conforme necessário
    };

    return respostas[capitulo][exercicio];
}
