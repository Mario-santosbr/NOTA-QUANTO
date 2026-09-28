function calcular() {

    const mediaCampo =
        document.getElementById("mediaNecessaria");

    const nota1Campo =
        document.getElementById("nota1");

    const nota2Campo =
        document.getElementById("nota2");

    const resultado =
        document.getElementById("resultado");


    const mediaNecessaria =
        Number(mediaCampo.value);

    const nota1 =
        Number(nota1Campo.value);

    const nota2 =
        Number(nota2Campo.value);


    // CAMPOS VAZIOS

    if (
        mediaCampo.value === "" ||
        nota1Campo.value === "" ||
        nota2Campo.value === ""
    ) {

        resultado.className = "resultado aviso";

        resultado.innerHTML = `
            <div class="resultado-icone">
                ⚠️
            </div>

            <strong>
                Faltou alguma coisa!
            </strong>

            <span>
                Preencha todos os campos para calcular.
            </span>
        `;

        return;
    }


    // VALIDAR MÉDIA

    if (
        mediaNecessaria < 0 ||
        mediaNecessaria > 10
    ) {

        resultado.className = "resultado perigo";

        resultado.innerHTML = `
            <div class="resultado-icone">
                ❌
            </div>

            <strong>
                Média inválida!
            </strong>

            <span>
                A média precisa estar entre 0 e 10.
            </span>
        `;

        return;
    }


    // VALIDAR NOTAS

    if (
        nota1 < 0 ||
        nota1 > 10 ||
        nota2 < 0 ||
        nota2 > 10
    ) {

        resultado.className = "resultado perigo";

        resultado.innerHTML = `
            <div class="resultado-icone">
                ❌
            </div>

            <strong>
                Nota inválida!
            </strong>

            <span>
                As notas precisam estar entre 0 e 10.
            </span>
        `;

        return;
    }


    // CALCULAR NOTA NECESSÁRIA

    const notaNecessaria =
        (mediaNecessaria * 3) - nota1 - nota2;


    // MÉDIA ATUAL

    const mediaAtual =
        (nota1 + nota2) / 2;


    // PROGRESSO

    let progresso =
        (mediaAtual / mediaNecessaria) * 100;

    progresso =
        Math.max(0, Math.min(100, progresso));


    // JÁ ATINGIU

    if (notaNecessaria <= 0) {

        resultado.className = "resultado sucesso";

        resultado.innerHTML = `

            <div class="resultado-icone">
                🎉
            </div>

            <strong>
                Você já atingiu a média!
            </strong>

            <span>
                Sua média das notas atuais é
                <b>${mediaAtual.toFixed(1)}</b>.
            </span>


            <div class="resultado-info">

                <div class="info-box">

                    <small>
                        Média atual
                    </small>

                    <strong>
                        ${mediaAtual.toFixed(1)}
                    </strong>

                </div>


                <div class="info-box">

                    <small>
                        Meta
                    </small>

                    <strong>
                        ${mediaNecessaria.toFixed(1)}
                    </strong>

                </div>

            </div>

        `;

        return;
    }


    // IMPOSSÍVEL

    if (notaNecessaria > 10) {

        resultado.className = "resultado perigo";

        resultado.innerHTML = `

            <div class="resultado-icone">
                😭
            </div>

            <strong>
                Essa vai ser difícil...
            </strong>

            <span>
                Você precisaria tirar
                <b>${notaNecessaria.toFixed(1)}</b>.
            </span>

            <span>
                Essa nota passa do limite máximo de 10.
            </span>

        `;

        return;
    }


    // SITUAÇÃO TRANQUILA

    if (notaNecessaria <= 5) {

        resultado.className = "resultado sucesso";

        resultado.innerHTML = `

            <div class="resultado-icone">
                🟢
            </div>

            <strong>
                Você está bem!
            </strong>

            <span>
                Você precisa tirar
                <b>${notaNecessaria.toFixed(1)}</b>
                na próxima prova.
            </span>

            <span>
                Está em uma situação tranquila. 🚀
            </span>

            ${criarInformacoes(
                mediaAtual,
                mediaNecessaria,
                progresso
            )}

        `;

        return;
    }


    // ATENÇÃO

    if (notaNecessaria <= 8) {

        resultado.className = "resultado aviso";

        resultado.innerHTML = `

            <div class="resultado-icone">
                🟡
            </div>

            <strong>
                Hora de estudar!
            </strong>

            <span>
                Você precisa tirar
                <b>${notaNecessaria.toFixed(1)}</b>
                na próxima prova.
            </span>

            <span>
                Dá para conseguir. Foco! 💪
            </span>

            ${criarInformacoes(
                mediaAtual,
                mediaNecessaria,
                progresso
            )}

        `;

        return;
    }


    // DIFÍCIL

    resultado.className = "resultado perigo";

    resultado.innerHTML = `

        <div class="resultado-icone">
            🔴
        </div>

        <strong>
            Vai precisar se esforçar!
        </strong>

        <span>
            Você precisa tirar
            <b>${notaNecessaria.toFixed(1)}</b>
            na próxima prova.
        </span>

        <span>
            Comece a estudar o quanto antes. 📚
        </span>

        ${criarInformacoes(
            mediaAtual,
            mediaNecessaria,
            progresso
        )}

    `;

}


/* =========================================
   INFORMAÇÕES EXTRAS
========================================= */

function criarInformacoes(
    mediaAtual,
    mediaNecessaria,
    progresso
) {

    return `

        <div class="resultado-info">

            <div class="info-box">

                <small>
                    Média atual
                </small>

                <strong>
                    ${mediaAtual.toFixed(1)}
                </strong>

            </div>


            <div class="info-box">

                <small>
                    Média necessária
                </small>

                <strong>
                    ${mediaNecessaria.toFixed(1)}
                </strong>

            </div>

        </div>


        <div class="barra-container">

            <div class="barra-texto">

                <span>
                    Progresso
                </span>

                <span>
                    ${Math.round(progresso)}%
                </span>

            </div>


            <div class="barra">

                <div
                    class="barra-progresso"
                    style="width: ${progresso}%"
                ></div>

            </div>

        </div>

    `;
}


/* =========================================
   LIMPAR
========================================= */

function limpar() {

    document.getElementById("nota1").value = "";

    document.getElementById("nota2").value = "";

    document.getElementById("resultado").innerHTML = "";

    document.getElementById("resultado").className = "";

    document.getElementById("nota1").focus();

}