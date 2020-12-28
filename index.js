var express=require('express');//importation de l'express
var app=express();//creation d'object a partir de 'express
app.set('view engine','ejs')//moteur de visualisation
app.get('/diegui', function(req, res) { //creation de requete
    res.render('view');//envoyer la reponse
  });
app.listen(8080);//ecouter sur le port
