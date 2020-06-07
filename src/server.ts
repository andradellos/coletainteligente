import express from 'express';

const app = express();

app.get('/users',(request, response) =>{
    console.log('Rodando');
    
    response.json ([
        'Emanuel',
        'Robson',
        'Daniel'
    ]);
})

app.listen(3333);