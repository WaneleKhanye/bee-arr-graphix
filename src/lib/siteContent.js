import { createContext, useContext } from 'react'
import { workItems as staticWorkItems } from '../data/work'
import { services as staticServices } from '../data/services'
import { droneServices as staticDroneOfferings } from '../data/drone-services'
import { contactDetails as staticContactDetails, whatsappMessage } from '../data/booking'
import { socialLinks as staticSocialLinks } from '../data/social'
import { policySections as staticPolicySections } from '../data/policy'

export const QUERY = /* groq */ `{
  "portfolioPhotos": *[_type == "portfolioPhoto"] | order(order asc, _createdAt desc) {
    title,
    alt,
    category,
    "imageUrl": photo.asset->url,
    "aspectRatio": photo.asset->metadata.dimensions.aspectRatio,
    "hotspot": photo.hotspot
  },
  "services": *[_type == "service" && available != false] | order(order asc, _createdAt asc) {
    title,
    description,
    "imageUrl": photo.asset->url,
    "aspectRatio": photo.asset->metadata.dimensions.aspectRatio,
    "hotspot": photo.hotspot
  },
  "droneSection": *[_type == "droneSection"][0]{ intro, offerings },
  "businessInfo": *[_type == "businessInfo"][0]{
    email, phone, whatsappNumber, locationText, instagramUrl, facebookUrl, youtubeUrl
  },
  "bookingPolicy": *[_type == "bookingPolicy"][0]{ title, sections },
  "homepage": *[_type == "homepage"][0]{ badgeText, introText },
  "about": *[_type == "about"][0]{ introText, secondaryText }
}`

// Existing static photos describe their crop/position with Tailwind class
// strings (e.g. "aspect-[3/4]", "object-[50%_15%]"). CMS photos describe the
// same thing with real image metadata (actual pixel dimensions, a
// drag-to-set focal point). Both get converted to the same plain numbers so
// the gallery renders photos from either source identically.
function aspectRatioFromClass(aspectClass, fallback = 1) {
  const match = aspectClass?.match(/aspect-\[(\d+(?:\.\d+)?)\/(\d+(?:\.\d+)?)\]/)
  return match ? Number(match[1]) / Number(match[2]) : fallback
}

function objectPositionFromClass(positionClass, fallback = '50% 50%') {
  if (!positionClass || positionClass === 'object-center') return fallback
  const match = positionClass.match(/object-\[([\d.]+)%_([\d.]+)%\]/)
  return match ? `${match[1]}% ${match[2]}%` : fallback
}

function objectPositionFromHotspot(hotspot, fallback = '50% 50%') {
  if (!hotspot) return fallback
  return `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
}

function mapStaticWorkItems() {
  return staticWorkItems.map((item) => ({
    image: item.image,
    title: item.title,
    alt: item.alt,
    category: item.category,
    aspectRatio: aspectRatioFromClass(item.aspect),
    objectPosition: objectPositionFromClass(item.position),
  }))
}

export function mapCmsWorkItems(photos) {
  return photos
    .filter((photo) => photo.imageUrl && photo.title && photo.category)
    .map((photo) => ({
      image: photo.imageUrl,
      title: photo.title,
      alt: photo.alt || photo.title,
      category: photo.category,
      aspectRatio: photo.aspectRatio || 1,
      objectPosition: objectPositionFromHotspot(photo.hotspot),
    }))
}

function mapStaticServices() {
  return staticServices.map((service) => ({
    image: service.image,
    title: service.title,
    description: service.description,
    alt: service.alt,
    aspectRatio: aspectRatioFromClass(service.aspect),
    objectPosition: objectPositionFromClass(service.position),
  }))
}

export function mapCmsServices(services) {
  return services
    .filter((service) => service.imageUrl && service.title && service.description)
    .map((service) => ({
      image: service.imageUrl,
      title: service.title,
      description: service.description,
      alt: service.title,
      aspectRatio: service.aspectRatio || 1,
      objectPosition: objectPositionFromHotspot(service.hotspot),
    }))
}

export function buildSocialLinks(businessInfo) {
  if (!businessInfo) return staticSocialLinks
  const { instagramUrl, facebookUrl, youtubeUrl } = businessInfo
  if (!instagramUrl && !facebookUrl && !youtubeUrl) return staticSocialLinks

  return staticSocialLinks.map((link) => {
    if (link.label === 'Instagram' && instagramUrl) return { ...link, href: instagramUrl }
    if (link.label === 'Facebook' && facebookUrl) return { ...link, href: facebookUrl }
    if (link.label === 'YouTube' && youtubeUrl) return { ...link, href: youtubeUrl }
    return link
  })
}

export function buildContactDetails(businessInfo) {
  if (!businessInfo?.email && !businessInfo?.phone && !businessInfo?.locationText) {
    return staticContactDetails
  }
  return {
    email: businessInfo.email || staticContactDetails.email,
    address: businessInfo.locationText || staticContactDetails.address,
    phoneDisplay: businessInfo.phone || staticContactDetails.phoneDisplay,
    whatsappNumber: businessInfo.whatsappNumber || staticContactDetails.whatsappNumber,
  }
}

export const FALLBACK_CONTENT = {
  workItems: mapStaticWorkItems(),
  services: mapStaticServices(),
  droneIntro:
    'Professional aerial photography and cinematic drone footage for events, cars, properties, businesses and special occasions.',
  droneOfferings: staticDroneOfferings,
  contactDetails: staticContactDetails,
  socialLinks: staticSocialLinks,
  policySections: staticPolicySections,
  heroContent: {
    badgeText: 'Now booking — aerial drone photography & videography',
    introText:
      'Bee arR Graphix creates premium photography, videography and aerial drone coverage for weddings, portraits, graduations and events.',
  },
  aboutContent: {
    introText:
      'Bee arR Graphix is a photography, videography and drone content business based in Daveyton — capturing meaningful moments through photography, video and aerial coverage.',
    secondaryText:
      'From weddings, graduations and events to studio portraits, outdoor shoots and business content, our goal is to create work that feels personal, polished and memorable.',
  },
}

export const SiteContentContext = createContext({
  ...FALLBACK_CONTENT,
  whatsappHref: `https://wa.me/${staticContactDetails.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
  policyTitle: 'Booking, Cancellation & Refund Policy',
  loading: false,
})

export function useSiteContent() {
  return useContext(SiteContentContext)
}
