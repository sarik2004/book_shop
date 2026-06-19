import React, { useState, useEffect } from "react";
import API from "../../Api/api";

const Book = () => {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    id: null,
    title: "",
    author: "",
    price: "",
    stock: "",
    description: "",
    category_id: "",
  });
  const [image, setImage] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // GET BOOKS
  const fetchBooks = async () => {
    const res = await API.get("/books");
    setBooks(res.data.data || res.data);
  };

  // GET CATEGORIES (for dropdown)
  const fetchCategories = async () => {
    const res = await API.get("/categories");
    setCategories(res.data.data || res.data);
  };

  useEffect(() => {
    fetchBooks();
    fetchCategories();
  }, []);

  // input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // open create form
  const openCreate = () => {
    setForm({
      id: null,
      title: "",
      author: "",
      price: "",
      stock: "",
      description: "",
      image_url: "",
      category_id: "",
    });
    setIsEdit(false);
    setShowForm(true);
  };

  // CREATE BOOK
  const createBook = async () => {
    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("author", form.author);
    formData.append("price", form.price);
    formData.append("stock", form.stock);
    formData.append("description", form.description);
    formData.append("category_id", form.category_id);

    if (image) {
      formData.append("image", image);
    }

    await API.post("/books", formData);

    alert("Book created successfully");

    setShowForm(false);

    fetchBooks();
  };

  // EDIT
  const editItem = (item) => {
    setForm(item);
    setIsEdit(true);
    setShowForm(true);
  };

  // UPDATE BOOK
  const updateBook = async () => {
    await API.put(`/books/${form.id}`, form);
    alert("Book updated");
    setShowForm(false);
    fetchBooks();
  };

  // DELETE BOOK
  const deleteBook = async (id) => {
    await API.delete(`/books/${id}`);
    alert("Book deleted");
    fetchBooks();
  };

  return (
    <div className="p-6 text-white">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <p className="text-sm uppercase tracking-wide text-cyan-300">
            Library admin
          </p>
          <h2 className="text-3xl font-bold">Books</h2>
        </div>

        <button
          type="button"
          onClick={openCreate}
          className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow hover:bg-sky-400 transition"
        >
          + Add Book
        </button>
      </div>

      {/* FORM */}
      {showForm && (
        <div className="mb-6 rounded-2xl border border-slate-700 bg-slate-950/90 p-5 shadow-xl shadow-slate-950/20">
          <div className="mb-4 flex items-center justify-between gap-3 rounded-xl bg-slate-900 px-4 py-3 text-sm text-slate-200 ring-1 ring-slate-700">
            <div>
              <p className="font-semibold text-white">
                {isEdit ? "Edit Book" : "Create New Book"}
              </p>
              <p className="text-slate-400 text-xs">
                Fill in the details and click {isEdit ? "Update" : "Create"}.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-lg bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-700 transition"
            >
              Close
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />

            <input
              type="text"
              name="author"
              placeholder="Author"
              value={form.author}
              onChange={handleChange}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={form.price}
              onChange={handleChange}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={form.stock}
              onChange={handleChange}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />

            <input
              type="file"
              placeholder="Image URL"
              accept="image*"
              onChange={(e) => setImage(e.target.files[0])}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />

            <select
              name="category_id"
              value={form.category_id}
              onChange={handleChange}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="col-span-full h-32 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
            />
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-full border border-slate-700 bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={isEdit ? updateBook : createBook}
              className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 transition"
            >
              {isEdit ? "Update Book" : "Create Book"}
            </button>
          </div>
        </div>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto rounded-3xl border border-slate-700 bg-slate-950/90 shadow-xl shadow-slate-950/20">
        <table className="min-w-full divide-y divide-slate-800 text-sm text-slate-200">
          <thead className="bg-slate-900/90 text-left text-xs uppercase tracking-wider text-slate-400">
            <tr>
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Author</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Image</th>
              <th className="px-4 py-3">Descrition</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-800 bg-slate-950">
            {books.map((item) => (
              <tr key={item.id} className="hover:bg-slate-900/80">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.title}</td>
                <td className="px-4 py-3">{item.author}</td>
                <td className="px-4 py-3">{item.Category?.name}</td>
                <td className="px-4 py-3">{item.stock}</td>
                <td>
                  <img
                    src={`http://localhost:3000${item.image_url}`}
                    alt={item.title}
                    className="p-2 w-16 h-16 object-cover rounded-[10px]"
                  />
                </td>
                <td className="px-4 py-3">{item.description}</td>

                <td className="px-4 py-3">${item.price}</td>
                <td className="px-4 py-3 text-center space-x-2">
                  <button
                    type="button"
                    onClick={() => editItem(item)}
                    className="rounded-full bg-amber-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-amber-400"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => deleteBook(item.id)}
                    className="rounded-full bg-rose-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-rose-400"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Book;
