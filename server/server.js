const express = require('express');
const app = express();
const routesUrls = require('./routes/routes');
const boardrouteUrls = require('./routes/boardrouter');
const MaprouteUrls = require('./routes/Maprouter');
const bodyparser = require('body-parser');
const cors = require('cors');
const connectToDateBase = require('./connectToDatabase');
const dotenv = require('dotenv');
const path = require('path');


app.use(cors());

dotenv.config();
connectToDateBase();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));




app.use('/app', routesUrls);
app.use('/boardapp', boardrouteUrls);
app.use('/map', MaprouteUrls);


app.listen(process.env.PORT , () => console.log("server is running"));
