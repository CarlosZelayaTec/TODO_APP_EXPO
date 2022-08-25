import { Router } from "express";
import {
  getTasks,
  getTask,
  getTaskCount,
  createTask,
  deleteTask,
  updateTask,
} from "../controllers/task"; //Importando todas las funciones controladoras de nuestras rutas

const router = Router();


router.get("/task", getTasks); //Creando la ruta Task y pasandole la función que creamos.

router.get("/task/count", getTaskCount);

router.get("/task/:id", getTask);

router.post("/task", createTask);

router.delete("/task/:id", deleteTask);

router.put("/task/:id", updateTask);

export default router;
