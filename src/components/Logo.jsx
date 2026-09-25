import fullLogo from '../assets/images/bee-arr-graphix-full-logo.png'

export default function Logo({ className = '' }) {
  return (
    <a
      href="#home"
      className={`flex items-center transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="Bee arR Graphix — home"
    >
      <img src={fullLogo} alt="" className="h-[72px] w-auto" />
    </a>
  )
}
