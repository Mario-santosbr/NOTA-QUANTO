/// =========================================
// NOTAQUANTO
// CALCULADORA DE MÉDIA
// =========================================


function calcularMedia() {

    const mediaNecessaria =
        document.getElementById("mediaNecessaria").value;

    const nota1 =
        document.getElementById("nota1").value;

    const nota2 =
        document.getElementById("nota2").value;

    const nota3 =
        document.getElementById("nota3").value;

    const resultado =
        document.getElementById("resultado");


    // VERIFICAR CAMPOS VAZIOS

    if (
        mediaNecessaria === "" ||
        nota1 === "" ||
        nota2 === "" ||
        nota3 === ""
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
                    Preencha a média necessária e todas as notas.
                </p>

            </div>
        `;

        return;
    }


    // TRANSFORMAR EM NÚMEROS

    const mediaNecessariaNumero =
        Number(mediaNecessaria);

    const n1 = Number(nota1);
    const n2 = Number(nota2);
    const n3 = Number(nota3);


    // VALIDAR VALORES

    if (
        mediaNecessariaNumero < 0 ||
        mediaNecessariaNumero > 10 ||
        n1 < 0 || n1 > 10 ||
        n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10
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
                    A média e as notas precisam estar entre 0 e 10.
                </p>

            </div>
        `;

        return;
    }


    // CALCULAR MÉDIA

    const media =
        (n1 + n2 + n3) / 3;


    // CALCULAR DIFERENÇA

    const diferenca =
        mediaNecessariaNumero - media;


    const mediaFormatada =
        media.toFixed(2);


    const mediaNecessariaFormatada =
        mediaNecessariaNumero.toFixed(2);


    // =========================================
    // MÉDIA ALCANÇADA
    // =========================================

    if (media >= mediaNecessariaNumero) {

        resultado.innerHTML = `

            <div class="resultado sucesso">

                <div class="resultado-icone">
                    🎉
                </div>

                <h2>
                    Parabéns! Você alcançou sua média!
                </h2>

                <div class="media-final">
                    ${mediaFormatada}
                </div>

                <p>
                    Sua média é
                    <strong>${mediaFormatada}</strong>
                    e você precisava de
                    <strong>${mediaNecessariaFormatada}</strong>.
                </p>

                <div class="info-box">

                    🟢 Você está
                    <strong>
                        ${(media - mediaNecessariaNumero).toFixed(2)}
                    </strong>
                    ponto(s) acima da média necessária.

                </div>

            </div>

        `;

        return;
    }


    // =========================================
    // ABAIXO DA MÉDIA
    // =========================================

    let classe = "aviso";
    let icone = "⚠️";
    let titulo = "Você está perto!";


    if (diferenca >= 2) {

        classe = "perigo";
        icone = "📚";
        titulo = "Ainda falta um pouco!";

    }


    resultado.innerHTML = `

        <div class="resultado ${classe}">

            <div class="resultado-icone">
                ${icone}
            </div>

            <h2>
                ${titulo}
            </h2>

            <div class="media-final">
                ${mediaFormatada}
            </div>

            <p>
                Sua média atual é
                <strong>${mediaFormatada}</strong>.
            </p>

            <div class="info-box">

                🎯 Média necessária:
                <strong>
                    ${mediaNecessariaFormatada}
                </strong>

                <br><br>

                📉 Faltam
                <strong>
                    ${diferenca.toFixed(2)}
                </strong>
                ponto(s) para alcançar sua média.

            </div>

        </div>

    `;

}



// =========================================
// LIMPAR
// =========================================

function limpar() {

    document.getElementById("mediaNecessaria").value = "7";

    document.getElementById("nota1").value = "";

    document.getElementById("nota2").value = "";

    document.getElementById("nota3").value = "";

    document.getElementById("resultado").innerHTML = "";

}