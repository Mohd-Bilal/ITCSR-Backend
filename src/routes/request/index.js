const express = require('express');
const router = express.Router();
const methods = require('../../data/methods/request')
router.get('/',function(req,res){
    res.json({"Hello":"World"});
});

router.post('/create',function(req,res){
    var info = req.body;
    console.log(info);
    methods.addRequest(info)
    .then((result) => {
       res.json({"success":true,"status":result});
    }).catch((err) => { 
        res.json({"success":false,"Error":err});
    });
});
router.post('/update',function(req,res){
    // const proposalId = req.body.proposal_id;
    const info = req.body.info;
    const data = req.body.update;
    console.log(req.body)
    methods.updateRequest(info,data)
    .then(function(result){
        res.json({
            "success":true,
            "status":result
        })
    }).catch(function(err){
        console.log(err)
        res.json({
            "success":false,
            "status":err
        })
    })
})

router.post('/delete',function(req,res){
    const info=req.body;
    methods.deleteRequest(info)
    .then(function(result){
        res.json({"success":true,
                "status":result})
    }).catch(function(err){
        res.json({
            "success":false,
            "status":err
        })
    })
})

module.exports = router;