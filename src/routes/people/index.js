const express = require("express")
const router = express.Router()
const methods = require("../../data/methods/people")

router.post('/getAll',function(req,res){

	methods.getAllPeople().then(function(result){
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

router.post('/create',function(req,res){
    const info  = req.body
    methods.addPeople(info).then((result) => {
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
    methods.updatePeople(info,update).then((result) => {
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
 
    methods.deletePeople(info).then((result) => {
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