import logo from '../assets/images/bee-arr-graphix-logo-original.webp'

export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      className={`flex items-center transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="Bee arR Graphix — home"
    >
      <span className="flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.35)]">
        <img src={logo} alt="" className="h-9 w-auto sm:h-10" />
      </span>
    </a>
  )
}
