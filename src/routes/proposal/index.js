const express = require('express');
const router = express.Router();
const model = require('../../data/methods/proposal')
router.get('/',function(req,res){
    res.json({"Hello":"World"});
});

router.post('/create',function(req,res){
    const info = req.body.info
    model.addProposal(info).then((result) => {
        console.log('hello')
    }).catch((err) => { 
        console.log('poyi macha')
    });
});
module.exports = router;