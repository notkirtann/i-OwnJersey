import Product from '../models/productModel.js'

const addProduct = async (req,res) => {
    const product = new Product(req,body)
}

const listProduct = async (req,res) => {
    
}

const getProductById = async (req,res) => {
    
}

const removeProduct = async (req,res) => {
    
}

export {
    addProduct,
    listProduct,
    getProductById,
    removeProduct
}