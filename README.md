# ExamenFrontEndML
Descargar el proyecto desde la siguiente URL
https://github.com/flaviodebenedetti/ExamenFrontEndML.git

Ejecutar desde consola el siguiente script para instalar todas las dependencias del proyecto
npm install

Una vez instaladas las dependecias ejecutar el siguiente script que levanta el servidor de node en el puerto 8080 y abre nuestro browser por defecto con la página principal
node server.js & gulp run

Para parar la aplicacion usar la combinación de teclas
Ctrl + c

Para liberar el puerto ejecutar el siguiente script
killall -9 node

# Pendiente
Hacer la carga dinámica de las imágenes de cada producto
También crear una tarea en gulp para compilar los archivos scss a css automáticamente al ejecutar el script antes mencionado. Actualmente en el directorio "/git/ExamenFrontEndML/public/testML/scss" ejecuto "$ node-sass -w style.scss ../style.css"
