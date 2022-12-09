const winston = require("winston");

//create loger instancia el logger con la conf
const logger = winston.createLogger({
    //Pinta los error logs en un fichero
    transports: [
        new winston.transports.File({ filename: 'logs/log-file.log' }),
        new winston.transports.Console()
    ],
    //Define el formato de salida de los logs
    format: winston.format.combine(
        winston.format.timestamp(), winston.format.json()
    ),
    exitOnError: false,
});


logger.stream = {
    write: function(message, encoding) {
        logger.info(message);
    }
}
module.exports = logger;