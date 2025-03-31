# retotecnico-cobol
## Introducción:
Este reto consiste en una lectura de una archivo CSV
Balance Final:
Suma de los montos de las transacciones de tipo "Crédito" menos la suma de los montos de las transacciones de tipo "Débito".
Transacción de Mayor Monto:
Identificar el ID y el monto de la transacción con el valor más alto.
Conteo de Transacciones:
Número total de transacciones para cada tipo ("Crédito" y "Débito").

como ejemplo:
id,tipo,monto
1,Crédito,100.00
2,Débito,50.00
3,Crédito,200.00
4,Débito,75.00
5,Crédito,150.00

Resulatdo:
Reporte de Transacciones
---------------------------------------------
Balance Final: 325.00
Transacción de Mayor Monto: ID 3 - 200.00
Conteo de Transacciones: Crédito: 3 Débito: 2

 
## Instrucciones de Ejecución:
dependencias necesarias 
npm init -y
npm install csv-parser
instalar desde la terminal en la carpeta donde estara el proyecto.

para ejecutar el proyecto solo tienes que abrir el archivo index.html en tu navegador.

## Enfoque y Solución:
toda la logica ocurre desde el archivo script.js
1.Cargar y leer el archivo CSV

Se obtiene el archivo seleccionado en <input type="file">.
Si no hay archivo, se muestra una alerta.
Se usa FileReader para leer el archivo como texto.
Cuando se termina de leer, se envía el contenido a procesarCSV().

2.Procesar el contenido del CSV

Se divide el archivo en líneas y se eliminan espacios en blanco.
Se ignora la primera línea (cabecera) y se extraen los datos de cada transacción (ID, tipo y monto).
Se almacenan las transacciones en un arreglo.

3.Calcular el balance y estadísticas

Se inicializan variables para el balance total, el conteo de créditos/débitos y la transacción de mayor monto.
Se recorre el arreglo de transacciones:
    Si es Crédito, se suma al balance y se cuenta.
    Si es Débito, se resta del balance y se cuenta.
    Se identifica la transacción con el mayor monto.

4.Mostrar el reporte en la página

Se inserta en el HTML el balance final, la mayor transacción y el conteo de Créditos/Débitos.

## Estructura del Proyecto:
📦 Proyecto
│── 📁 archivosDocument    # Carpeta que contendrá los archivos CSV

│── 📁 interface           # Carpeta con los archivos principales

│   ├── index.html        # Estructura de la página

│   ├── styles.css        # Estilos personalizados

│   ├── script.js         # Lógica del programa

│── 📁 node_modules        # Carpeta generada por las dependencias (si se usan)

