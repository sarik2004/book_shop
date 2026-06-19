const { where } = require("sequelize");
const { Book, Category } = require("../models");

const GetAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll({
      include: {
        model: Category,
        as: "Category",
      },
    });

    if (books == null || books.length == 0) {
      return res.json({
        message: "books not found.",
      });
    }
    return res.json({
      message: "get all books successfully",
      data: books,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const GetBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id, {
      include: {
        model: Category,
        as: "Category",
      },
    });

    if (!book) {
      return res.json({
        message: `book ${id} not found.`,
      });
    }
    return res.json({
      message: `get book by id ${id} successfully`,
      data: book,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const CreateBook = async (req, res) => {
  try {
    const { title, author, price, stock, description, category_id } = req.body;

    const image_url = req.file ? `/upload/${req.file.filename}` : null;

    if (category_id == null) {
      return res.json({
        message: "category_id is required",
      });
    }

    const category = await Category.findByPk(category_id);

    if (!category) {
      return res.json({
        message: "category id not found.",
      });
    }
    const createBook = await Book.create({
      title,
      author,
      price,
      stock,
      description,
      image_url,
      category_id,
    });

    return res.json({
      message: "create book successfully",
      data: createBook,
    });
  } catch (error) {
    return res.json({
      message: "error creating book",
      error,
    });
  }
};

const UpdateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, price, stock, description, image_url, category_id } =
      req.body;

    const findBook = await Book.findByPk(id);

    if (!findBook) {
      return res.json({
        message: `book ${id} not found.`,
      });
    }

    if (category_id) {
      const category = await Category.findByPk(category_id);
      if (!category)
        return res.json({
          message: "category id not found.",
        });
    }
    const NewBook = await Book.update(
      {
        title,
        author,
        price,
        stock,
        description,
        image_url,
        category_id,
      },
      { where: { id } },
    );
    return res.json({
      message: "update book successfully",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

const DeleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const findBook = await Book.findByPk(id);

    if (!findBook) {
      return res.json({
        message: `book ${id} not found.`,
      });
    }
    await Book.destroy({
      where: { id },
    });

    return res.json({
      message: "delete book successfully",
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

module.exports = {
  CreateBook,
  GetAllBooks,
  UpdateBook,
  DeleteBook,
  GetBookById,
};
