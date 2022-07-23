import express from 'express';
import path from 'path'; 
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser';

import update from './routes/update.js'
import mainPage from './routes/main-page.js'
import addPage from './routes/add.js'

const app = express();
const port = process.env.PORT || 8000

const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('view engine', 'pug');


app.use(express.static('public'))
app.use('/assets', express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({extended: false}));

app.use(addPage)
app.use(mainPage)
app.use(update);


app.listen(port);