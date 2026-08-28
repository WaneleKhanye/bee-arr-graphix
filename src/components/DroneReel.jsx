import { useInView } from '../hooks/useInView'
import droneVideo from '../assets/video/drone-coverage.mp4'
import droneVideoPoster from '../assets/images/drone-coverage-poster.jpg'

export default function DroneReel({ className = '' }) {
  const [ref, inView] = useInView({ rootMargin: '300px' })

  return (
    <div
      ref={ref}
      className={`relative aspect-video overflow-hidden rounded-2xl ${className}`}
    >
      {inView ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={droneVideoPoster}
          className="h-full w-full object-cover"
        >
          <source src={droneVideo} type="video/mp4" />
        </video>
      ) : (
        <img
          src={droneVideoPoster}
          alt="Aerial drone still of an event marquee"
          className="h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

      <div className="absolute bottom-5 left-5 flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky" />
        </span>
        <p className="text-[0.65rem] font-medium tracking-[0.3em] text-white/80 uppercase whitespace-nowrap">
          Aerial Cinematography
        </p>
      </div>
    </div>
  )
}
