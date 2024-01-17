function calcularLitros(){
    let elementoKm = document.getElementById('km');
    let textoKm = elementoKm.value;
    let cantKm = Number(textoKm);



    let cantLitros = cantKm / 0.2;


    let resultado = document.getElementById('textoResultado');
    resultado.textContent = "Carga " + Math.cell(cantLitros) + " litros de combustible";
}