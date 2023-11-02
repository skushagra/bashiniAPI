import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import translator from './routes/translate.js';

// Initialize Express Application
const app = express();
app.use(cors());
app.use(express.json());



// Welcome message at GET /
app.get('/', (req, res) => {
	res.send("Translate text using Bashini Translation API");
});


// Route to translate text
app.use('/scaler/translate', translator);



const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});