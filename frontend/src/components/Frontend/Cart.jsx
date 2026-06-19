import React, { useEffect, useState } from "react";
import API from "../../Api/api";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navegate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const res = await API.get("/cart");

      console.log("fetchCart response:", res.data);

      const items = res.data?.data?.CartItems || [];

      setCartItems(items);
    } catch (error) {
      console.log("fetchCart error:", error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQty = async (id, qty) => {
    if (qty <= 0) return;

    try {
      await API.patch(`/cart/items/${id}`, {
        quantity: qty,
      });

      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const removeItem = async (id) => {
    try {
      await API.delete(`/cart/items/${id}`);
      fetchCart();
    } catch (error) {
      console.log(error);
    }
  };

  const total = cartItems.reduce((sum, item) => {
    return sum + (item.Book?.price || 0) * item.quantity;
  }, 0);

  const checkout = async () => {
    try {
      const payload = {
        items: cartItems.map((item) => ({
          book_id: item.Book.id,
          quantity: item.quantity,
        })),
      };

      const res = await API.post("/orders", payload);

      console.log("order success:", res.data);
      alert("Order created!");
      navegate("/products")
    } catch (error) {
      console.log("order error:", error.response?.data || error.message);
    }
  };
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/80">
          <h1 className="text-3xl font-bold text-slate-900">Shopping Cart</h1>
          <p className="mt-2 text-slate-500">
            Review your selected items and complete checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <p className="text-xl font-semibold text-slate-900">
              Your cart is empty
            </p>
            <p className="mt-3 text-slate-500">
              Add some books to your cart to see them here.
            </p>
            <a
              href="/products"
              className="mt-6 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-500/20 transition hover:bg-emerald-700"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
            <section className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <img
                      src={`http://localhost:3000${item.Book?.image_url || ""}`}
                      alt={item.Book?.title}
                      className="h-28 w-full rounded-3xl object-cover md:w-32"
                    />

                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-slate-900">
                        {item.Book?.title}
                      </h2>
                      <p className="mt-1 text-sm text-slate-500">
                        by {item.Book?.author}
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-3 sm:items-center">
                        <div className="rounded-2xl bg-slate-100 px-4 py-3 text-slate-700">
                          Price: ${item.Book?.price ?? 0}
                        </div>
                        <div className="rounded-2xl bg-slate-100 px-4 py-3 text-slate-700">
                          Qty: {item.quantity}
                        </div>
                        <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-emerald-700">
                          Subtotal: ${(item.Book?.price || 0) * item.quantity}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <button
                        onClick={() => updateQty(item.id, item.quantity - 1)}
                        className="rounded-2xl border border-slate-200 bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200"
                      >
                        -
                      </button>
                      <span className="inline-flex min-w-[2.5rem] items-center justify-center rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, item.quantity + 1)}
                        className="rounded-2xl border border-slate-200 bg-slate-100 px-3 py-2 text-slate-700 transition hover:bg-slate-200"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="rounded-full bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900">
                Order summary
              </h2>
              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Items</span>
                  <span>{cartItems.length}</span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between border-t border-slate-200 pt-4 text-lg font-semibold text-slate-900">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={checkout}
                className="mt-6 w-full rounded-3xl bg-emerald-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-700"
              >
                Place Order
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
};

export default Cart;
