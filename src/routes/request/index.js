const express = require('express');

const router = express.Router();
const methods = require('../../data/methods/request')
const peoplemethods = require('../../data/methods/people')




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
        console.log("Route caught error"+err);
        res.json({"success":false,"error":""+err});
    });
});

router.post('/getAll',function(req,res){
    // const person_id = req.body.person_id;
    //return requests according to his privilege
    var results = {};
    var people_ids =[];
    methods.getAllRequestsForDashboard()
    .then(function(result){
        console.log("got result for dashboard");
        res.json({
            "success":true,
            "status":result
        })
    })
    .catch(function(err){
        console.log(err);
        res.json({
            "success":false,
            "status":err
        })
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