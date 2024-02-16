import express, { json } from "express"
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";
 
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res) => {
    console.log(req);
    return res.status(234).send("MERN Stack Book Store Project");
})

app.use('/books', booksRoute);

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log("Connected to database");
        app.listen(PORT, () => {
            console.log("Listening to port 8888");
        })
    })
    .catch((error) => {console.log(error)});

