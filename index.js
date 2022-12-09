const express = require('express')

//Logs en ficheros y en consola, tambien colores en log
const colors = require('colors')
const morgan = require('morgan')
const logger = require('winston')

//para coger datos del body
const bodyParser = require('body-parser')

//Cuando subamos el proyecto a railway, para que no de problemas de cors
const cors = require('cors')

const router = require('./router')
const { JsonWebTokenError } = require('jsonwebtoken')


const app = express()

//CORS configuracion
const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}

//Middlewares
app.use(morgan('combined', { "stream": logger.stream.write}));
app.use(express.json())
app.use(cors(corsOptions))

//Rutas
app.get('/', (req, res) => { res.send("hola mundo") })
app.use(router)


app.listen(process.env.PORT || 3000, ()=> console.log(`listening on port ${process.env.PORT || 3000}`.bgGreen.black))




/* TODO */

// - Sistema de usuario con crypt y JsonWebToken
// - deploy en railway

