import { Mail, MapPin, Phone } from 'lucide-react'
import Logo from '../components/Logo'
import { contactDetails, whatsappHref } from '../data/booking'
import { navLinks } from '../data/navigation'
import { socialLinks } from '../data/social'

const mailHref = `mailto:${contactDetails.email}`
const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactDetails.address)}`

const contactRows = [
  { icon: Mail, value: contactDetails.email, href: mailHref },
  { icon: Phone, value: contactDetails.phoneDisplay, href: whatsappHref },
  { icon: MapPin, value: contactDetails.address, href: directionsHref },
]

function ColumnHeading({ children }) {
  return (
    <h3 className="text-xs font-semibold tracking-[0.3em] text-white/40 uppercase">
      {children}
    </h3>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-charcoal-line bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.2fr_1fr] lg:gap-12">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Photography <span className="text-gold-soft">•</span> Videography{' '}
              <span className="text-sky-soft">•</span> Drone Services
            </p>
          </div>

          <div>
            <ColumnHeading>Quick Links</ColumnHeading>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Contact</ColumnHeading>
            <ul className="mt-4 flex flex-col gap-3">
              {contactRows.map(({ icon: Icon, value, href }) => (
                <li key={value}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noreferrer' : undefined}
                    className="flex items-start gap-2.5 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-soft" strokeWidth={1.75} />
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Follow Us</ColumnHeading>
            <div className="mt-4 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-charcoal-line transition-colors duration-300 hover:border-gold/50"
                >
                  <Icon className="h-4 w-4 text-gold-soft" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal-line pt-6 lg:mt-16">
          <p className="text-center text-xs text-white/40">
            © 2026 Bee arR Graphix. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
