const express = require('express');
const app = express();

app.get('*', (request, response) => {
    response.send({ message: 'Chanchito feliz ' })
});

app.listen(3000, () => console.log('Nuestro server esta on en el port 3000'));