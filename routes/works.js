const express   = require('express');
const router    = express.Router();
const Work      = require('../models/Work');

//GET LOGIN
router.get('/login', (req,res) =>{
    res.render('login');
});

//GET ADD
router.get('/add', (req,res) =>{
    res.render('add');
});

//GET MASSANEWS
router.get('/massa', (req,res) => {
    res.render('massa');
});

// POST
router.post('/add', (req, res) => {

    let {titulo, gravata, lide, link, imagem, prioridade} = req.body;

    // INSERT
    Work.create({
        titulo,
        gravata,   
        lide,
        link,
        imagem,
        prioridade
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));
});

module.exports = router