function cargarCSV() {
    let archivo = document.getElementById("archivoCSV").files[0]; // Obtener el archivo seleccionado
    if (!archivo) {
        alert("Por favor, selecciona un archivo CSV.");
        return;
    }

    let lector = new FileReader(); // Crear un lector de archivos
    lector.readAsText(archivo); // Leer el archivo como texto

    lector.onload = function(event) {
        procesarCSV(event.target.result); // Llamar a la función para procesar los datos
    };
}

function procesarCSV(data) {
    let lineas = data.split("\n").slice(1); // Dividir el texto en líneas y quitar la cabecera
    let balance = 0, credito = 0, debito = 0, mayorMonto = 0, idMayor = 0;

    lineas.forEach(linea => {
        let partes = linea.split(","); // Separar los valores por coma
        let tipo = partes[1].trim(); // Obtener el tipo de transacción (Crédito o Débito)
        let monto = parseFloat(partes[2]); // Convertir el monto a número

        if (tipo === "Crédito") {
            balance += monto;
            credito++;
        } else if (tipo === "Débito") {
            balance -= monto;
            debito++;
        }

        if (monto > mayorMonto) {
            mayorMonto = monto;
            idMayor = partes[0]; // Guardar el ID de la transacción con mayor monto
        }
    });

    // Mostrar los resultados en la página
    document.getElementById("reporte").innerHTML = `
        <p><strong>Balance Final:</strong> ${balance.toFixed(2)}</p>
        <p><strong>Transacción de Mayor Monto:</strong> ID ${idMayor} - ${mayorMonto.toFixed(2)}</p>
        <p><strong>Conteo de Transacciones:</strong> Crédito: ${credito} | Débito: ${debito}</p>
    `;
}
