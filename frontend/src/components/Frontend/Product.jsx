import React from "react";
import { useState, useEffect } from "react";
import API from "../../Api/api";
import { useNavigate } from "react-router-dom";

const Book = () => {
  const navegaete = useNavigate();
  const [books, setBooks] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const fetCategories = async () => {
    try {
      const res = await API.get("/categories");
      setCategory(res.data.data || res.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  const fetchBooks = async () => {
    const res = await API.get("/books");
    setBooks(res.data.data || res.data);
  };

  useEffect(() => {
    fetchBooks();
    fetCategories();
  }, []);

  const getBookByCategory = async (categoryId) => {
    try {
      setSelectedCategory(categoryId);
      const res = await API.get(`/categories/${categoryId}/book`);
      setBooks(res.data.data || res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const addToCart = async (bookId) => {
    try {
      const res = await API.post("/cart/items", {
        book_id: bookId,
        quantity: 1,
      });
      alert(res.data.message);
      navegaete("/carts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-8 mt-40">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
            Book Collection
          </h1>
          <p className="text-slate-600 text-lg">
            Discover your next favorite read
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5 ">
          {/* Sidebar Categories */}
          <div className="  md:col-span-1 bg-white p-6 rounded-2xl h-fit sticky top-4 shadow-lg border border-slate-100">
            <h3 className="  text-xl font-bold text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-emerald-600 to-teal-600 rounded"></span>
              Filters
            </h3>
            <div className="space-y-3">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  fetchBooks();
                }}
                className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                  selectedCategory === null
                    ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30 border-emerald-600"
                    : "text-slate-700 hover:bg-slate-100 hover:border-emerald-600/20 border-transparent"
                }`}
              >
                All Books
              </button>

              {category.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => getBookByCategory(cat.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all duration-300 border ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30 border-emerald-600"
                      : "text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Books Grid */}
          <div className="md:col-span-3 lg:col-span-4">
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {books.map((book) => (
                <div
                  key={book.id}
                  className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-200 to-slate-100 relative">
                    <img
                      src={`http://localhost:3000${book.image_url}`}
                      alt={book.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {book.title}
                    </h2>
                    <p className="text-sm text-slate-500 mb-4 font-medium">
                      by <span className="text-slate-700">{book.author}</span>
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        ${book.price}
                      </p>
                    </div>
                    <p className="text-sm leading-5 text-slate-600 line-clamp-2 mb-4">
                      {book.description}
                    </p>
                    <button
                      onClick={() => addToCart(book.id)}
                      className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3 text-white font-bold hover:shadow-lg hover:shadow-emerald-600/40 transition-all duration-300 active:scale-95"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
