//Incluir as bibliotecas
//Gerenciar as Requisições, rotas e url etc...
const express = require('express');

//Chama a função express
const app = express();

//Criar rota para visualizar com o método get
app.get("/", (req,res) =>{
    res.send('Seja bem Vindo ao Treinamento Novato');
});

//Inicializando o servidor na porta 8080
app.listen(8080, () => {
    console.log("Essa frase é apenas para orientaçao para saber se deu certo ou não")
})