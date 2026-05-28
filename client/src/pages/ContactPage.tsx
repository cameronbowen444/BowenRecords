import { FiMapPin, FiPhone, FiMail, FiClock, FiSearch } from "react-icons/fi";

function ContactPage() {
  return (
    <main className="min-h-screen bg-[#160f0b] text-[#fff4d6] overflow-hidden">
      {/* Shared background */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.28),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.045] bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Hero Header */}
      <section className="relative px-6 pt-16 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.4),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.24),transparent_35%)]" />

            {/* Decorative record */}
            <div className="absolute -right-24 -bottom-28 w-80 h-80 rounded-full bg-[#050505] border-[22px] border-[#1c1c1c] opacity-60 hidden md:block">
              <div className="absolute inset-10 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-20 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-28 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d12b1f] border-8 border-[#d9a441]" />
            </div>

            <div className="relative px-6 py-14 md:px-12 md:py-16">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#d9a441]/40 bg-[#0d0907]/80 px-5 py-2 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d12b1f] shadow-[0_0_12px_#d12b1f]" />

                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Contact The Shop
                </p>
              </div>

              <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tight">
                Request A
                <span className="block text-[#d9a441]">Record.</span>
              </h1>

              <p className="text-[#fff4d6]/65 mt-6 max-w-2xl text-lg leading-relaxed">
                Looking for a certain album, artist, pressing, or classic record?
                Drop the details and we’ll keep an eye out.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-[#fff4d6]/45">
                <span>Record Requests</span>
                <span>•</span>
                <span>Order Questions</span>
                <span>•</span>
                <span>Rare Finds</span>
                <span>•</span>
                <span>Local Pickup</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retro Divider */}
      <div className="relative border-y-2 border-[#d9a441]/40 bg-[#d12b1f] py-3 shadow-[0_8px_0_#6b1f17]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs md:text-sm font-black uppercase tracking-[0.35em] text-[#fff4d6]">
            Tell Us What You Want • We’ll Dig Through The Crates
          </p>
        </div>
      </div>

      {/* Main Contact Area */}
      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10">
          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#24150f] shadow-[0_0_0_8px_#6b1f17,0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.25),transparent_35%)]" />

            <div className="relative p-6 md:p-8 lg:p-10">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a441]">
                  Leave A Note
                </p>

                <h2 className="text-3xl md:text-4xl font-black uppercase mt-2">
                  What Are You Looking For?
                </h2>

                <p className="text-[#fff4d6]/60 mt-4 leading-relaxed">
                  Include the artist, album title, preferred format, condition,
                  price range, or any pressing details you care about.
                </p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                    Reason
                  </label>
                  <select className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] outline-none focus:border-[#d9a441]">
                    <option>Record request</option>
                    <option>Question about an order</option>
                    <option>Local pickup</option>
                    <option>Sell or trade records</option>
                    <option>General question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                    Desired Record
                  </label>
                  <input
                    type="text"
                    placeholder="Example: Marvin Gaye - What’s Going On"
                    className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.22em] text-[#d9a441] mb-2">
                    Message
                  </label>
                  <textarea
                    rows={7}
                    placeholder="Tell us the artist, album, pressing, condition, budget, or any details that would help us find it..."
                    className="w-full rounded-2xl bg-[#0d0907] border-2 border-[#fff4d6]/10 px-5 py-4 text-[#fff4d6] placeholder:text-[#fff4d6]/35 outline-none focus:border-[#d9a441] resize-none"
                  />
                </div>

                <div className="rounded-2xl bg-[#0d0907] border-2 border-[#d9a441]/30 p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-full bg-[#d9a441] text-[#160f0b] flex items-center justify-center border-2 border-[#fff4d6]">
                      <FiSearch size={20} />
                    </div>

                    <div>
                      <h3 className="font-black uppercase tracking-wide">
                        Record Finder Note
                      </h3>
                      <p className="text-[#fff4d6]/60 text-sm mt-2 leading-relaxed">
                        Looking for something specific? Leave the desired record
                        name, artist, year, version, or condition. If it shows up,
                        we can let you know.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#d9a441] text-[#160f0b] px-8 py-4 rounded-full font-black uppercase tracking-wide border-2 border-[#fff4d6] shadow-[0_6px_0_#6b1f17] hover:translate-y-[3px] hover:shadow-[0_3px_0_#6b1f17] transition"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>

          {/* Side Info */}
          <div className="space-y-6">
            {/* Store Info Card */}
            <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-[#d9a441] bg-[#fff4d6] text-[#160f0b] p-6 md:p-8 shadow-[0_0_0_8px_#6b1f17]">
              <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-[#050505] border-[16px] border-[#1c1c1c] opacity-15" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d12b1f] font-black">
                  Bowen Records
                </p>

                <h2 className="text-3xl font-black uppercase mt-2">
                  Need Help Digging?
                </h2>

                <p className="text-[#160f0b]/65 mt-4 leading-relaxed">
                  Send us what you’re after. Classic rock, soul, funk, jazz,
                  blues, R&B, disco, Motown, reggae, and other old-school records
                  are right in our lane.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
              <div className="rounded-[1.5rem] bg-[#24150f] border-2 border-[#fff4d6]/10 p-6 shadow-[0_8px_0_#6b1f17]">
                <FiMapPin size={24} className="text-[#d9a441] mb-4" />
                <h3 className="font-black uppercase">Location</h3>
                <p className="text-[#fff4d6]/60 text-sm mt-2">
                  Los Angeles, CA
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-[#24150f] border-2 border-[#fff4d6]/10 p-6 shadow-[0_8px_0_#6b1f17]">
                <FiPhone size={24} className="text-[#d9a441] mb-4" />
                <h3 className="font-black uppercase">Phone</h3>
                <p className="text-[#fff4d6]/60 text-sm mt-2">
                  Coming soon
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-[#24150f] border-2 border-[#fff4d6]/10 p-6 shadow-[0_8px_0_#6b1f17]">
                <FiMail size={24} className="text-[#d9a441] mb-4" />
                <h3 className="font-black uppercase">Email</h3>
                <p className="text-[#fff4d6]/60 text-sm mt-2">
                  info@bowenrecords.com
                </p>
              </div>

              <div className="rounded-[1.5rem] bg-[#24150f] border-2 border-[#fff4d6]/10 p-6 shadow-[0_8px_0_#6b1f17]">
                <FiClock size={24} className="text-[#d9a441] mb-4" />
                <h3 className="font-black uppercase">Hours</h3>
                <p className="text-[#fff4d6]/60 text-sm mt-2">
                  Mon–Sat: 10am–6pm
                </p>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="rounded-[1.5rem] bg-[#d12b1f] border-2 border-[#fff4d6]/30 p-6 shadow-[0_8px_0_#6b1f17] rotate-[1deg]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#fff4d6]/75">
                Pro Tip
              </p>

              <h3 className="text-2xl font-black uppercase mt-2">
                Be Specific.
              </h3>

              <p className="text-[#fff4d6]/75 mt-3 leading-relaxed">
                The more details you leave, the better chance we have of finding
                the exact record you want.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;