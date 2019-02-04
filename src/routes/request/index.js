const express = require('express');

const router = express.Router();
const methods = require('../../data/methods/request')
const peoplemethods = require('../../data/methods/people')





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
    var privilege = req.body.privilege
    methods.getAllRequestsForDashboard(privilege)
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

router.post('/getAllUnderPI',function(req,res){
    const person_id = req.body.person_id;
    //return requests according to his privilege
    var results = {};
    // var people_ids =[];
    methods.getAllRequestsUnderPIForDashboard(person_id)
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


router.post('/getRequest',function(req,res){
    var info = req.body.request_id;
    console.log(info);
    methods.findById(info)
    .then((result) => {
       res.json({"success":true,"status":result});
    }).catch((err) => { 
        console.log("Route caught error"+err);
        res.json({"success":false,"error":""+err});
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

router.post('/approveRequest',function(req,res){
    const info=req.body.request_id;
    methods.approve(info)
    .then(function(result){
        res.json({"success":true,
                "status":result})
    }).catch(function(err){
        res.json({
            "success":false,
            "status":err
        })
    })
});

router.post('/rejectRequest',function(req,res){
    const info=req.body.request_id;
    methods.reject(info)
    .then(function(result){
        res.json({"success":true,
                "status":result})
    }).catch(function(err){
        res.json({
            "success":false,
            "status":err
        })
    })
});

module.exports = router;