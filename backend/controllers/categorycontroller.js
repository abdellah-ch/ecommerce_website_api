const { syncIndexes } = require("../models/categoryModel");

const Category = require("../models/categoryModel");

const categorycontroller = {

  getCategories: async (req, res) => {

    try {

      const categories = await Category.find();

      res.json(categories);

    } catch (err) {

      return res.status(500).json({ msg: err.message });

    }
  },
  createcategory: async (req, res) => {

    try {

      //if user have role = 1 -->admin

      //only admin can create ,delete and update category

      const { name } = req.body;

      const category = await Category.findOne({ name });

      if (category)

        return res.status(400).json({ msg: "this category already exists." });

      const newCategory = new Category({ name });

      await newCategory.save();

      res.json({ msg: "created seccess" });

    } catch (err) {

      return res.status(500).json({ msg: err.message });

    }
  },
  deletecategory: async (req, res) => {

    try {

      await Category.findByIdAndDelete(req.params.id);

      res.json({ msg: "Deleted seccess" });

    } catch (err) {

      return res.status(500).json({ msg: err.message });

    }
  },
  updatecategory: async (req, res) => {

    try {

      const { name } = req.body;

      await Category.findByIdAndUpdate({ _id: req.params.id }, { name });

      res.json({ msg: "Updated seccess " });

    } catch (err) {

      return res.status(500).json({ msg: err.message });
      
    }
  },
};

module.exports = categorycontroller;
