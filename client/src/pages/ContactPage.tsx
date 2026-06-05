import { FiMapPin, FiPhone, FiMail, FiClock, FiSearch } from "react-icons/fi";

function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#160f0b] text-[#fff4d6]">
      {/* Shared background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.22),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.14),transparent_34%)]" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.035]" />

      {/* Hero Header */}
      <section className="relative px-4 pb-9 pt-12 sm:px-6 lg:pt-14">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#24150f] shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)]">
            {/* Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.32),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(217,164,65,0.18),transparent_35%)]" />

            {/* Decorative record */}
            <div className="absolute -bottom-20 -right-16 hidden h-56 w-56 rounded-full border-[14px] border-[#1c1c1c] bg-[#050505] opacity-55 md:block">
              <div className="absolute inset-8 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-16 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute inset-24 rounded-full border border-[#fff4d6]/10" />
              <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-[6px] border-[#d9a441] bg-[#d12b1f]" />
            </div>

            <div className="relative px-5 py-10 md:px-10 md:py-12">
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#d9a441]/35 bg-[#0d0907]/80 px-3.5 py-1.5">
                <span className="h-2 w-2 rounded-full bg-[#d12b1f] shadow-[0_0_10px_#d12b1f]" />

                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  Contact The Shop
                </p>
              </div>

              <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tight sm:text-5xl md:text-6xl">
                Request A
                <span className="block text-[#d9a441]">Record.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-[#fff4d6]/65 sm:text-base">
                Looking for a certain album, artist, pressing, or classic
                record? Drop the details and we’ll keep an eye out.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 text-[10px] uppercase tracking-[0.18em] text-[#fff4d6]/45">
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
      <div className="relative border-y border-[#d9a441]/40 bg-[#d12b1f] py-2 shadow-[0_5px_0_#6b1f17]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.24em] text-[#fff4d6] md:text-xs">
            Tell Us What You Want • We’ll Dig Through The Crates
          </p>
        </div>
      </div>

      {/* Main Contact Area */}
      <section className="relative px-4 py-14 sm:px-6 lg:py-16">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#24150f] shadow-[0_0_0_5px_#6b1f17,0_20px_55px_rgba(0,0,0,0.4)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(209,43,31,0.2),transparent_35%)]" />

            <div className="relative p-5 md:p-6 lg:p-7">
              <div className="mb-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#d9a441]">
                  Leave A Note
                </p>

                <h2 className="mt-1.5 text-2xl font-black uppercase md:text-3xl">
                  What Are You Looking For?
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#fff4d6]/60">
                  Include the artist, album title, preferred format, condition,
                  price range, or any pressing details you care about.
                </p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#d9a441]">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border-2 border-[#fff4d6]/10 bg-[#0d0907] px-4 py-3 text-sm text-[#fff4d6] outline-none placeholder:text-[#fff4d6]/35 focus:border-[#d9a441]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#d9a441]">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl border-2 border-[#fff4d6]/10 bg-[#0d0907] px-4 py-3 text-sm text-[#fff4d6] outline-none placeholder:text-[#fff4d6]/35 focus:border-[#d9a441]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#d9a441]">
                    Reason
                  </label>
                  <select className="w-full rounded-xl border-2 border-[#fff4d6]/10 bg-[#0d0907] px-4 py-3 text-sm text-[#fff4d6] outline-none focus:border-[#d9a441]">
                    <option>Record request</option>
                    <option>Question about an order</option>
                    <option>Local pickup</option>
                    <option>Sell or trade records</option>
                    <option>General question</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#d9a441]">
                    Desired Record
                  </label>
                  <input
                    type="text"
                    placeholder="Example: Marvin Gaye - What’s Going On"
                    className="w-full rounded-xl border-2 border-[#fff4d6]/10 bg-[#0d0907] px-4 py-3 text-sm text-[#fff4d6] outline-none placeholder:text-[#fff4d6]/35 focus:border-[#d9a441]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.18em] text-[#d9a441]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us the artist, album, pressing, condition, budget, or any details that would help us find it..."
                    className="w-full resize-none rounded-xl border-2 border-[#fff4d6]/10 bg-[#0d0907] px-4 py-3 text-sm text-[#fff4d6] outline-none placeholder:text-[#fff4d6]/35 focus:border-[#d9a441]"
                  />
                </div>

                <div className="rounded-xl border-2 border-[#d9a441]/30 bg-[#0d0907] p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#fff4d6] bg-[#d9a441] text-[#160f0b]">
                      <FiSearch size={16} />
                    </div>

                    <div>
                      <h3 className="text-sm font-black uppercase tracking-wide">
                        Record Finder Note
                      </h3>
                      <p className="mt-1.5 text-xs leading-5 text-[#fff4d6]/60">
                        Looking for something specific? Leave the desired record
                        name, artist, year, version, or condition. If it shows
                        up, we can let you know.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="rounded-full border-2 border-[#fff4d6] bg-[#d9a441] px-6 py-3 text-xs font-black uppercase tracking-wide text-[#160f0b] shadow-[0_4px_0_#6b1f17] transition hover:translate-y-[2px] hover:shadow-[0_2px_0_#6b1f17]"
                >
                  Send Request
                </button>
              </form>
            </div>
          </div>

          {/* Side Info */}
          <div className="space-y-5">
            {/* Store Info Card */}
            <div className="relative overflow-hidden rounded-[1.5rem] border-4 border-[#d9a441] bg-[#fff4d6] p-5 text-[#160f0b] shadow-[0_0_0_5px_#6b1f17] md:p-6">
              <div className="absolute -bottom-12 -right-12 h-36 w-36 rounded-full border-[12px] border-[#1c1c1c] bg-[#050505] opacity-15" />

              <div className="relative">
                <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#d12b1f]">
                  Bowen Records
                </p>

                <h2 className="mt-1.5 text-2xl font-black uppercase">
                  Need Help Digging?
                </h2>

                <p className="mt-3 text-sm leading-6 text-[#160f0b]/65">
                  Send us what you’re after. Classic rock, soul, funk, jazz,
                  blues, R&B, disco, Motown, reggae, and other old-school
                  records are right in our lane.
                </p>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] p-4 shadow-[0_5px_0_#6b1f17]">
                <FiMapPin size={19} className="mb-3 text-[#d9a441]" />
                <h3 className="text-sm font-black uppercase">Location</h3>
                <p className="mt-1.5 text-xs text-[#fff4d6]/60">
                  Los Angeles, CA
                </p>
              </div>

              <div className="rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] p-4 shadow-[0_5px_0_#6b1f17]">
                <FiPhone size={19} className="mb-3 text-[#d9a441]" />
                <h3 className="text-sm font-black uppercase">Phone</h3>
                <p className="mt-1.5 text-xs text-[#fff4d6]/60">
                  Coming soon
                </p>
              </div>

              <div className="rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] p-4 shadow-[0_5px_0_#6b1f17]">
                <FiMail size={19} className="mb-3 text-[#d9a441]" />
                <h3 className="text-sm font-black uppercase">Email</h3>
                <p className="mt-1.5 text-xs text-[#fff4d6]/60">
                  info@bowenrecords.com
                </p>
              </div>

              <div className="rounded-2xl border border-[#fff4d6]/10 bg-[#24150f] p-4 shadow-[0_5px_0_#6b1f17]">
                <FiClock size={19} className="mb-3 text-[#d9a441]" />
                <h3 className="text-sm font-black uppercase">Hours</h3>
                <p className="mt-1.5 text-xs text-[#fff4d6]/60">
                  Mon–Sat: 10am–6pm
                </p>
              </div>
            </div>

            {/* Bottom Note */}
            <div className="rotate-[1deg] rounded-2xl border-2 border-[#fff4d6]/30 bg-[#d12b1f] p-4 shadow-[0_5px_0_#6b1f17]">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#fff4d6]/75">
                Pro Tip
              </p>

              <h3 className="mt-1.5 text-xl font-black uppercase">
                Be Specific.
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#fff4d6]/75">
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