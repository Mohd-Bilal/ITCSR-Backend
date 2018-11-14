const express = require('express')
const router = express.Router()
const methods = require('../../data/methods/parameters_under_heads')
router.get('/',function(req,res){
    res.json({
        "Hello":"world"
    })
})

router.post('/create',function(req,res){
    const info  = req.body
        methods.addParametersunderheads(info).then((result) => {
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

// router.post('/bulk',function(req,res){
//     const info = req.body.parameters;
//     methods.bulkCreate(info).then((result)=>{
//         res.json({
//             "success":true,
//             "Status":result
//         })
//     })
//     .catch((err) => {
//         res.json( {"success":false,
//          "Status":err})
//      });
// })

module.exports = router;