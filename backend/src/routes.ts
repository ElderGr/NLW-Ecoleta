import express from "express";

import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router();
const pointsController = new PointsController(); 
const itemsController = new ItemsController(); 

//items
routes.get('/items', itemsController.index);

//points
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', pointsController.create);


// Service Pattern
// Repository Pattern (Data mapper)

export default routes;