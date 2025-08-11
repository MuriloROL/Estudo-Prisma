import express, { Application, json } from 'express'
import { PrismaClient } from '../generated/prisma'
import { routes } from './routes'

export const prisma: PrismaClient = new PrismaClient()

export const app: Application = express()

app.use(json())

app.use(routes)
