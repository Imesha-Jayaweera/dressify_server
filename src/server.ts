import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import {initDatabase} from "./data-access";
import {routes} from "./routes";

const app = express();
const port = process.env.PORT;

initDatabase();

// Server configuration
app.set("trust proxy", true);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({limit: "10mb", extended: true}));
app.use(bodyParser.json({limit: "10mb"}));

// Routes initialization
routes(app);

app.listen(port, () => {
    console.log(`Dressify API Server v${process.env.npm_package_version} started on PORT ${port}`);
});
