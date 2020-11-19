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
    response.json(metadata);
})

app.get('/quiz/:id', (request, response) => {
    let requestedId = request.params.id;
    let found = data.quizzes.find(x => x.id === request.params.id);
    if(found){
        response.json(found.questions);
    }
    else{
        response.status(404).json({error: `The quiz with id ${requestedId} was not found`});
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});