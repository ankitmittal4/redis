const express = require('express');
const axios = require('axios');
const client = require('./client');

const app = express();

app.get('/', async (req, res) => {
    const cacheValue = await client.get('todos');
    if (cacheValue) {
        return res.json(JSON.parse(cacheValue));
    }

    const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
    );
    console.log('Data: ', data);
    await client.set('todos', JSON.stringify(data));
    await client.expire('todos', 60);
    return res.json(data);
});

app.listen(7000, () => {
    console.log('Server listening on port 7000');
});
