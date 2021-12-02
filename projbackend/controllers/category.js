const Category = require("../models/category");

exports.createCategory = (req, res) => {
    const category = new Category(req.body);

    category.save((err, cate) => {
        if(err || !cate){
            return res.status(400).json({
                error: "Unable to create category"
            })
        }

        res.json(cate);
    })
}

exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if(err){
            return res.status(400).json({
                error: "category does not exist"
            })
        }

        req.category = category;
        next();
    })
}

exports.updateCategory = (req, res) => {
    const category = req.category;
    category.name = req.body.name;

    category.save((err, updatedCategory) => {
        if(err){
            return res.status(400).json({
                error: "Cannot update category"
            })
        }

        res.json(updatedCategory)
    })
}

exports.getAllCategories = (req, res) => {
    Category.find().exec((err, categories) => {
        if(err){
            return res.json(400).json({
                error: "Could not find category"
            })
        }

        res.json(categories);
    })
}