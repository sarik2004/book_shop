import React, { useEffect, useState } from "react";
import API from "../../Api/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const navigeate = useNavigate();
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const fetchOrder = async () => {
    try {
      const res = await API.get(`/orders/${id}`);
      setOrder(res.data.data);
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "Error loading order");
    }
  };

  useEffect(() => {
    fetchOrder();
  }, [id]);

  const formatCurrency = (value) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value || 0);

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(date));
  };

  const status = (order?.status || order?.order_status || "Pending").toString();

  const statusClasses = {
    completed: "bg-emerald-100 text-emerald-700",
    shipped: "bg-sky-100 text-sky-700",
    pending: "bg-amber-100 text-amber-700",
    cancelled: "bg-rose-100 text-rose-700",
  };

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-6 text-center backdrop-blur">
          <p className="text-lg font-medium text-red-400">❌ {error}</p>
          <button className="mt-4 rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700 transition">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4">
        <div className="space-y-4 text-center">
          <div className="inline-block animate-spin">
            <p className="text-4xl">⏳</p>
          </div>
          <p className="text-slate-300">Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <button className="inline-flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800/60"
        onClick={()=>navigeate("/dashboard/orders")}>
          ← Back
        </button>

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-900/50 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
          {/* Header Section */}
          <div className="border-b border-slate-700/50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-8 py-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
                  📦 Order Receipt
                </p>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Order #{order.id}
                </h1>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-800/50 px-6 py-4 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-2">
                  📅 Date
                </p>
                <p className="text-lg font-semibold text-cyan-400">
                  {formatDate(order.createdAt || order.created_at)}
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 space-y-8">
            {/* Customer & Status Grid */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-4">
                  👤 Customer Info
                </p>
                <p className="text-lg font-semibold text-white">
                  {order.User?.name || "N/A"}
                </p>
                <p className="mt-2 text-sm text-slate-400 break-words">
                  ✉️ {order.User?.email || "N/A"}
                </p>
              </div>

              <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
                    📌 Status
                  </p>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold backdrop-blur ${
                      status.toLowerCase() === "completed"
                        ? "border border-green-500/50 bg-green-500/10 text-green-300"
                        : status.toLowerCase() === "shipped"
                        ? "border border-blue-500/50 bg-blue-500/10 text-blue-300"
                        : status.toLowerCase() === "pending"
                        ? "border border-yellow-500/50 bg-yellow-500/10 text-yellow-300"
                        : status.toLowerCase() === "cancelled"
                        ? "border border-red-500/50 bg-red-500/10 text-red-300"
                        : "border border-slate-500/50 bg-slate-500/10 text-slate-300"
                    }`}
                  >
                    {status.toLowerCase() === "completed" && "✅"}
                    {status.toLowerCase() === "shipped" && "🚚"}
                    {status.toLowerCase() === "pending" && "⏳"}
                    {status.toLowerCase() === "cancelled" && "❌"}
                    {!["completed", "shipped", "pending", "cancelled"].includes(
                      status.toLowerCase()
                    ) && "📦"}
                    {status}
                  </span>
                </div>
              </div>
            </div>

            {/* Items Table */}
            <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/20 backdrop-blur">
              <div className="border-b border-slate-700/50 bg-gradient-to-r from-slate-800/60 to-slate-900/60 px-6 py-4">
                <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  📚 Order Items
                </p>
              </div>

              {/* Table Headers */}
              <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] gap-4 border-b border-slate-700/30 bg-slate-900/30 px-6 py-4 text-xs uppercase tracking-wider text-slate-400">
                <span>Product</span>
                <span className="text-right">Qty</span>
                <span className="text-right">Price</span>
                <span className="text-right">Subtotal</span>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-700/20">
                {order.OrderItems && order.OrderItems.length > 0 ? (
                  order.OrderItems.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-[2fr_1fr_1fr_1.2fr] gap-4 border-slate-700/10 bg-slate-950/20 px-6 py-4 hover:bg-slate-800/20 transition"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-white truncate">
                          {item.Book?.title || "Unknown product"}
                        </p>
                        <p className="mt-1 text-xs text-slate-400">
                          by {item.Book?.author || "Unknown"}
                        </p>
                      </div>
                      <p className="text-right text-slate-300 font-medium">
                        {item.quantity}x
                      </p>
                      <p className="text-right text-slate-300 font-medium">
                        {formatCurrency(item.Book?.price || 0)}
                      </p>
                      <p className="text-right font-semibold text-cyan-400">
                        {formatCurrency(item.quantity * (item.Book?.price || 0))}
                      </p>
                    </div>
                  ))
                ) : (
                  <div className="px-6 py-8 text-center">
                    <p className="text-slate-400">No items in this order</p>
                  </div>
                )}
              </div>
            </div>

            {/* Summary Section */}
            <div className="rounded-xl border border-slate-700/50 bg-gradient-to-r from-slate-800/50 to-slate-900/50 p-8 backdrop-blur">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-3">
                    💰 Total Amount
                  </p>
                  <p className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {formatCurrency(order.total_amount || 0)}
                  </p>
                </div>

                <div className="flex flex-col gap-2 sm:text-right">
                  <button className="rounded-lg bg-cyan-600 px-8 py-3 text-sm font-semibold text-white hover:bg-cyan-700 transition active:scale-95">
                    🖨️ Print Invoice
                  </button>
                  <button className="rounded-lg border border-slate-700 bg-slate-800/50 px-8 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-700 transition">
                    📧 Email Receipt
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex gap-4 justify-center">
          <button className="rounded-lg border border-slate-700/50 bg-slate-800/30 px-6 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800/60 transition">
            ← Back to Orders
          </button>
          <button className="rounded-lg bg-cyan-600 px-6 py-3 text-sm font-medium text-white hover:bg-cyan-700 transition">
            Next Order →
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
