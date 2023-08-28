// import dependencies
import { Router } from "express";

const router = Router();


router.get('/empleados', (req, res) => res.send('Viendo empleados'));
router.post('/empleados', (req, res) => res.send('Creando empleados'));
router.put('/empleados', (req, res) => res.send('actualizando empleados'));
router.delete('/empleados', (req, res) => res.send('Eliminando empleados'));




export default router;