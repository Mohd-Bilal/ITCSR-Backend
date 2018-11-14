
const express = require('express')
const router = express.Router()
const methods = require('../../data/methods/heads')
router.get('/',function(req,res){
    res.json({
        "Hello":"world"
    })
})

router.post('/getMultipleHeads',function(req,res){
    const head_ids = req.body.head_ids;
    console.log(head_ids);
    methods.getMultipleHeads(head_ids)
    .then(function(result){
        console.log("devide")
        console.log({
            "success":true,
            "Status":result
        });
        res.json({
            "success":true,
            "Status":result
        });
    })
    .catch(function(err){
        console.log("devidem -_-")
        res.json( {"success":false,
         "Status":err});
    })
});

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
//heads are usually created with parameters
// router.post('/create',function(req,res){
//     const info  = req.body
//     methods.addHeads(info).then((result) => {
//         res.json({
//             "success":true,
//             "Status":result
//         })
//     }).catch((err) => {
//        res.json( {"success":false,
//         "Status":err})
//     });
// })

router.post('/createWithParameters',function(req,res){
    const head_info  = req.body.head_info;
    const parameter_info  = req.body.parameter_info;
    
    methods.addHeadsWithParameters(head_info,parameter_info).then((result) => {
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