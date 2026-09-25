import logo from '../assets/images/bee-arr-graphix-logo-original.webp'

export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      className={`flex items-center transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="Bee arR Graphix — home"
    >
      <span className="flex h-[72px] items-center rounded-xl bg-white px-3">
        <img src={logo} alt="" className="h-14 w-auto" />
      </span>
    </a>
  )
}
