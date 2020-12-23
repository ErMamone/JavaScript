import { Mongoose } from "mongoose";
import { meals } from "./routes/meals");

const express: any = require('express');
const mongoose: Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const meals: meals = require('./routes/meals')
const orders = require('./routes/orders')
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 3000, () => console.log("Server is running!"));
mongoose.connect(process.env.MONGO_URI, { useFindAndModify: false ,useNewUrlParser: true, useUnifiedTopology: true });


app.use('/api/meals', meals);
app.use('/api/orders', orders);

module.exports = app