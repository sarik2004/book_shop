import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-50 pt-32 text-slate-900">
      <section className="relative overflow-hidden bg-white py-20">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-100/80 to-transparent" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">
                Get in touch
              </span>
              <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                We’re here to help every step of the way.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Whether you want to ask about orders, explore partnerships, or
                share feedback, our team is ready to make your bookstore
                experience exceptional.
              </p>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -left-10 top-12 h-32 w-32 rounded-full bg-emerald-100/80 blur-3xl" />
              <div className="pointer-events-none absolute -right-10 bottom-10 h-40 w-40 rounded-full bg-slate-100/80 blur-3xl" />
              <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.25)]">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                  Contact hub
                </p>
                <h2 className="mt-6 text-3xl font-semibold">
                  Reach out anytime with confidence.
                </h2>
                <p className="mt-4 text-slate-300 leading-8">
                  Our support team is available across email, phone, and live
                  chat to answer questions and keep your reading journey smooth.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-300">
                      Support hours
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Mon - Fri, 9am - 7pm
                    </p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-300">
                      Quick response
                    </p>
                    <p className="mt-2 text-lg font-semibold">
                      Usually within one business hour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-slate-950">
              Customer Support
            </h3>
            <p className="mt-4 text-slate-600">
              Contact our friendly support team about orders, returns, and
              account questions.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="font-semibold">Phone</p>
              <p className="text-slate-500">+1 (800) 123-BOOK</p>
              <p className="font-semibold">Email</p>
              <p className="text-slate-500">support@bookshop.com</p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-slate-950">
              Partnerships
            </h3>
            <p className="mt-4 text-slate-600">
              Interested in working together? Reach out to discuss
              collaborations, events, and content partnerships.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="font-semibold">Email</p>
              <p className="text-slate-500">partners@bookshop.com</p>
              <p className="font-semibold">Office</p>
              <p className="text-slate-500">Suite 402, Book Street, NY</p>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-8 shadow-lg shadow-slate-200/50 transition duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold text-slate-950">Feedback</h3>
            <p className="mt-4 text-slate-600">
              Share your thoughts, suggestions, or feature ideas to help us
              refine the bookstore experience.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="font-semibold">Email</p>
              <p className="text-slate-500">feedback@bookshop.com</p>
              <p className="font-semibold">Live Chat</p>
              <p className="text-slate-500">
                Available on site during support hours
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-20 text-white">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                Need help now?
              </p>
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Start a conversation with our team.
              </h2>
              <p className="max-w-2xl leading-8 text-slate-300">
                We’re happy to answer your questions and help you find the
                perfect book or service for your needs.
              </p>
            </div>
            <div className="space-y-6 rounded-[2rem] bg-white/5 p-8 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                  Quick contact
                </p>
                <p className="mt-4 text-lg font-semibold">
                  support@bookshop.com
                </p>
                <p className="mt-2 text-slate-300">
                  We aim to respond within one business hour.
                </p>
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-6">
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                  Phone support
                </p>
                <p className="mt-4 text-lg font-semibold">+1 (800) 123-BOOK</p>
                <p className="mt-2 text-slate-300">
                  Available Mon-Fri from 9am to 7pm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
