import express from 'express';
import taskRoutes from './routes/task'; // Importamos nuestras rutas
import cors from 'cors';
import morgan from 'morgan';

import swaggerJSDocs from 'swagger-jsdoc'; // Dependencia para la documentación
import SwaggerUI from 'swagger-ui-express'; // Dependencia de Swagger UI
import { options } from './swaggerOptions'; // IMPORTAMOS LAS OPCIONES DE SWAGGER DESDE EL ARCHIVO SwaggerOptions


const specs = swaggerJSDocs(options); // SWAGGER SPECS


const app = express();

app.use(cors()); // Para que cualquier aplicación de backend pueda conectarse

app.use(morgan("dev")); // Para poder ver por consola todas las peticiones que van llegando

app.use(express.json()); // Para que podamos crear datos con un formato JSON

app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(specs)); // Configuración de nuestro SwaggerUI


app.use(taskRoutes); //Estamos utilizando nuestras rutas;

export default app;