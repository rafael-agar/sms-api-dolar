# Aplicación de Node.js para enviar mensajes SMS con el valor del dólar en Venezuela

Esta es una aplicación de Node.js que utiliza la API de Twilio para enviar mensajes SMS con el valor del dólar en Venezuela a una lista de números de teléfono. La aplicación se ejecuta automáticamente todos los días de lunes a viernes a las 5 PM.

## Requisitos

* Node.js (versión 12 o superior)
* Una cuenta de Twilio (https://www.twilio.com/)

## Configuración

1. Clona este repositorio en tu computadora:

git clone https://github.com/tu-usuario/tu-repositorio.git


2. Instala las dependencias del proyecto:

cd tu-repositorio
npm install


3. Crea un archivo `.env` en la raíz del proyecto y agrega tus variables de entorno. Por ejemplo:

TU_ACCOUNT_SID=ACa**************
TU_AUTH_TOKEN=cf103***************
NUMERO_DESTINO_1=+58424*********
TU_NUMERO_DE_TWILIO=+12*******


4. Ejecuta la aplicación:

node index.js


La aplicación se ejecutará automáticamente los días que hayas configurado node-cron y enviará un mensaje SMS con el valor del dólar en Venezuela al número de teléfono que especificaste en la variable `NUMERO_DESTINO_1`.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
