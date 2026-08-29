import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { contactDetails, serviceOptions } from '../data/booking'

const inputClass =
  'w-full rounded-xl border border-charcoal-line bg-charcoal-soft/60 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors duration-300 focus:border-gold/60 [color-scheme:dark]'

const labelClass =
  'mb-2 block text-xs font-semibold tracking-[0.2em] text-white/50 uppercase'

const whatsappHref = `https://wa.me/${contactDetails.whatsappNumber}`
const mailHref = `mailto:${contactDetails.email}`
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`

const contactRows = [
  { icon: Mail, label: 'Email', value: contactDetails.email, href: mailHref },
  { icon: MapPin, label: 'Address', value: contactDetails.address, href: directionsHref },
  { icon: Phone, label: 'Phone / WhatsApp', value: contactDetails.phoneDisplay, href: whatsappHref },
]

function handleSubmit(event) {
  event.preventDefault()
}

export default function BookingContact() {
  return (
    <section id="contact" className="bg-ink px-6 py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold tracking-[0.35em] text-gold-soft uppercase">
            Booking &amp; Contact
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-wide text-white uppercase sm:text-6xl">
            Let&apos;s Create Something
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/60">
            Tell us about your shoot and we&apos;ll get back to you — or
            message us directly on WhatsApp for the fastest response.
          </p>
        </motion.div>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-charcoal-line bg-charcoal-soft/40 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+27 00 000 0000"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>
                  Service
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  defaultValue=""
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className={labelClass}>
                  Preferred Date
                </label>
                <input id="date" name="date" type="date" className={inputClass} />
              </div>

              <div>
                <label htmlFor="location" className={labelClass}>
                  Shoot Location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Venue, suburb or city"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className={labelClass}>
                Message / Tell Us About Your Shoot
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Share a few details about what you have in mind..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-7 py-4 text-sm font-semibold tracking-wide text-ink transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
            >
              Request Booking
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col rounded-2xl border border-charcoal-line bg-charcoal-soft/40 p-6 sm:p-8"
          >
            <p className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase">
              Contact Details
            </p>

            <ul className="mt-5 flex flex-col gap-4">
              {contactRows.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-start gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-charcoal-line bg-charcoal-soft transition-colors duration-300 group-hover:border-gold/50">
                      <Icon className="h-4 w-4 text-gold-soft" strokeWidth={1.75} />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold tracking-[0.15em] text-white/40 uppercase">
                        {label}
                      </span>
                      <span className="text-sm font-medium text-white/85 transition-colors duration-300 group-hover:text-white">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft to-gold px-6 py-4 text-sm font-semibold tracking-wide text-ink shadow-[0_0_35px_-12px_rgba(201,162,75,0.9)] transition-transform duration-300 hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2} />
                Message on WhatsApp
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={mailHref}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-charcoal-line px-4 py-3 text-xs font-semibold tracking-wide text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" strokeWidth={2} />
                  Send Email
                </a>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-charcoal-line px-4 py-3 text-xs font-semibold tracking-wide text-white/80 transition-colors duration-300 hover:border-white/30 hover:text-white"
                >
                  <MapPin className="h-3.5 w-3.5" strokeWidth={2} />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
