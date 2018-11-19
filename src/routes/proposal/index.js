const express = require('express');
const router = express.Router();
const proposalmethods = require('../../data/methods/proposal')
const peoplemethods = require('../../data/methods/people')
router.get('/', function (req, res) {
    res.json({ "Hello": "World" });
});

router.post('/getAllProjectsUnderPI',function(req,res){
    var PI_ID = req.body.PI_ID;
    proposalmethods.getAllProjectsUnderPI(PI_ID).then(function(result){
        res.json({
            "success":true,
            "Status":result
        });
    }).catch((err) => {
        res.json( {"success":false,
         "Status":err})
     });
});

router.post('/findByID',function(req,res){
    var project_id = req.body.project_id;
    proposalmethods.findById(project_id).then(function(result){
        res.json({
            "success":true,
            "Status":result
        });
    }).catch((err) => {
        res.json( {"success":false,
         "Status":err})
     });
});

router.post('/create', function (req, res) {
    var info = req.body;
    proposalmethods.addProposals(info)
        .then((result) => {
            res.json({ "success": true, "status": result });
        }).catch((err) => {
            res.json({ "success": false, "Error": err });
        });
});
router.post('/update', function (req, res) {
    const proposalId = req.body.proposal_id;
    const info = req.body.info;
    const data = req.body.update;
    console.log(req.body)
    proposalmethods.updateProposal(info, data)
        .then(function (result) {
            res.json({
                "success": true,
                "status": result
            })
        }).catch(function (err) {
            console.log(err)
            res.json({
                "success": false,
                "status": err
            })
        })
})

router.post('/getAllPI', function (req, res) {
    peoplemethods.getAllPI().then(function(result){
        res.json({
            "success":true,
            "data":result
        })
    }).catch(function(err){
        res.json({
            "success":false,
            "data":err
        })
    })
})

module.exports = router;