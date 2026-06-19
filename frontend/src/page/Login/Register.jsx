import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../Api/api";
import BookRegister from "../../img/BookRegister.jpg";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Register
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await API.post("/auth/register", form);

      alert("Register successful. Please login.");

      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Register failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center px-4 py-10 mt-10">
      <div className="w-full  max-w-5xl overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/95 shadow-2xl shadow-slate-950/40 lg:h-[34rem]">
        <div className="flex h-full flex-col lg:flex-row">
          <div className="hidden lg:block lg:h-full lg:w-1/2">
            <img
              src={BookRegister}
              alt="register"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="w-full lg:w-1/2 bg-slate-950 p-8 sm:p-10">
            <div className="mb-8 text-center lg:text-left">
              <p className=" text-center text-sm uppercase tracking-[0.35em] text-cyan-400">
                Create Account
              </p>
            </div>

            <form onSubmit={handleRegister} className="space-y-6">
              <label className="block">
                <span className="text-sm font-medium text-slate-300">
                  Full Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-300">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
              </label>

              <label className="block relative">
                <span className="text-sm font-medium text-slate-300">
                  Password
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 pr-24 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-12 text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </label>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-slate-700"
              >
                {loading ? "Registering..." : "Register"}
              </button>
            </form>

            <div className="mt-6 border-t border-slate-800 pt-5 text-center text-sm text-slate-500">
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="font-semibold text-cyan-400 hover:text-cyan-300"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
