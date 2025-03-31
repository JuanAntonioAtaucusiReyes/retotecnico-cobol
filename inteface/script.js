/*const fs = require('fs'); // libreria -libreria para manejar archivos del sistema
const path = require('path'); // libreia -libreria para manejar rutas de archivos
const csv = require('csv-parser'); // libreria -libreria para leer archivos csv

const filePath = path.join(__dirname, '../archivosCSV/transaccion.csv'); // ruta del archivo csv

let a = 'hola mundo';
console.log(filePath); // imprime la ruta del archivo csv*/

function cargarCSV() {
    let archivo = document.getElementById("archivoCSV").files[0];
    if (!archivo) {
        alert("Por favor, selecciona un archivo CSV.");
        return;
    }

    let lector = new FileReader();
    lector.readAsText(archivo);

    lector.onload = function(event) {
        let contenido = event.target.result;
        procesarCSV(contenido);
    };
}

function procesarCSV(data) {
    let lineas = data.split("\n").map(linea => linea.trim()).filter(linea => linea);
    let transacciones = [];
    
    for (let i = 1; i < lineas.length; i++) {
        let [id, tipo, monto] = lineas[i].split(",");
        transacciones.push({ id: parseInt(id), tipo: tipo.trim(), monto: parseFloat(monto) });
    }

    let balanceFinal = 0;
    let conteo = { Crédito: 0, Débito: 0 };
    let transaccionMayor = transacciones[0];

    transacciones.forEach(trans => {
        if (trans.tipo === "Crédito") {
            balanceFinal += trans.monto;
            conteo.Crédito++;
        } else {
            balanceFinal -= trans.monto;
            conteo.Débito++;
        }

        if (trans.monto > transaccionMayor.monto) {
            transaccionMayor = trans;
        }
    });

    document.getElementById("reporte").innerHTML = `
        <p><strong>Balance Final:</strong> ${balanceFinal.toFixed(2)}</p>
        <p><strong>Transacción de Mayor Monto:</strong> ID ${transaccionMayor.id} - ${transaccionMayor.monto.toFixed(2)}</p>
        <p><strong>Conteo de Transacciones:</strong> Crédito: ${conteo.Crédito} | Débito: ${conteo.Débito}</p>
    `;
}
