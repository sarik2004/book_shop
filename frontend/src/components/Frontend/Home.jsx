import React from "react";
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import p3 from "../../img/p3.webp";
import p4 from "../../img/images.jpg";
import p5 from "../../img/images1.jpg";
import p6 from "../../img/images2.jpg";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6 py-16 sm:px-8 lg:px-12 mt-20">
      <section className="relative">
        <div className="absolute -left-24 top-10 hidden h-56 w-56 rounded-full bg-sky-100/80 blur-3xl lg:block" />
        <div className="absolute right-0 top-1/3 hidden h-72 w-72 rounded-full bg-amber-100/80 blur-3xl lg:block" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8 py-8 sm:py-12">
            <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-200/70">
              Curated for book lovers
            </span>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Discover your next favorite story with elegant book collections.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Browse curated novels, bestsellers, and exclusive editions in a
                premium shopping experience designed for modern readers.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#books"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/30"
              >
                View Books
              </a>
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              >
                Shop Now
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-slate-100/80 blur-3xl" />
            <div className="relative h-[520px] w-full max-w-xl">
              <div className="absolute left-0 top-8 z-20 w-44 rounded-[2rem] bg-white p-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.25)] transition duration-500 hover:-translate-y-2 sm:w-48 md:w-52 lg:left-6 lg:top-10">
                <img
                  src={p1}
                  alt="Featured book 1"
                  className="h-[330px] w-[280px] rounded-[1.75rem] object-cover shadow-xl shadow-slate-200/80"
                />
              </div>
              <div className="absolute right-0 top-24 z-30 w-52 -translate-x-4 transform rounded-[2.25rem] bg-white p-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.25)] transition duration-500 hover:-translate-y-3 sm:w-56 md:w-64 lg:right-10 lg:top-28">
                <img
                  src={p2}
                  alt="Featured book 2"
                  className="h-[300px] w-full rounded-[2rem] object-cover shadow-xl shadow-slate-200/80"
                />
              </div>
              <div className="absolute left-1/2 top-64 z-40 w-40 -translate-x-1/2 transform rounded-[2rem] bg-white p-3 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.25)] transition duration-500 hover:-translate-y-2 sm:w-44 md:w-48 lg:top-72">
                <img
                  src={p3}
                  alt="Featured book 3"
                  className="h-[300px] w-full rounded-[1.75rem] object-cover shadow-xl shadow-slate-200/80"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-white/90 to-transparent shadow-inner shadow-slate-100" />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900/70">
              Book highlights
            </p>
            <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Stories made to move you.
            </h2>
            <p className="max-w-2xl text-base leading-7 text-slate-600">
              Handpicked selections for every mood, with refined visuals and
              graceful spacing for a polished reading experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:bg-white">
              <img
                src={p4}
                alt="New arrivals"
                className="mb-5 h-56 w-full rounded-[1.75rem] object-cover"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                New arrivals
              </h3>
              <p className="mt-3 text-slate-600">
                Fresh releases and refined editions curated for your modern
                library.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:bg-white">
              <img
                src={p5}
                alt="Best sellers"
                className="mb-5 h-56 w-full rounded-[1.75rem] object-cover"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                Best sellers
              </h3>
              <p className="mt-3 text-slate-600">
                Discover the books everyone is talking about in a clean, premium
                layout.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-50/80 p-6 shadow-sm shadow-slate-200/50 transition duration-300 hover:-translate-y-1 hover:bg-white">
              <img
                src={p6}
                alt="Curated picks"
                className="mb-5 h-56 w-full rounded-[1.75rem] object-cover"
              />
              <h3 className="text-xl font-semibold text-slate-950">
                Curated picks
              </h3>
              <p className="mt-3 text-slate-600">
                Thoughtful recommendations for a personal and immersive reading
                journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
