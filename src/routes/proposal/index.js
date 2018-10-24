const express = require('express');
const router = express.Router();
const methods = require('../../data/methods/proposal')
router.get('/',function(req,res){
    res.json({"Hello":"World"});
});

router.post('/create',function(req,res){
    var info = req.body;
    methods.addProposals(info)
    .then((result) => {
       res.json({"Success":true,"status":result});
    }).catch((err) => { 
        res.json({"Success":false,"Error":err});
    });
});

module.exports = router;