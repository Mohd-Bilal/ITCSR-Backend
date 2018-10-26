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
       res.json({"success":true,"status":result});
    }).catch((err) => { 
        res.json({"success":false,"Error":err});
    });
});
router.post('/update',function(req,res){
    const proposalId = req.body.proposal_id;
    const info = req.body.info;
    const data = req.body.update;
})

module.exports = router;