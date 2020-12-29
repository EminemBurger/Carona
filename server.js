const express = require('express')
const app = express()
const routesUrls = require('./routes/routes')
const boardrouteUrls = require('./routes/boardrouter')
const cors = require('cors')
const connectToDateBase = require('./config/connectToDatabase')

app.use(cors())

connectToDateBase();


app.use(express.json({ extended: false }));
app.use('/app', routesUrls)
app.use('/boardapp', boardrouteUrls)

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("server is running"))
