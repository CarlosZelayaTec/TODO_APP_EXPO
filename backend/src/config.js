import { config as dotenv } from 'dotenv';
dotenv();

export const config = {
    host: process.env.DB_HOST || 'localhost', // Hacemos esto en dado caso que no exista las variables de entorno
    port: process.env.DB_PORT || 3000, // Sería como el valor por defecto en la situación que no esté escpecificado
    user: process.env.DB_USER || 'root', // el valor de cada una de las variables de entorno
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || test,
}