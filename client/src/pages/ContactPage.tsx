import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";

function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            Contact
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mt-3">
            Get in Touch
          </h1>

          <p className="text-white/60 mt-4 max-w-2xl leading-relaxed">
            Have a question about a record, order, trade-in, or local pickup?
            Send us a message and we’ll get back to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 text-white outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 text-white outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 text-white outline-none focus:border-white/40"
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-2xl bg-black border border-white/10 px-5 py-4 text-white outline-none focus:border-white/40 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-white/80 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white text-black rounded-3xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Store Info</h2>

              <p className="text-black/60 leading-relaxed">
                Bowen Records sells new and used records, CDs, cassettes, and
                rare music finds. Reach out for product questions, availability,
                or local pickup details.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <FiMapPin size={24} className="text-white/70 mb-4" />
                <h3 className="font-semibold">Location</h3>
                <p className="text-white/60 text-sm mt-2">
                  Los Angeles, CA
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <FiPhone size={24} className="text-white/70 mb-4" />
                <h3 className="font-semibold">Phone</h3>
                <p className="text-white/60 text-sm mt-2">
                  Coming soon
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <FiMail size={24} className="text-white/70 mb-4" />
                <h3 className="font-semibold">Email</h3>
                <p className="text-white/60 text-sm mt-2">
                  info@bowenrecords.com
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
                <FiClock size={24} className="text-white/70 mb-4" />
                <h3 className="font-semibold">Hours</h3>
                <p className="text-white/60 text-sm mt-2">
                  Mon–Sat: 10am–6pm
                </p>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8">
              <h3 className="text-xl font-bold">Looking for something specific?</h3>
              <p className="text-white/60 mt-3 leading-relaxed">
                Send us the artist, album title, format, and condition you’re
                looking for. We can let you know if it’s available or added later.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;