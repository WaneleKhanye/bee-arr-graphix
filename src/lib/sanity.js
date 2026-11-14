import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID
const dataset = import.meta.env.VITE_SANITY_DATASET

// Content editing is optional infrastructure: if the project isn't
// configured (e.g. a local checkout without the env vars set), the site
// simply renders its built-in content instead of failing to build or load.
export const sanityEnabled = Boolean(projectId && dataset)

export const sanityClient = sanityEnabled
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn: true,
    })
  : null

const imageBuilder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlForImage(source) {
  if (!imageBuilder || !source) return null
  return imageBuilder.image(source)
}

// A Sanity image's hotspot (0–1 range) maps directly to a CSS object-position
// percentage, so the focal point the owner sets in the Studio is respected
// without any extra technical field.
export function objectPositionForImage(source) {
  const hotspot = source?.hotspot
  if (!hotspot) return '50% 50%'
  return `${Math.round(hotspot.x * 100)}% ${Math.round(hotspot.y * 100)}%`
}

export function aspectRatioForImage(source, fallback = 1) {
  const dimensions = source?.asset?.metadata?.dimensions
  if (!dimensions?.width || !dimensions?.height) return fallback
  return dimensions.width / dimensions.height
}
