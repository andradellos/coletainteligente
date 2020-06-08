import express from 'express';
const routes = express.Router();


//Verbos HTTP
//GET Buscar informaçõa
//POST Criar Informação
//PUT : Atualizar informação
//DELETE: Apagar Informação

//================Tipos de parâmetros==================
// request.params.id = '/users/:id' => Onde  id passado pela URL 99% obrigatório
// request.query.searsh = /users?searsh=Ema => Onde searsh passado pela URL, não é obrigatório.
// request.body = recupera o objeto enviado geralmente usado para Inser,update...


routes.get('/',(request, response) =>{ 

    return response.json ({nome:'Emanuel'});
 })

 export default routes; // permitindo que esse arquivo seja importado em qualquer outro arquivo .ts