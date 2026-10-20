import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 5002;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));
app.use("/favicon.ico", express.static(path.join(__dirname, 'public/favicon.ico')));
app.use("/bootstrap", express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));


// HTTP logger middleware
app.use(morgan('combined'));

// Template engine
app.engine("hbs", engine({
    extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
});

app.get('/news', (req, res) => {
    res.render('news', { title: 'News Page' });
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});