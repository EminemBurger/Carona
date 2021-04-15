const express = require('express');
const app = express();
const routesUrls = require('./routes/routes');
const boardrouteUrls = require('./routes/boardrouter');
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


if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));

    app.get("*", (req,res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
    });
}

app.use('/app', routesUrls);
app.use('/boardapp', boardrouteUrls);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server is running"));
