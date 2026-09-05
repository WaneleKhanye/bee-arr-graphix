import { useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

const SWIPE_THRESHOLD = 50

export default function Lightbox({ items, index, onClose, onPrev, onNext }) {
  const touchStartX = useRef(null)
  const closeButtonRef = useRef(null)
  const previouslyFocusedRef = useRef(null)

  const item = items[index]

  useEffect(() => {
    previouslyFocusedRef.current = document.activeElement
    const previousOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    return () => {
      document.documentElement.style.overflow = previousOverflow
      if (previouslyFocusedRef.current instanceof HTMLElement) {
        previouslyFocusedRef.current.focus()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft' && items.length > 1) onPrev()
      if (event.key === 'ArrowRight' && items.length > 1) onNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [items.length, onClose, onPrev, onNext])

  if (!item) return null

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || items.length <= 1) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    if (delta > SWIPE_THRESHOLD) onPrev()
    else if (delta < -SWIPE_THRESHOLD) onNext()
    touchStartX.current = null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${item.title} — image viewer`}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white transition-colors duration-200 hover:border-white/30 hover:bg-ink focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none sm:top-6 sm:right-6"
      >
        <X className="h-5 w-5" strokeWidth={2} />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onPrev()
            }}
            aria-label="Previous image"
            className="absolute top-1/2 left-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white transition-colors duration-200 hover:border-white/30 hover:bg-ink focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2} />
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onNext()
            }}
            aria-label="Next image"
            className="absolute top-1/2 right-2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink/70 text-white transition-colors duration-200 hover:border-white/30 hover:bg-ink focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none sm:right-6"
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2} />
          </button>
        </>
      )}

      <figure
        className="flex max-h-full max-w-full flex-col items-center gap-4"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.alt}
          className="max-h-[80vh] max-w-[92vw] rounded-lg object-contain shadow-2xl sm:max-h-[85vh] sm:max-w-[88vw]"
        />
        <figcaption className="text-center">
          <p className="text-[0.65rem] font-semibold tracking-[0.25em] text-sky-soft uppercase">
            {item.category}
          </p>
          <p className="mt-1 font-display text-lg tracking-wide text-white uppercase">
            {item.title}
          </p>
        </figcaption>
      </figure>
    </div>
  )
}
