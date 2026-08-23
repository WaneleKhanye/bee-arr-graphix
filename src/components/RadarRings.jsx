import { motion } from 'framer-motion'
import { Drone } from 'lucide-react'

export default function RadarRings() {
  const rings = [1, 2, 3, 4]

  return (
    <div className="relative flex aspect-square w-full max-w-md items-center justify-center">
      {rings.map((ring) => (
        <span
          key={ring}
          className="absolute rounded-full border border-sky/20"
          style={{
            inset: `${(ring - 1) * 12.5}%`,
          }}
        />
      ))}

      <motion.span
        aria-hidden="true"
        className="absolute inset-0 origin-center rounded-full"
        style={{
          background:
            'conic-gradient(from 0deg, transparent 0deg, rgba(52,227,224,0.35) 25deg, transparent 60deg)',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />

      <div className="absolute inset-[12.5%] rounded-full bg-sky/5 blur-2xl" />

      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-sky/40 bg-charcoal-soft/80 shadow-[0_0_45px_-10px_rgba(52,227,224,0.6)] backdrop-blur">
        <Drone className="h-10 w-10 text-sky-soft" strokeWidth={1.5} />
      </div>

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.6,
          }}
        >
          <span
            className="absolute h-1.5 w-1.5 rounded-full bg-sky shadow-[0_0_10px_2px_rgba(52,227,224,0.8)]"
            style={{ top: `${(i + 1) * 12}%`, left: '50%' }}
          />
        </motion.div>
      ))}
    </div>
  )
}
