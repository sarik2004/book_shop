const { Cart, CartItem, Book } = require("../models");

// CREATE CART (auto or manual)
const CreateCart = async (req, res) => {
  try {
    const user_id = req.user.id;

    let cart = await Cart.findOne({
      where: { user_id },
    });

    if (!cart) {
      cart = await Cart.create({ user_id });
    }

    return res.json({
      message: "Cart ready",
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ADD TO CART
const addToCart = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { book_id, quantity } = req.body;

    const book = await Book.findByPk(book_id);

    if (!book) {
      return res.status(404).json({
        message: "Book not found",
      });
    }

    if (book.stock < quantity) {
      return res.status(400).json({
        message: "Not enough stock",
      });
    }

    let cart = await Cart.findOne({
      where: { user_id },
    });

    if (!cart) {
      cart = await Cart.create({ user_id });
    }

    let cartItem = await CartItem.findOne({
      where: {
        cart_id: cart.id,
        book_id,
      },
    });

    if (cartItem) {
      cartItem.quantity += quantity;
      await cartItem.save();
    } else {
      cartItem = await CartItem.create({
        cart_id: cart.id,
        book_id,
        quantity,
      });
    }

    return res.status(201).json({
      message: "Added to cart",
      data: cartItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// GET MY CART
const getCart = async (req, res) => {
  try {
    const user_id = req.user.id;

    const cart = await Cart.findOne({
      where: { user_id },
      include: [
        {
          model: CartItem,
          include: [Book],
        },
      ],
    });

    if (!cart) {
      return res.status(404).json({
        message: "Cart not found",
      });
    }

    return res.json({
      data: cart,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// UPDATE CART ITEM
const updateCartItem = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id } = req.params;
    const { quantity } = req.body;

    const item = await CartItem.findOne({
      where: { id },
      include: {
        model: Cart,
        where: { user_id },
      },
    });

    if (!item) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    item.quantity = quantity;
    await item.save();

    return res.json({
      message: "Updated successfully",
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE CART ITEM
const deleteCartItem = async (req, res) => {
  try {
    const user_id = req.user.id;
    const { id } = req.params;

    const item = await CartItem.findOne({
      where: { id },
      include: {
        model: Cart,
        where: { user_id },
      },
    });

    if (!item) {
      return res.status(404).json({
        message: "Item not found",
      });
    }

    await item.destroy();

    return res.json({
      message: "Item removed",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  CreateCart,
  addToCart,
  getCart,
  updateCartItem,
  deleteCartItem,
};
