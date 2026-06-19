import React from "react";
import storyImage from "../../img/images.jpg";
import missionImage from "../../img/images1.jpg";
import communityImage from "../../img/images2.jpg";

const About = () => {
  return (
    <div className="bg-slate-50 pt-32 text-slate-900">
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-100/80 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
                About Book Shop
              </span>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                We bring your favorite stories to life with thoughtful curation
                and beautiful design.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Our bookstore blends modern convenience with a warm,
                community-first experience. Whether you’re searching for a new
                bestseller or a timeless classic, we make every visit feel
                inspiring.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#story"
                  className="inline-flex items-center justify-center rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-slate-800"
                >
                  Our Story
                </a>
                <a
                  href="#mission"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-slate-50"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -left-10 top-12 h-32 w-32 rounded-full bg-sky-100/70 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-amber-100/70 blur-3xl" />
              <img
                src={storyImage}
                alt="Books and reading"
                className="relative mx-auto h-[420px] max-w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-40px_rgba(15,23,42,0.25)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-900/70">
              Our story
            </p>
            <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl">
              A modern bookstore with an old-school sense of wonder.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Founded by readers, for readers, our shop champions meaningful
              stories and exceptional book discoveries. Every collection is
              chosen to delight, educate, and inspire.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <h3 className="text-xl font-semibold text-slate-950">
                  Curated selections
                </h3>
                <p className="mt-3 text-slate-600">
                  Handpicked books from emerging voices and beloved authors.
                </p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <h3 className="text-xl font-semibold text-slate-950">
                  Expert recommendations
                </h3>
                <p className="mt-3 text-slate-600">
                  Book guidance that helps you choose the perfect next read.
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="overflow-hidden rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-950/10">
              <p className="text-sm uppercase tracking-[0.2em] text-amber-300">
                Featured moment
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                Reading feels like a gift.
              </h3>
              <p className="mt-3 text-slate-300">
                Every book is an invitation — to explore, to grow, and to
                connect with stories that stay with you.
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-700 to-slate-900 p-6 text-white shadow-xl shadow-slate-950/10">
              <p className="text-sm uppercase tracking-[0.2em] text-emerald-300">
                Community
              </p>
              <h3 className="mt-4 text-2xl font-semibold">
                A gathering place for book lovers.
              </h3>
              <p className="mt-3 text-slate-200">
                Our readers find new favorites, join discussions, and discover
                stories that matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-slate-900 py-20 text-slate-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <img
              src={missionImage}
              alt="Bookshop interior"
              className="rounded-[2rem] object-cover shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)]"
            />
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
                Mission & values
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                We believe beautiful books should be easy to find.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Our mission is to create a premium, welcoming bookstore where
                every page feels accessible and every recommendation feels
                personal.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Inclusive reading
                  </h3>
                  <p className="mt-3 text-slate-400">
                    Books for every reader, every interest, and every age.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-700 bg-slate-950/90 p-6">
                  <h3 className="text-xl font-semibold text-white">
                    Premium experience
                  </h3>
                  <p className="mt-3 text-slate-400">
                    Beautiful visuals, thoughtful content, and seamless
                    shopping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50">
            <h3 className="text-2xl font-semibold text-slate-950">
              Community events
            </h3>
            <p className="mt-4 text-slate-600">
              Join author talks, book clubs, and seasonal reading challenges for
              an engaging community experience.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50">
            <h3 className="text-2xl font-semibold text-slate-950">
              Personalized picks
            </h3>
            <p className="mt-4 text-slate-600">
              Discover tailored recommendations based on your favorite genres
              and past reads.
            </p>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50">
            <h3 className="text-2xl font-semibold text-slate-950">
              Fast delivery
            </h3>
            <p className="mt-4 text-slate-600">
              Enjoy quick shipping and thoughtful packaging for every order.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
