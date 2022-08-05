import express from "express";
import helmet from "helmet";

const api = require("./utility/api-helper");
const indexRoute = require("./routes/index");
const srvPort = 3000;
const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(indexRoute);
app.listen(srvPort, () : void => {
    console.log('Server running in port',srvPort);
});