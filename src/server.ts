import 'dotenv/config'
import { app } from './index'

const PORT: number = Number(process.env.PORT) || 3333

app.listen(PORT, (): void => {
    console.log(`App is running at port ${PORT}`)
})
