const { Order, OrderItem, Book, User } = require("../models");
const sequelize = require("../db/connection");

const CreateOrder = async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const user_id = req.user.id;
    const { items } = req.body;

    if (!user_id) {
      return res.status(400).json({
        message: "user_id is required",
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "order items are required",
      });
    }

    let totalAmount = 0;

    const order = await Order.create(
      {
        user_id,
        total_amount: 0,
      },
      { transaction },
    );

    for (const item of items) {
      const book = await Book.findByPk(item.book_id, { transaction });

      if (!book) {
        await transaction.rollback();
        return res.status(404).json({
          message: `book id ${item.book_id} not found`,
        });
      }

      if (book.stock < item.quantity) {
        await transaction.rollback();

        return res.status(400).json({
          message: `${book.title} doesn't have enough stock`,
        });
      }

      const subtotal = Number(book.price) * item.quantity;
      totalAmount += subtotal;

      await OrderItem.create(
        {
          order_id: order.id,
          book_id: book.id,
          quantity: item.quantity,
          price: book.price,
        },
        { transaction },
      );

      await book.update(
        {
          stock: book.stock - item.quantity,
        },
        { transaction },
      );
    }

    await order.update(
      {
        total_amount: totalAmount,
      },
      { transaction },
    );

    await order.update(
      {
        total_amount: totalAmount,
      },
      { transaction },
    );

    await transaction.commit();

    const finalOrder = await Order.findByPk(order.id, {
      include: [OrderItem],
    });

    return res.status(201).json({
      message: "order created successfully",
      data: order,
    });
  } catch (error) {
    await transaction.rollback();

    return res.status(500).json({
      message: error.message,
    });
  }
};

const GetAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: [Book],
        },
      ],
    });

    return res.json({
      message: "Get all orders successfully",
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const GetOrderById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const order = await Order.findOne({
      where: {
        id,
        ...(req.user.role !== "admin" && { user_id: req.user.id }),
      },
      include: [{ model: OrderItem, include: [Book] }, { model: User }],
    });

    if (!order) {
      return res.status(404).json({
        message: "Order not found or not allowed",
      });
    }

    return res.json({ data: order });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const GetMyOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: {
        user_id: req.user.id,
      },
      include: [
        {
          model: OrderItem,
          include: [Book],
        },
      ],
    });

    return res.json({
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const UpdateOrder = async (req, res) => {
  try {
    const { status } = req.body;

    const order = await Order.findByPk(req.params.id);

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    await order.update({ status });

    return res.json({
      message: "Order updated successfully",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const DeleteOrder = async (req, res) => {
  const transaction = await sequelize.transaction();

  try {
    const order = await Order.findByPk(req.params.id, {
      include: [OrderItem],
      transaction,
    });

    if (!order) {
      await transaction.rollback();

      return res.status(404).json({
        message: "Order not found",
      });
    }

    for (const item of order.OrderItems) {
      const book = await Book.findByPk(item.book_id, {
        transaction,
      });

      await book.update(
        {
          stock: book.stock + item.quantity,
        },
        { transaction },
      );
    }

    await OrderItem.destroy({
      where: {
        order_id: order.id,
      },
      transaction,
    });

    await order.destroy({ transaction });

    await transaction.commit();

    return res.json({
      message: "Order deleted successfully",
    });
  } catch (error) {
    await transaction.rollback();

    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  CreateOrder,
  GetAllOrders,
  GetMyOrders,
  GetOrderById,
  UpdateOrder,
  DeleteOrder,
};
