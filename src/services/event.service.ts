import { prisma } from ".."

export interface EventCreate {
    name: string
    location: string
    participants_quantity: number
    date: Date
    responsible: string
}

export interface EventReturn extends EventCreate {
    id: number
}

export const createEventService = async ({name, location, participants_quantity, date, responsible}: EventCreate): Promise<EventReturn> => {
    const newDate = new Date(date)
    const NewEvent : EventReturn = await prisma.event.create({
        data: {
            name,
            location,
            participants_quantity,
            date: newDate,
            responsible
        }
    })
    return NewEvent
}

export const getAllEventsService = async (): Promise<EventReturn[]> => {
    const allEvents: EventReturn[] = await prisma.event.findMany();
    return allEvents;
};

export interface EventUpdate {
    name?: string
    location?: string
    participants_quantity?: number
    date?: Date
    responsible?: string
}

export const updateEventService = async (id: number, payload: EventUpdate): Promise<EventReturn> => {
    const updatedEvent = await prisma.event.update({
        where: { id: id },
        data: payload
    });
    return updatedEvent;
};

export const deleteEventService = async (id: number): Promise<void> => {
    await prisma.event.delete({
        where: { id: id }
    });
};
