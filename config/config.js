import express from 'express';
import morgan from 'morgan';

// Instance of Express
export const app = express();
// App Port Number
const PORT = process.env.PORT || 4000;
// Morgan as Logger
app.use(morgan('tiny'));
// Default View Engine
app.set('view engine', 'ejs');
// Default Static Folder
app.use(express.static('public'));
// Express Body Parser
app.use(express.urlencoded({ extended: true }));


// App Secondary Settings
export const setting = {
    title: 'Shortify',
    description: 'Earn from performing a task',
    developer: 'CharlesTechy',
    port: PORT
};