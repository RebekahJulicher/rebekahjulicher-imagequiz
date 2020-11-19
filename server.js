const express = require('express');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());


app.get('/', (request, response) => {
    response.send('Welcome to Image Quiz API');
});

app.get('/quizzes', (request, response) => {
    let metadata = data.quizzes.map(x => {
        return {id: x.id, title: x.title, picture: x.picture}
    });
    response.json(data.quizzes);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});