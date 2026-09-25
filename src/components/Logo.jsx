import logo from '../assets/images/bee-arr-graphix-logo-original.webp'

export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      className={`flex items-center transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="Bee arR Graphix — home"
    >
      <img
        src={logo}
        alt=""
        className="h-16 w-auto"
        style={{
          filter:
            'drop-shadow(0 0 1px rgba(255,255,255,0.9)) drop-shadow(0 0 4px rgba(255,255,255,0.55)) drop-shadow(0 0 10px rgba(255,255,255,0.35))',
        }}
      />
    </a>
  )
}
