import { Request, Response } from "express"
import { createEventService, EventReturn, getAllEventsService, updateEventService, deleteEventService, EventUpdate } from "../services/event.service"

export const createEventController = async (req: Request, res: Response) : Promise<Response> => 
{
    const NewEvent : EventReturn = await createEventService(req.body)
    return res.status(201).json(NewEvent)
}

export const getAllEventsController = async (req: Request, res: Response): Promise<Response> => {
    const allEvents = await getAllEventsService();
    return res.status(200).json(allEvents);
};

export const updateEventController = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    const payload: EventUpdate = req.body;
    const updatedEvent = await updateEventService(id, payload);
    return res.status(200).json(updatedEvent);
};

export const deleteEventController = async (req: Request, res: Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    await deleteEventService(id);
    return res.status(204).send();
};