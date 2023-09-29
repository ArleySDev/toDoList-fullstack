const express = require('express');

const app = express();

app.get('/tasks', (request, response) =>  response.status(200).send('Olá Mundo!'));
app.post('/tasks');
app.delete('/tasks');

app.listen(3333, () => console.log('Server Running or port 3333'));