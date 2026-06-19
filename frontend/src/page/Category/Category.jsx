import React, { useState , useEffect } from "react";

import API from "../../Api/api";
const Category = () => {
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({ id: null, name: "" });
  const [isEdit, setIsEdit] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const FectCategory = async () => {
    const res = await API.get("/categories");
    setCategories(res.data.data || res.data);
  };

  useEffect(() => {
    FectCategory();
  }, []);

  // input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //  open create form
  const openCreate = () => {
    setForm({ id: null, name: "" });
    setIsEdit(false);
    setShowForm(true);
  };

  // create
  const createcategry = async() => {
    await API.post("/categories" , {name : form.name})
    alert( "createCategory successfully.")
    setShowForm(false)
    FectCategory();
    };

  // edit click
  const editItem = (item) => {
    setForm(item);
    setIsEdit(true);
    setShowForm(true);
  };

    // UPDATE
  const updateCategory = async () => {
    await API.put(`/categories/${form.id}`, { name: form.name });

    alert("Category updated");
    setShowForm(false);
    FectCategory();
  };

 const deleteCategory = async (id) => {
    await API.delete(`/categories/${id}`);
    alert("Category deleted");
    FectCategory();
  };

  return (
    <div className=" rounded-[10px  ] min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 text-slate-100 p-6">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="rounded-[2rem] border border-slate-700/70 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700/50 backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500/90">
                Category Manager
              </p>
            </div>

            <button
              onClick={openCreate}
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-200 hover:bg-cyan-400 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
            >
              + Create Category
            </button>
          </div>

          {showForm && (
            <div className="mt-6 rounded-3xl border border-slate-700/80 bg-slate-950/95 p-6 shadow-inner shadow-slate-900/20 ring-1 ring-slate-700/40">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {isEdit ? "Update Item" : "Create Item"}
                  </h3>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="rounded-2xl border border-slate-700/80 bg-slate-800 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white"
                >
                  Cancel
                </button>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-slate-300">
                  <span>Name</span>
                  <input
                    name="name"
                    placeholder="Item name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition duration-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
                <button
                  onClick={isEdit ? updateCategory : createcategry}
                  className="rounded-2xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                >
                  {isEdit ? "Update" : "Create"}
                </button>
              </div>
            </div>
          )}
        </section>

        <section className="rounded-[2rem] border border-slate-700/70 bg-slate-900/95 p-6 shadow-2xl shadow-slate-950/40 ring-1 ring-slate-700/50 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500/90">
                Current Category
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Category Category
              </h3>
            </div>
            <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300">
              {categories.length} categories
            </span>
          </div>

          {categories.length === 0 ? (
            <div className="mt-8 rounded-3xl border border-dashed border-slate-700/80 bg-slate-950/90 p-8 text-center text-slate-400">
              No category added yet. Click the Create button to start.
            </div>
          ) : (
            <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-700/80 bg-slate-950/95 shadow-inner shadow-slate-900/20">
              <table className="min-w-full divide-y divide-slate-800 text-sm">
                <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-700/80">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.18em]">
                      ID
                    </th>
                    <th className="px-4 py-3 text-left font-medium uppercase tracking-[0.18em]">
                      Name
                    </th>
                    <th className="px-4 py-3 text-right font-medium uppercase tracking-[0.18em]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-200">
                  {categories.map((item) => (
                    <tr
                      key={item.id}
                      className="transition hover:bg-slate-950/70"
                    >
                      <td className="px-4 py-4">{item.id}</td>
                      <td className="px-4 py-4">{item.name}</td>
                      <td className="px-4 py-4 space-x-2 text-right whitespace-nowrap">
                        <button
                          onClick={() => editItem(item)}
                          className="rounded-2xl border border-cyan-500/60 bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300 transition hover:bg-cyan-500/20"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteCategory(item.id)}
                          className="rounded-2xl border border-rose-500/60 bg-rose-500/10 px-3 py-2 text-sm text-rose-300 transition hover:bg-rose-500/20"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Category;
