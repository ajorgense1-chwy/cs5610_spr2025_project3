import express from 'express';
// import randomNumberGenerator from './backend/utils.js';
import mongoose from 'mongoose';
import pokemonAPI from './backend/api/pokemon.api.js';
import userAPI from './backend/api/user.api.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));


app.use('/api/pokemon', pokemonAPI)
app.use('/api/user', userAPI);


const MONGODB_URL = "insert URL here"
mongoose.connect(MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));


app.listen(8000, function () {
    console.log('Starting server...');
})