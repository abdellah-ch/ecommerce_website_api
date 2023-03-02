const Products = require('../models/ProductModel')

//Filter ,sorting and pagination

class APIfeatures{

    constructor(query,queryString){

        this.query = query;

        this.queryString=queryString;

    }
    filtering(){

        const queryObj ={...this.queryString} //queryString = req.query

        console.log(queryObj);

        const exludedFields = ['page','sort','limit']

        exludedFields.forEach(el=> delete(queryObj[el])) //delete the elements in the array fromv queryObj object

        let queryStr = JSON.stringify(queryObj)

        console.log({queryStr});

        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g,match=>'$' + match) //'\b ensuring that the matches occur only as separate words and not as part of larger words' /g indicates that the replacement should be global__  price[gt]=121==>"price":{"$gt":"121"}}"

        this.query.find(JSON.parse(queryStr))

        return this
    };

    sorting(){}

    pagination(){}
}

const productcontroller = {

    getProducts : async(req,res)=>{

        try {

            const features = new APIfeatures(Products.find(),req.query).filtering()

            const products = await features.query //query is the parametre Products.find()

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