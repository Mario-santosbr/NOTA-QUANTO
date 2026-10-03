function calcularFaltas() {

    const totalAulas = document.getElementById("totalAulas").value;
    const faltasAtuais = document.getElementById("faltasAtuais").value;
    const percentualMaximo = document.getElementById("percentualMaximo").value;

    const resultado = document.getElementById("resultado");

    // Verifica se todos os campos foram preenchidos
    if (
        totalAulas === "" ||
        faltasAtuais === "" ||
        percentualMaximo === ""
    ) {

        resultado.innerHTML = `
            <div class="resultado aviso">

                <div class="resultado-icone">⚠️</div>

                <h2>Faltou alguma informação!</h2>

                <p>
                    Preencha o total de aulas,
                    suas faltas atuais e o limite de faltas.
                </p>

            </div>
        `;

        return;
    }


    const total = Number(totalAulas);
    const faltas = Number(faltasAtuais);
    const limite = Number(percentualMaximo);


    // Validação dos valores
    if (
        total <= 0 ||
        faltas < 0 ||
        limite <= 0 ||
        limite > 100
    ) {

        resultado.innerHTML = `
            <div class="resultado perigo">

                <div class="resultado-icone">❌</div>

                <h2>Valores inválidos!</h2>

                <p>
                    O total de aulas precisa ser maior que 0,
                    as faltas não podem ser negativas e o limite
                    precisa estar entre 0,1% e 100%.
                </p>

            </div>
        `;

        return;
    }


    // Não permite mais faltas do que o total de aulas
    if (faltas > total) {

        resultado.innerHTML = `
            <div class="resultado perigo">

                <div class="resultado-icone">❌</div>

                <h2>Confira suas faltas!</h2>

                <p>
                    O número de faltas não pode ser maior
                    que o total de aulas.
                </p>

            </div>
        `;

        return;
    }


    // Calcula o limite máximo de faltas
    const limiteExato = total * (limite / 100);

    // Como não existe "meia falta", usamos o número inteiro
    // mais seguro para o aluno.
    const maxFaltas = Math.floor(limiteExato);


    // Calcula quantas faltas ainda podem ser feitas
    const faltasRestantes = maxFaltas - faltas;


    // Calcula percentual atual
    const percentualAtual = (faltas / total) * 100;


    // Calcula percentual de aulas frequentadas
    const percentualPresenca = 100 - percentualAtual;


    const percentualAtualFormatado = percentualAtual.toFixed(2);
    const percentualPresencaFormatado = percentualPresenca.toFixed(2);


    /*
        SITUAÇÃO 1
        O aluno já ultrapassou o limite.
    */

    if (percentualAtual > limite) {

        resultado.innerHTML = `
            <div class="resultado perigo">

                <div class="resultado-icone">🚨</div>

                <h2>Você ultrapassou o limite!</h2>

                <div class="numero-principal">
                    ${percentualAtualFormatado}%
                </div>

                <p>
                    Seu percentual atual de faltas é
                    <strong>${percentualAtualFormatado}%</strong>.
                </p>

                <div class="info-box">

                    🎯 Limite informado:
                    <strong>${limite.toFixed(2)}%</strong>

                    <br><br>

                    ❌ Faltas atuais:
                    <strong>${faltas}</strong>

                    <br><br>

                    📚 Total de aulas:
                    <strong>${total}</strong>

                </div>

            </div>
        `;

        return;
    }


    /*
        SITUAÇÃO 2
        O aluno atingiu exatamente o limite.
    */

    if (faltasRestantes === 0) {

        resultado.innerHTML = `
            <div class="resultado aviso">

                <div class="resultado-icone">⚠️</div>

                <h2>Você atingiu seu limite de faltas!</h2>

                <div class="numero-principal">
                    0
                </div>

                <p>
                    Você não tem mais faltas disponíveis
                    dentro do limite informado.
                </p>

                <div class="barra-container">

                    <div
                        class="barra vermelha"
                        style="width: ${Math.min((percentualAtual / limite) * 100, 100)}%;"
                    ></div>

                </div>

                <div class="info-box">

                    📊 Seu percentual atual:
                    <strong>${percentualAtualFormatado}%</strong>

                    <br><br>

                    🎯 Limite:
                    <strong>${limite.toFixed(2)}%</strong>

                    <br><br>

                    📚 Faltas:
                    <strong>${faltas}</strong> de
                    <strong>${total}</strong>

                </div>

            </div>
        `;

        return;
    }


    /*
        SITUAÇÃO 3
        O aluno ainda pode faltar.

        Se estiver próximo do limite, mostramos aviso.
    */

    const percentualDoLimite =
        (percentualAtual / limite) * 100;


    let classe = "sucesso";
    let icone = "🎉";
    let titulo = "Você ainda pode faltar!";

    let classeBarra = "verde";


    if (percentualDoLimite >= 80) {

        classe = "aviso";
        icone = "⚠️";
        titulo = "Cuidado com as faltas!";

        classeBarra = "amarela";

    }


    resultado.innerHTML = `
        <div class="resultado ${classe}">

            <div class="resultado-icone">
                ${icone}
            </div>

            <h2>
                ${titulo}
            </h2>

            <div class="numero-principal">
                ${faltasRestantes}
            </div>

            <p>
                Você ainda pode ter
                <strong>${faltasRestantes} falta(s)</strong>
                sem ultrapassar o limite informado.
            </p>


            <div class="barra-container">

                <div
                    class="barra ${classeBarra}"
                    style="width: ${Math.min(percentualDoLimite, 100)}%;"
                ></div>

            </div>


            <div class="info-box">

                📊 Percentual atual:
                <strong>${percentualAtualFormatado}%</strong>

                <br><br>

                🎯 Limite de faltas:
                <strong>${limite.toFixed(2)}%</strong>

                <br><br>

                ❌ Faltas atuais:
                <strong>${faltas}</strong>

                <br><br>

                📚 Máximo de faltas permitido:
                <strong>${maxFaltas}</strong>

                <br><br>

                ✅ Presença atual:
                <strong>${percentualPresencaFormatado}%</strong>

            </div>

        </div>
    `;
}


function limpar() {

    document.getElementById("totalAulas").value = "";

    document.getElementById("faltasAtuais").value = "";

    document.getElementById("percentualMaximo").value = "25";

    document.getElementById("resultado").innerHTML = "";
}