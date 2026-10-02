// =========================================
// NOTAQUANTO
// MÉDIA DO ENEM
// =========================================

function calcularMediaEnem() {

    const linguagens =
        document.getElementById("linguagens").value;

    const humanas =
        document.getElementById("humanas").value;

    const natureza =
        document.getElementById("natureza").value;

    const matematica =
        document.getElementById("matematica").value;

    const redacao =
        document.getElementById("redacao").value;

    const resultado =
        document.getElementById("resultado");


    // =========================================
    // VERIFICAR CAMPOS VAZIOS
    // =========================================

    if (
        linguagens === "" ||
        humanas === "" ||
        natureza === "" ||
        matematica === "" ||
        redacao === ""
    ) {

        resultado.innerHTML = `

            <div class="resultado aviso">

                <div class="resultado-icone">
                    ⚠️
                </div>

                <h2>
                    Faltou alguma nota!
                </h2>

                <p>
                    Preencha as cinco notas do ENEM
                    para calcular sua média.
                </p>

            </div>

        `;

        return;
    }


    // =========================================
    // TRANSFORMAR EM NÚMEROS
    // =========================================

    const notaLinguagens =
        Number(linguagens);

    const notaHumanas =
        Number(humanas);

    const notaNatureza =
        Number(natureza);

    const notaMatematica =
        Number(matematica);

    const notaRedacao =
        Number(redacao);


    // =========================================
    // VALIDAR NOTAS
    // =========================================

    if (
        notaLinguagens < 0 ||
        notaLinguagens > 1000 ||

        notaHumanas < 0 ||
        notaHumanas > 1000 ||

        notaNatureza < 0 ||
        notaNatureza > 1000 ||

        notaMatematica < 0 ||
        notaMatematica > 1000 ||

        notaRedacao < 0 ||
        notaRedacao > 1000
    ) {

        resultado.innerHTML = `

            <div class="resultado perigo">

                <div class="resultado-icone">
                    ❌
                </div>

                <h2>
                    Nota inválida!
                </h2>

                <p>
                    Cada nota precisa estar entre
                    0 e 1000 pontos.
                </p>

            </div>

        `;

        return;
    }


    // =========================================
    // CALCULAR MÉDIA
    // =========================================

    const media =
        (
            notaLinguagens +
            notaHumanas +
            notaNatureza +
            notaMatematica +
            notaRedacao
        ) / 5;


    const mediaFormatada =
        media.toFixed(2);


    // =========================================
    // RESULTADO
    // =========================================

    resultado.innerHTML = `

        <div class="resultado sucesso">

            <div class="resultado-icone">
                🎉
            </div>

            <h2>
                Sua média do ENEM foi
            </h2>

            <div class="media-final">
                ${mediaFormatada}
            </div>

            <p>
                Você teve uma média simples de
                <strong>
                    ${mediaFormatada}
                </strong>
                pontos considerando suas cinco notas.
            </p>

            <div class="info-box">

                📚 Linguagens:
                <strong>
                    ${notaLinguagens.toFixed(2)}
                </strong>

                <br>

                🌎 Ciências Humanas:
                <strong>
                    ${notaHumanas.toFixed(2)}
                </strong>

                <br>

                🧪 Ciências da Natureza:
                <strong>
                    ${notaNatureza.toFixed(2)}
                </strong>

                <br>

                ➗ Matemática:
                <strong>
                    ${notaMatematica.toFixed(2)}
                </strong>

                <br>

                ✍️ Redação:
                <strong>
                    ${notaRedacao.toFixed(2)}
                </strong>

            </div>

        </div>

    `;
}


// =========================================
// LIMPAR
// =========================================

function limpar() {

    document.getElementById("linguagens").value = "";

    document.getElementById("humanas").value = "";

    document.getElementById("natureza").value = "";

    document.getElementById("matematica").value = "";

    document.getElementById("redacao").value = "";

    document.getElementById("resultado").innerHTML = "";
}