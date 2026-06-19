import React, { useState, useEffect } from "react";
import API from "../../Api/api";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState([]);
  const fetchOrder = async () => {
    try {
      const res = await API.get("/orders");
      console.log(res.data);
      setOrder(res.data.data || res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  const deleteOrder = async (id) => {
    try {
      await API.delete(`/orders/${id}`);
      alert("delete ready");
      await fetchOrder();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" rounded-[10px] min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="rounded-2xl border border-slate-700/50 bg-gradient-to-r from-slate-900/80 to-slate-800/50 p-8 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-3">
            📦 Order Management System
          </p>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
            All Orders
          </h2>
          <p className="text-slate-300 text-sm">
            View, manage, and track all customer orders in your bookstore
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-4 backdrop-blur">
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Total Orders
            </p>
            <p className="text-2xl font-bold text-cyan-400 mt-2">
              {order.length}
            </p>
          </div>
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-4 backdrop-blur">
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Pending
            </p>
            <p className="text-2xl font-bold text-yellow-400 mt-2">0</p>
          </div>
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-4 backdrop-blur">
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Completed
            </p>
            <p className="text-2xl font-bold text-green-400 mt-2">0</p>
          </div>
          <div className="rounded-lg border border-slate-700/50 bg-slate-900/40 p-4 backdrop-blur">
            <p className="text-xs text-slate-400 uppercase tracking-wider">
              Total Revenue
            </p>
            <p className="text-2xl font-bold text-purple-400 mt-2">$0</p>
          </div>
        </div>

        {/* Table Container */}
        <div className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/30 shadow-2xl shadow-slate-950/50 backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50 bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur">
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Order ID
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-cyan-400">
                    User ID
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Total Amount
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Actions
                  </th>
                  <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                {order.length > 0 ? (
                  order.map((items, idx) => (
                    <tr
                      key={items.id}
                      className="group bg-slate-950/20 hover:bg-slate-800/40 transition-all duration-300 border-slate-700/20"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-cyan-300">
                        #{items.id}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">
                        {items.user_id}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-green-400">
                        ${items.total_amount}
                      </td>
                      <td className="px-6 py-4 space-x-2 whitespace-nowrap">
                        <button
                          className="inline-flex items-center rounded-lg border border-red-500/60 bg-red-500/10 px-3 py-2 text-xs font-medium text-red-300 transition-all duration-200 hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
                          onClick={() => deleteOrder(items.id)}
                        >
                          🗑️ Delete
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="inline-flex items-center rounded-lg border border-blue-500/60 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-300 transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 active:scale-95"
                          onClick={() =>
                            navigate(`/dashboard/orders/${items.id}`)
                          }
                        >
                          👁️ View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <p className="text-4xl mb-3">📭</p>
                        <p className="text-sm text-slate-400">
                          No orders found
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Start by creating your first order
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between rounded-lg border border-slate-700/30 bg-slate-900/40 px-6 py-4 backdrop-blur">
          <div className="text-sm text-slate-300 mb-4 sm:mb-0">
            Showing{" "}
            <span className="font-semibold text-cyan-400">{order.length}</span>{" "}
            total order{order.length !== 1 ? "s" : ""}
          </div>
          <div className="flex gap-2">
            <button
             className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white">
              ⬅️ Previous
            </button>
            <button className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white">
              Next ➡️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
