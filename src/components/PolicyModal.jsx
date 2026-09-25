import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { policySections } from '../data/policy'

export default function PolicyModal({ onClose }) {
  const closeButtonRef = useRef(null)
  const previouslyFocusedRef = useRef(null)

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
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-charcoal-line bg-charcoal-soft shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-charcoal-line px-6 py-5 sm:px-8">
          <h2
            id="policy-modal-title"
            className="font-display text-2xl tracking-wide text-white uppercase sm:text-3xl"
          >
            Booking, Cancellation &amp; Refund Policy
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close policy"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-charcoal-line text-white transition-colors duration-200 hover:border-white/30 hover:bg-ink focus-visible:ring-2 focus-visible:ring-gold focus-visible:outline-none"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-6 sm:px-8">
          {policySections.map((section) => (
            <div key={section.heading} className="mb-6 last:mb-0">
              <h3 className="text-sm font-semibold tracking-[0.15em] text-gold-soft uppercase">
                {section.heading}
              </h3>
              {section.body && (
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {section.body}
                </p>
              )}
              {section.items && (
                <ul className="mt-2 flex flex-col gap-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-2 text-sm leading-relaxed text-white/70">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-soft" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
