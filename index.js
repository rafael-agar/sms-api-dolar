require('dotenv').config();

const axios = require('axios');
const twilio = require('twilio');
const cron = require('node-cron');

// Configura Twilio
const accountSid = process.env.TU_ACCOUNT_SID;
const authToken = process.env.TU_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Lista de números de teléfono a los que se enviará el mensaje SMS
const phoneNumbers = [process.env.NUMERO_DESTINO_1];

// Función para obtener el valor del dólar desde la API y enviar un mensaje SMS a varios números de teléfono
async function sendDolarValue() {
  try {
    const response = await axios.get('https://api-dolar-vzla.vercel.app/dolar-venezuela');
    const dolarValue = response.data.price;

    // Envía un mensaje SMS con el valor del dólar a cada número de teléfono en la lista
    for (const phoneNumber of phoneNumbers) {
      const message = await client.messages.create({
        body: `El valor del dólar en Venezuela es: ${dolarValue}`,
        from: process.env.TU_NUMERO_DE_TWILIO,
        to: phoneNumber
      });
      console.log(message.sid);
    }
  } catch (error) {
    console.error(error);
  }
}

sendDolarValue()

// Programa la tarea cron para que se ejecute de lunes a viernes a las 5 PM
// cron.schedule('0 17 * * 1-5', sendDolarValue);
cron.schedule('14 30 * * 1-5', sendDolarValue);
