import { setting, app } from './config/config.js';
import axios from 'axios';


// Index Page Get
app.get('/', async (req, res) => {

    try {
        res.render('page/index', { setting: setting });
    } catch (error) {
        res.status(500).send(error.message)

    }

})

// Index Page Post
app.post('/', async (req, res) => {

    try {
        const API_URL = 'https://cleanuri.com/api/v1/shorten';
        const response = await axios.post(API_URL, req.body);
        const result = response.data;

        res.render('page/index', { data: result, action: 'yes', setting });

    } catch (error) {
        res.render('page/index', { error: error.message, action: '', setting });
    }

})

app.listen(setting.port, (err) => {
    if (err) throw err;
    console.log(`App Running Using Port ${setting.port}`);

})