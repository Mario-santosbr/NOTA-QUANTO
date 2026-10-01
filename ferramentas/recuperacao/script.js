// =========================================
// NOTAQUANTO
// CALCULADORA DE RECUPERAÇÃO
// =========================================


// =========================================
// ELEMENTOS DA PÁGINA
// =========================================

const tipoRecuperacao =
    document.getElementById("tipoRecuperacao");

const camposPrincipais =
    document.getElementById("camposPrincipais");

const camposPesos =
    document.getElementById("camposPesos");

const explicacaoRegra =
    document.getElementById("explicacaoRegra");


// =========================================
// QUANDO O ALUNO ESCOLHE A REGRA
// =========================================

tipoRecuperacao.addEventListener("change", function () {

    const tipo = tipoRecuperacao.value;


    // =========================================
    // NENHUMA OPÇÃO
    // =========================================

    if (tipo === "") {

        camposPrincipais.classList.remove("ativo");

        camposPesos.classList.remove("ativo");

        explicacaoRegra.innerHTML = "";

        return;
    }


    // =========================================
    // MOSTRAR CAMPOS
    // =========================================

    camposPrincipais.classList.add("ativo");


    // =========================================
    // MOSTRAR PESOS
    // =========================================

    if (tipo === "pesos") {

        camposPesos.classList.add("ativo");

    } else {

        camposPesos.classList.remove("ativo");

    }


    // =========================================
    // REGRA 1 — MÉDIA
    // =========================================

    if (tipo === "media") {

        explicacaoRegra.innerHTML = `

            <div class="explicacao-regra-titulo">
                📚 Como essa regra funciona?
            </div>

            <p>
                A sua média atual e a nota da recuperação
                são somadas e depois divididas por 2.
            </p>

            <div class="formula">
                (Média atual + Recuperação) ÷ 2
            </div>

            <p>
                <strong>Exemplo:</strong>
                se sua média atual for 5,0 e você precisar
                chegar a 7,0:
            </p>

            <div class="formula">
                (5 + X) ÷ 2 = 7
            </div>

            <p>
                Nesse exemplo, a nota necessária seria
                <strong>9,0</strong>.
            </p>

        `;

    }


    // =========================================
    // REGRA 2 — PESOS
    // =========================================

    if (tipo === "pesos") {

        explicacaoRegra.innerHTML = `

            <div class="explicacao-regra-titulo">
                ⚖️ Como essa regra funciona?
            </div>

            <p>
                A sua média atual e a recuperação
                possuem pesos diferentes.
            </p>

            <p>
                Quanto maior o peso de uma nota,
                maior será a influência dela no
                resultado final.
            </p>

            <div class="formula">
                ((Média × peso) + (Recuperação × peso))
                ÷ soma dos pesos
            </div>

            <p>
                <strong>Exemplo:</strong>
                média 5,0, peso da média 6,
                recuperação com peso 4 e objetivo 7,0:
            </p>

            <div class="formula">
                ((5 × 6) + (X × 4)) ÷ 10 = 7
            </div>

            <p>
                Nesse exemplo, você precisaria tirar
                <strong>10,0</strong>.
            </p>

        `;

    }


    // =========================================
    // REGRA 3 — SUBSTITUIÇÃO
    // =========================================

    if (tipo === "substitui") {

        explicacaoRegra.innerHTML = `

            <div class="explicacao-regra-titulo">
                🔄 Como essa regra funciona?
            </div>

            <p>
                A nota da recuperação entra no lugar
                da média anterior.
            </p>

            <p>
                Por isso, a nota que você precisa tirar
                corresponde diretamente à média que
                deseja alcançar.
            </p>

            <div class="formula">
                Recuperação = Média necessária
            </div>

            <p>
                <strong>Exemplo:</strong>
                se você precisa de 7,0 para passar:
            </p>

            <div class="formula">
                Recuperação = 7
            </div>

            <p>
                Nesse exemplo, você precisaria tirar
                <strong>7,0</strong>.
            </p>

        `;

    }

});


// =========================================
// CALCULAR RECUPERAÇÃO
// =========================================

