const express = require('express');
const app = express();
const routesUrls = require('./routes/routes');
const boardrouteUrls = require('./routes/boardrouter');
const bodyparser = require('body-parser');
const cors = require('cors');
const connectToDateBase = require('./config/connectToDatabase');

app.use(cors())

connectToDateBase();


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use('/app', routesUrls);
app.use('/boardapp', boardrouteUrls);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log("server is running"));
