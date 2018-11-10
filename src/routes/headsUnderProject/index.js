const express = require('express')
const router = express.Router()
const methods = require('../../data/methods/heads_under_project')
router.get('/',function(req,res){
    res.json({
        "Hello":"world"
    })
})

router.post('/getAll',function(req,res){
    const project_id = req.body.project_id;
    methods.getAllHeadsUnderProject(project_id).then(function(result){
        res.json({
            "success":true,
            "Status":result
        });
    }).catch((err) => {
        res.json( {"success":false,
         "Status":err})
     });
});



router.post('/create',function(req,res){
    const info  = req.body
    info["spent"] = 0; //add new head!!
    methods.addNewHeadUnderProject(info).then((result) => {
    // methods.addPeople(info).then((result) => {
        res.json({
            "success":true,
            "Status":result
        })
    }).catch((err) => {
       res.json( {"success":false,
        "Status":err})
    });
})

router.post('/update',function(req,res){
    const info = req.body.info
    const update = req.body.update
    methods.updateHeadsUnderProject(info,update).then((result) => {
        res.json({
            "success":true,
            "Status":result
        })
    }).catch((err) => {
        res.json({
            "success":false,
            "Status":result
        })        
    });
})

router.post('/delete',function(req,res){
    const info = req.body
 
    methods.deleteHeadsUnderProject(info).then((result) => {
        res.json({
            "success":true,
            "Status":result
        })
    }).catch((err) => {
        res.json({
            "success":false,
            "Status":result
        })        
    });
})
module.exports = router