function calcularRecuperacao() {

    const tipo =
        tipoRecuperacao.value;


    const campoMediaNecessaria =
        document.getElementById("mediaNecessaria").value;

    const campoMediaAtual =
        document.getElementById("mediaAtual").value;


    const resultado =
        document.getElementById("resultado");


    // =========================================
    // VERIFICAR REGRA
    // =========================================

    if (tipo === "") {

        resultado.innerHTML = `

            <div class="resultado aviso">

                <div class="resultado-icone">
                    ⚠️
                </div>

                <h2>
                    Escolha a regra da sua escola!
                </h2>

                <p>
                    Primeiro selecione como sua escola
                    calcula a recuperação.
                </p>

            </div>

        `;

        return;
    }


    // =========================================
    // VERIFICAR CAMPOS
    // =========================================

    if (
        campoMediaNecessaria === "" ||
        campoMediaAtual === ""
    ) {

        resultado.innerHTML = `

            <div class="resultado aviso">

                <div class="resultado-icone">
                    ⚠️
                </div>

                <h2>
                    Faltou alguma informação!
                </h2>

                <p>
                    Preencha sua média atual e
                    a média necessária para passar.
                </p>

            </div>

        `;

        return;
    }


    // =========================================
    // TRANSFORMAR EM NÚMEROS
    // =========================================

    const mediaNecessaria =
        Number(campoMediaNecessaria);

    const mediaAtual =
        Number(campoMediaAtual);


    const pesoMedia =
        Number(
            document.getElementById("pesoMedia").value
        );

    const pesoRecuperacao =
        Number(
            document.getElementById("pesoRecuperacao").value
        );


    // =========================================
    // VALIDAR MÉDIAS
    // =========================================

    if (
        mediaNecessaria < 0 ||
        mediaNecessaria > 10 ||
        mediaAtual < 0 ||
        mediaAtual > 10
    ) {

        resultado.innerHTML = `

            <div class="resultado perigo">

                <div class="resultado-icone">
                    ❌
                </div>

                <h2>
                    Valor inválido!
                </h2>

                <p>
                    As médias precisam estar entre
                    0 e 10.
                </p>

            </div>

        `;

        return;
    }


    // =========================================
    // SE JÁ ALCANÇOU A MÉDIA
    // =========================================

    if (mediaAtual >= mediaNecessaria) {

        resultado.innerHTML = `

            <div class="resultado sucesso">

                <div class="resultado-icone">
                    🎉
                </div>

                <h2>
                    Você já alcançou sua média!
                </h2>

                <div class="nota-recuperacao">
                    0,00
                </div>

                <p>
                    Sua média atual é
                    <strong>
                        ${mediaAtual.toFixed(2)}
                    </strong>
                    e a média necessária é
                    <strong>
                        ${mediaNecessaria.toFixed(2)}
                    </strong>.
                </p>

                <div class="info-box">

                    🟢 Pela média informada,
                    você já atingiu a média necessária.

                </div>

            </div>

        `;

        return;
    }


    // =========================================
    // CALCULAR NOTA
    // =========================================

    let notaRecuperacao;


    // =========================================
    // REGRA 1 — MÉDIA
    // =========================================

    if (tipo === "media") {

        notaRecuperacao =
            (mediaNecessaria * 2) -
            mediaAtual;

    }


    // =========================================
    // REGRA 2 — PESOS
    // =========================================

    if (tipo === "pesos") {

        const campoPesoMedia =
            document.getElementById("pesoMedia").value;

        const campoPesoRecuperacao =
            document.getElementById("pesoRecuperacao").value;


        if (
            campoPesoMedia === "" ||
            campoPesoRecuperacao === ""
        ) {

            resultado.innerHTML = `

                <div class="resultado aviso">

                    <div class="resultado-icone">
                        ⚠️
                    </div>

                    <h2>
                        Informe os pesos!
                    </h2>

                    <p>
                        Digite o peso da média e
                        o peso da recuperação.
                    </p>

                </div>

            `;

            return;
        }


        if (
            pesoMedia <= 0 ||
            pesoRecuperacao <= 0
        ) {

            resultado.innerHTML = `

                <div class="resultado perigo">

                    <div class="resultado-icone">
                        ❌
                    </div>

                    <h2>
                        Peso inválido!
                    </h2>

                    <p>
                        Os pesos precisam ser maiores
                        que zero.
                    </p>

                </div>

            `;

            return;
        }


        notaRecuperacao =
            (
                mediaNecessaria *
                (pesoMedia + pesoRecuperacao)
                -
                mediaAtual * pesoMedia
            )
            /
            pesoRecuperacao;

    }


    // =========================================
    // REGRA 3 — SUBSTITUIÇÃO
    // =========================================

    if (tipo === "substitui") {

        notaRecuperacao =
            mediaNecessaria;

    }


    // =========================================
    // NOTA IMPOSSÍVEL
    // =========================================

    if (notaRecuperacao > 10) {

        resultado.innerHTML = `

            <div class="resultado perigo">

                <div class="resultado-icone">
                    😭
                </div>

                <h2>
                    A nota necessária passa de 10!
                </h2>

                <div class="nota-recuperacao">
                    ${notaRecuperacao.toFixed(2)}
                </div>

                <p>
                    Pela fórmula escolhida,
                    você precisaria tirar
                    <strong>
                        ${notaRecuperacao.toFixed(2)}
                    </strong>.
                </p>

                <div class="info-box">

                    🔴 Como a nota máxima considerada
                    é 10, essa média não pode ser
                    alcançada por essa fórmula.

                </div>

            </div>

        `;

        return;
    }


    // =========================================
    // RESULTADO NORMAL
    // =========================================

    let classe = "aviso";

    let icone = "📚";

    let titulo = "Você consegue!";


    if (notaRecuperacao <= 5) {

        classe = "sucesso";

        icone = "🟢";

        titulo = "Dá pra buscar!";

    } else if (notaRecuperacao <= 8) {

        classe = "aviso";

        icone = "🟡";

        titulo = "Vai precisar estudar!";

    } else {

        classe = "perigo";

        icone = "🔴";

        titulo = "Vai ser bem puxado!";

    }


    // =========================================
    // EXPLICAÇÃO DA FÓRMULA NO RESULTADO
    // =========================================

    let explicacaoFormula = "";


    if (tipo === "media") {

        explicacaoFormula =
            "(Média atual + Recuperação) ÷ 2";

    }


    if (tipo === "pesos") {

        explicacaoFormula =
            `((Média × ${pesoMedia}) +
            (Recuperação × ${pesoRecuperacao}))
            ÷ (${pesoMedia} + ${pesoRecuperacao})`;

    }


    if (tipo === "substitui") {

        explicacaoFormula =
            "A recuperação substitui a média anterior";

    }


    // =========================================
    // MOSTRAR RESULTADO
    // =========================================

    resultado.innerHTML = `

        <div class="resultado ${classe}">

            <div class="resultado-icone">
                ${icone}
            </div>

            <h2>
                ${titulo}
            </h2>

            <div class="nota-recuperacao">
                ${notaRecuperacao.toFixed(2)}
            </div>

            <p>
                Você precisa tirar
                <strong>
                    ${notaRecuperacao.toFixed(2)}
                </strong>
                na recuperação.
            </p>

            <div class="info-box">

                🎯 Média necessária:
                <strong>
                    ${mediaNecessaria.toFixed(2)}
                </strong>

                <br>

                📊 Sua média atual:
                <strong>
                    ${mediaAtual.toFixed(2)}
                </strong>

                <br><br>

                📖 Fórmula utilizada:

                <br>

                <strong>
                    ${explicacaoFormula}
                </strong>

            </div>

        </div>

    `;

}


// =========================================
// LIMPAR
// =========================================

function limpar() {

    tipoRecuperacao.value = "";

    document
        .getElementById("mediaNecessaria")
        .value = "7";

    document
        .getElementById("mediaAtual")
        .value = "";

    document
        .getElementById("pesoMedia")
        .value = "6";

    document
        .getElementById("pesoRecuperacao")
        .value = "4";


    camposPrincipais.classList.remove("ativo");

    camposPesos.classList.remove("ativo");

    explicacaoRegra.innerHTML = "";

    document
        .getElementById("resultado")
        .innerHTML = "";
}