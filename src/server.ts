import Express from 'express';
const app = Express();
app.use(Express.json()); //Usando para o node conseguir receber um json enviado no request.body

import routes from './../routes';
app.use(routes);


function init(){
    console.log('Rodando server Porta 3333');
}
init();

app.listen(3333);