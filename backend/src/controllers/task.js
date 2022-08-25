import { connect } from '../database'

    /**
     ** Aqui estamos creando toda lo lógica de nuestro backend
     ** Creamos todas las funciones de nuestras peticiones
     *! Tenemos que crear nuestras funciones de manera asíncrona para que funcionen nuestras peticiones
     *? Creamos toda la documentación dentro de Notion paso a paso para poder realizar de nuevo esto
     */


     // Esta es la función que contiene todo el listado de tareas
export const getTasks = async (req, res) => {

    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks");
    res.json(rows);
}

    // Aquí tenemos la función de la ruta a la task individual
export const getTask = async (req, res) => {

    const connection = await connect();
    const [rows] = await connection.query("SELECT * FROM tasks WHERE id = ?", [
        req.params.id,
    ]);

    res.json(rows[0]);
}

    // Aquí tenemos la función que contiene el contador de las tareas que tenemos
export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks");
    res.json(rows[0]["COUNT(*)"]);
}

    // Aquí esta la función que crea una nueva tarea
export const createTask = async (req, res) => {
    const connection = await connect();
    const [result] = await connection.query("INSERT INTO tasks(title, descriptions) VALUES(?,?)", [
        req.body.title,
        req.body.descriptions
    ])

    res.json({
        id: result.insertId,
        ...req.body,
    })
}

    // Esta es la función que elimina una tarea
export const deleteTask = async (req, res) => {
    const connection = await connect();
    await connection.query("DELETE FROM tasks WHERE id = ?", [
        req.params.id
    ]);
    
    res.sendStatus(204); // Esto es para indicar que no tiene que devolver nada
}

    // Esta es la función que actualiza una tarea
export const updateTask = async (req, res) => {
    const connection = await connect();
    const result = await connection.query("UPDATE tasks SET ? WHERE id = ?", [
        req.body,
        req.params.id
    ])

    res.sendStatus(204);

}
