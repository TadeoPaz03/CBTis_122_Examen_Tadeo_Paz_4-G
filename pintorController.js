let mongoose = require('mongoose');
let Estatal = require('../models/pintor');

let estatalController = {};

/*LISTAR*/
estatalController.list = (req, res)=>{
    Estatal.find({})
        .limit(20)
        .skip(0)
        .exec((err, pintor)=>{
            if (err){
                console.log('Error:',err);
            }
            //console.log('Datos obtenidos');
            //console.log(estatal);
            res.render('../views/estatal/index',{
                pintores: pintores,
                title: "pintores",
                year: new Date().getFullYear()
            });
        })
};

module.exports = pintoresController;
