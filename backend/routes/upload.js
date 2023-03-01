const router = require("express").Router();

const cloudinary = require("cloudinary");

const auth = require('../middleware/auth')

const authAdmin = require('../middleware/authadmin')

const fs = require('fs')

cloudinary.config({

    cloud_name : process.env.cloud_name,

    api_key : process.env.cloud_api_key,

     api_secret : process.env.cloud_api_secret
})

//upload image

router.post('/upload',auth,authAdmin,(req,res)=>{
    try {

        // console.log(req.files.file );

        if(!req.files || Object.keys(req.files).length === 0)

        return res.status(400).json({msg:'No files were uploaded.'})

        const file = req.files.file;

        if(file.size > 1024*1024){
        
        removeTmp(file.tempFilePath)

        return res.status(400).json({msg:'size too large'})

        } //1mb


        if(file.mimetype !== "image/jpg" && file.mimetype !== "image/png" )

        {

        removeTmp(file.tempFilePath)

        return res.status(400).json({msg:'file format is incorrect.4'})

        }


        cloudinary.v2.uploader.upload(file.tempFilePath,{

            folder:"ecomerce"

        },async (err,result)=>{ 

            if(err) throw err

            removeTmp(file.tempFilePath)


            res.json({
            
            public_id: result.public_id,
            
            url : result.secure_url
            })
        })
        
        
    } catch (error) {

       return res.status(500).json({msg:error.message})
    }
})

router.post('/destroy',auth,authAdmin,(req,res)=>{
    try {
        
     const {public_id} = req.body
     
     if(!public_id) return res.status(400).json({msg:'No images selected'})

     cloudinary.v2.uploader.destroy(public_id,async(err,result)=>{
        if(err) throw err

        res.json({msg : "deleted"})
     })
        
    } catch (error) {

    return res.status(500).json({msg:error.message})
        
    }
})

const removeTmp = (path)=>{

    fs.unlink(path,err=>{

        if(err) throw err

    })

}

module.exports = router