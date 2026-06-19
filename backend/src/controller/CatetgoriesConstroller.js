const { Category, Book } = require("../models");

const GetAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    if (categories == null || categories.length == 0) {
      return res.json({
        message: "categories not found.",
      });
    }
    return res.json({
      message: "get all categories successfully",
      data: categories,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const getBooksByCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const books = await Book.findAll({
      where: {
        category_id: id,
      },
    });

    return res.json({
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


const GetCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      return res.json({
        message: `category ${id} not found.`,
      });
    }
    return res.json({
      message: `get category by id ${id} successfully`,
      data: category,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const CreateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await Category.create({ name });

    return res.json({
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const UpdateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findByPk(id);
    if (!category) {
      return res.json({
        message: `category ${id} not found.`,
      });
    }

    await category.update({ name });

    return res.json({
      message: "Category updated successfully",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const DeleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findByPk(id);

    if (!category) {
      return res.json({
        message: `category id ${id} not found.`,
      });
    }

    const countBook = await Book.count({ where: { category_id: id } });

    if (countBook > 0) {
      return res.json({
        message: "cannot delete category.",
      });
    }

    if (countBook == null) {
      return res.json({
        message: "can delete category",
      });
    }
    await category.destroy(id);
    return res.json({
      message: `category id  ${id} delete successfully`,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};
module.exports = {
  getBooksByCategory,
  CreateCategory,
  GetAllCategories,
  GetCategoryById,
  UpdateCategory,
  DeleteCategory,
};
