const Products = require('../models/ProductModel')

const productcontroller = {
    getProducts : async(req,res)=>{
        try {
            const products = await Products.find()

            res.json(products)
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    createProduct : async(req,res)=>{
        try {
            const {product_id,title,price,description,content,images,category} =req.body;

            if(!images)
            return res.status(500).json({msg:'pls upload image'})

            const product = await Products.findOne({product_id})

            if(product)
            return res.status(500).json({msg:'this product already exists.'})

            const newProduct = new Products({
                product_id,title:title.toLowerCase(),price,description,content,images,category
            })

            await newProduct.save()

            res.json({msg:"product created successefully"})
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    deleteProduct : async(req,res)=>{
        try {
            await Products.findByIdAndDelete(req.params.id )
            res.json({msg:"deleted"})
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    updateProduct : async(req,res)=>{
        try {
            const {title,price,description,content,images,category} =req.body;
            if(!images)
            return res.status(500).json({msg:'pls upload image'})

            await Products.findOneAndUpdate({_id:req.params.id},{
                title:title.toLowerCase(),price,description,content,images,category
            })

            res.json({msg:"updated"})
        } catch (error) {
            return res.status(500).json({msg:error.message})
            
        }
    },
}


module.exports = productcontroller