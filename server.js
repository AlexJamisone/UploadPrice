import express from 'express';
import path from 'path'; 
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser';

import update from './routes/update.js'
import mainPage from './routes/main-page.js'

const app = express();
const port = process.env.PORT || 8000

const __dirname = dirname(fileURLToPath(import.meta.url))
app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('', __dirname)


app.use(express.static('public'))
app.use('/assets', express.static(path.join(__dirname, '../public')))

app.use(bodyParser.urlencoded({extended: false}));

app.use(mainPage)
// app.use(update);


app.listen(port);