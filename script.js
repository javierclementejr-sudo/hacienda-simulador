const button = document.querySelector('#btnCalcular');
const input = document.querySelector('#salarioBruto');
const resultado = document.querySelector('#resultado');

button.addEventListener('click', function() {
    const sueldoBruto = Number(input.value);
    let retencion = 0;
    let salarioFinal = 0;
    let porcentaje = "";

    if(sueldoBruto > 30000) {
        porcentaje = '20%';
        retencion = sueldoBruto * 0.2;
        salarioFinal = sueldoBruto - retencion;
    } else {
        porcentaje = '15%';
        retencion = sueldoBruto * 0.15;
        salarioFinal = sueldoBruto - retencion;
    }
    resultado.classList.remove('hidden');
    resultado.innerHTML = `
        <p>Tu sueldo neto mensual es: ${salarioFinal}€</p>
        <p>Retención aplicada: ${porcentaje} (${retencion}€)</p>
    `;

    if (porcentaje === '20%') {
        resultado.style.color = 'red';
    } else {
        resultado.style.color = 'green';
    }
});
