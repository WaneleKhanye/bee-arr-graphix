import { useRef, useState } from 'react'
import { Pause, Play } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import droneVideo from '../assets/video/drone-coverage.mp4'
import droneVideoPoster from '../assets/images/drone-coverage-poster.jpg'

export default function DroneReel({
  className = '',
  videoSrc = droneVideo,
  posterSrc = droneVideoPoster,
  posterAlt = 'Aerial drone still of an event marquee',
  label = 'Aerial Cinematography',
  autoPlay = true,
}) {
  const [ref, inView] = useInView({ rootMargin: '300px' })
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)

  const togglePlay = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      el.play()
      setIsPlaying(true)
    } else {
      el.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div
      ref={ref}
      className={`group relative aspect-video overflow-hidden rounded-2xl ${className}`}
    >
      {inView ? (
        <video
          ref={videoRef}
          autoPlay={autoPlay}
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          className="h-full w-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          src={posterSrc}
          alt={posterAlt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />

      {!autoPlay && inView && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
          className="absolute inset-0 flex items-center justify-center focus-visible:outline-none"
        >
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full bg-ink/60 backdrop-blur-sm ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 focus-visible:scale-105 ${
              isPlaying ? 'opacity-0 group-hover:opacity-90 group-focus-visible:opacity-90' : 'opacity-100'
            }`}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 text-white" fill="currentColor" strokeWidth={0} />
            ) : (
              <Play className="h-5 w-5 translate-x-0.5 text-white" fill="currentColor" strokeWidth={0} />
            )}
          </span>
        </button>
      )}

      <div className="pointer-events-none absolute bottom-5 left-5 flex items-center gap-2">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky" />
        </span>
        <p className="text-[0.65rem] font-medium tracking-[0.3em] text-white/80 uppercase whitespace-nowrap">
          {label}
        </p>
      </div>
    </div>
  )
}
