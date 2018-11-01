
const express = require('express')
const router = express.Router()
const methods = require('../../data/methods/heads')
router.get('/',function(req,res){
    console.log(req)
    res.json({
        "Hello":"world"
    })
})

router.get('/getAll',function(req,res){
    methods.getAllHeads().then(function(result){
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
    methods.addHeads(info).then((result) => {
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
    methods.updateHeads(info,update).then((result) => {
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