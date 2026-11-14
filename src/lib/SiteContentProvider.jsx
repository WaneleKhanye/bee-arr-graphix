import { useEffect, useMemo, useState } from 'react'
import { sanityClient, sanityEnabled } from './sanity'
import {
  QUERY,
  FALLBACK_CONTENT,
  SiteContentContext,
  mapCmsWorkItems,
  mapCmsServices,
  buildContactDetails,
  buildSocialLinks,
} from './siteContent'
import { whatsappMessage } from '../data/booking'

export function SiteContentProvider({ children }) {
  const [cms, setCms] = useState(null)

  useEffect(() => {
    if (!sanityEnabled) return
    let cancelled = false

    sanityClient
      .fetch(QUERY)
      .then((result) => {
        if (!cancelled) setCms(result)
      })
      .catch((error) => {
        // Fail gracefully: keep showing the site's built-in content rather
        // than a broken or empty page if Sanity is unreachable.
        console.error('Could not load content from Sanity, showing built-in content instead.', error)
      })

    return () => {
      cancelled = true
    }
  }, [])

  const value = useMemo(() => {
    const workItems = cms?.portfolioPhotos?.length
      ? mapCmsWorkItems(cms.portfolioPhotos)
      : FALLBACK_CONTENT.workItems

    const services = cms?.services?.length
      ? mapCmsServices(cms.services)
      : FALLBACK_CONTENT.services

    const droneIntro = cms?.droneSection?.intro || FALLBACK_CONTENT.droneIntro
    const droneOfferings = cms?.droneSection?.offerings?.length
      ? cms.droneSection.offerings
      : FALLBACK_CONTENT.droneOfferings

    const contactDetails = buildContactDetails(cms?.businessInfo)
    const socialLinks = buildSocialLinks(cms?.businessInfo)
    const whatsappHref = `https://wa.me/${contactDetails.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

    const policySections = cms?.bookingPolicy?.sections?.length
      ? cms.bookingPolicy.sections
      : FALLBACK_CONTENT.policySections
    const policyTitle = cms?.bookingPolicy?.title || 'Booking, Cancellation & Refund Policy'

    const heroContent = {
      badgeText: cms?.homepage?.badgeText || FALLBACK_CONTENT.heroContent.badgeText,
      introText: cms?.homepage?.introText || FALLBACK_CONTENT.heroContent.introText,
    }

    const aboutContent = {
      introText: cms?.about?.introText || FALLBACK_CONTENT.aboutContent.introText,
      secondaryText: cms?.about?.secondaryText || FALLBACK_CONTENT.aboutContent.secondaryText,
    }

    return {
      workItems,
      services,
      droneIntro,
      droneOfferings,
      contactDetails,
      socialLinks,
      whatsappHref,
      policySections,
      policyTitle,
      heroContent,
      aboutContent,
      loading: sanityEnabled && cms === null,
    }
  }, [cms])

  return (
    <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>
  )
}
