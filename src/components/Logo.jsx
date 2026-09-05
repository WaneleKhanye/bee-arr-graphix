import logoMark from '../assets/images/bee-arr-graphix-lens-mark.jpg'

export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      className={`group flex items-center gap-2.5 ${className}`}
      aria-label="Bee arR Graphix — home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gold-dim/70 bg-charcoal-soft transition-colors duration-300 group-hover:border-gold">
        <img
          src={logoMark}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:rotate-90"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-[0.14em] text-white">
          BEE ARR
        </span>
        <span className="font-display text-[0.65rem] tracking-[0.5em] text-gold-soft">
          GRAPHIX
        </span>
      </span>
    </a>
  )
}
