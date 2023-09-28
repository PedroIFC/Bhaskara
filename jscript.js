
function click_calcular() {

    let inputA = Number(document.getElementById('inputA').value);
    let inputB = Number(document.getElementById('inputB').value);
    let inputC = Number(document.getElementById('inputC').value);

    let delta = inputB * inputB - 4 * inputA * inputC;

    if (delta > 0) {
        let X1 = (-inputB + Math.sqrt(delta)) / (2 * inputA);
        let X2 = (-inputB - Math.sqrt(delta)) / (2 * inputA);

        document.getElementById('resposta').innerHTML = `X' = ${X1} <br>X" = ${X2}`;
    } else if (delta === 0) {
        let X1 = -inputB / (2 * inputA);
        document.getElementById('resposta').innerHTML = `X' = ${X1}`;
    } else {
        document.getElementById('resposta').innerHTML = 'A equação não possui raízes reais (Δ < 0)';
    }
}

function click_limpar() {


    document.getElementById(`inputA`).value = ``;
    document.getElementById(`inputB`).value = ``;
    document.getElementById(`inputC`).value = ``;
    document.getElementById(`resposta`).innerHTML = ``;

}