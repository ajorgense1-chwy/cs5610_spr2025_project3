import express from 'express';
// import randomNumberGenerator from './backend/utils.js';
import mongoose from 'mongoose';
import pokemonAPI from './backend/api/pokemon.api.js';
import userAPI from './backend/api/user.api.js';
import cookieParser from 'cookie-parser';
import path, {dirname} from 'path';


const app = express();

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));


app.use('/api/pokemon', pokemonAPI)
app.use('/api/user', userAPI);


const MONGODB_URL = "mongodb+srv://hunter:banana2@seawebdevfall2021.ykjok.mongodb.net/?retryWrites=true&w=majority&appName=SeaWebDevFall2021"
mongoose.connect(MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to MongoDB:'));


const frontend_dir = path.join(path.resolve(), 'dist')

app.use(express.static(frontend_dir));
app.get('*', function (req, res) {
    res.sendFile(path.join(frontend_dir, "index.html"));
});


app.listen(8000, function() {
    console.log("Starting server now...")
})
