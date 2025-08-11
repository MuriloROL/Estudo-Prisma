import { Router } from "express";
import { createEventController, getAllEventsController, updateEventController, deleteEventController } from "../controllers/event.controller";

export const routes : Router = Router()

routes.post('/events', createEventController)

routes.get('/events', getAllEventsController)

routes.patch('/events/:id', updateEventController)
routes.delete('/events/:id', deleteEventController)