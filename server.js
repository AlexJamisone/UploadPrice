import express from 'express';
import bodyParser from 'body-parser';

import quResto from './routes/qucikresto.js'
import tasty from './routes/tasty.js'



const app = express();



app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

app.use(quResto);
app.use(tasty);


app.listen(8000);