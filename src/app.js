import express from 'express'
import morgan from 'morgan'

import routing from './routing'

const app = express()

app.use(express.json())

if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
}

app.use('/shareed', routing)

app.listen(process.env.DB_PORT, () => {
    console.log("App is running at localhost:3000 in mode", app.get("env"))
    console.log("  Press CTRL-C to stop\n")
});

