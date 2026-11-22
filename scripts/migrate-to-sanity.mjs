// One-time migration: pushes the website's current hard-coded content into
// Sanity, so the CMS starts out with exactly what's already live. Safe to
// re-run — singleton documents are replaced in place, and portfolio/service
// photos are matched by title so re-running won't create duplicates.
//
// Usage:
//   SANITY_WRITE_TOKEN=sk... node scripts/migrate-to-sanity.mjs
//
// The token needs write access to the "production" dataset of project
// zjf1ihve. Create one at sanity.io/manage → your project → API → Tokens
// → "Add API token" → permission "Editor". Treat it like a password: never
// commit it, and revoke it once the migration is done (it's only needed
// once).

import { createClient } from '@sanity/client'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetPath = (file) => path.join(__dirname, '../src/assets/images', file)

const token = process.env.SANITY_WRITE_TOKEN
if (!token) {
  console.error(
    'Missing SANITY_WRITE_TOKEN. Set it to a Sanity API token with Editor (write) access before running this script.',
  )
  process.exit(1)
}

const client = createClient({
  projectId: 'zjf1ihve',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

// ---- Content to migrate (mirrors src/data/*.js at the time this was written) ----

const portfolioPhotos = [
  { file: 'male-outdoor-portrait.jpeg', category: 'Portraits', title: 'Golden Hour Portrait', alt: 'Outdoor portrait of a man in a red coat under an open sky', order: 1 },
  { file: 'female-portrait.jpeg', category: 'Portraits', title: 'Street Style Portrait', alt: 'Portrait of a woman in a headscarf smiling outdoors', order: 2 },
  { file: 'graduation-portrait.jpeg', category: 'Graduations', title: 'Graduation Day', alt: 'Two graduates in academic gowns posing together', order: 3 },
  { file: 'traditional-wedding-ceremony.jpeg', category: 'Weddings', title: 'Traditional Ceremony', alt: 'Family in traditional wedding attire walking together', order: 4 },
  { file: 'wedding-reception-hall.jpeg', category: 'Weddings', title: 'Reception Coverage', alt: 'Wide view of a decorated wedding reception hall full of guests', order: 5 },
  { file: 'wedding-couple-garden.jpg', category: 'Weddings', title: 'Garden Ceremony', alt: 'Bride and groom smiling together outdoors as the groom adjusts her dress', order: 6 },
  { file: 'pink-table-setting.jpg', category: 'Weddings', title: 'Elegant Table Styling', alt: 'Elegant pink and silver table setting with a crystal candelabra', order: 7 },
  { file: 'gold-table-setting.jpg', category: 'Weddings', title: 'Reception Table Setting', alt: 'Long reception table styled with gold accents and floral centerpieces', order: 8 },
  { file: 'event-guests-smiling.jpg', category: 'Events', title: 'Guests Sharing a Moment', alt: 'Two guests laughing together at an event', order: 9 },
  { file: 'birthday-21st-decor.jpg', category: 'Events', title: '21st Birthday Celebration', alt: 'Gold "21" decor and floral centerpiece at a birthday celebration', order: 10 },
  { file: 'studio-portrait-turquoise-dress.jpg', category: 'Portraits', title: 'Studio Portrait', alt: 'Studio portrait of a smiling woman in a turquoise dress and pink head wrap', order: 11 },
  { file: 'studio-duo-portrait.jpg', category: 'Portraits', title: 'Studio Duo Portrait', alt: "Two women styling each other's hair in a studio session", order: 12 },
  { file: 'elegant-studio-portrait.jpg', category: 'Portraits', title: 'Elegant Studio Portrait', alt: 'Studio portrait of a smiling woman in a black dress against a white background', order: 13 },
  { file: 'drone-coverage-poster.jpg', category: 'Drone', title: 'Aerial Event Coverage', alt: 'Aerial drone view of an outdoor event setup with tents and lounge seating', order: 14 },
  { file: 'drone-equipment.jpg', category: 'Drone', title: 'Drone Equipment', alt: 'Professional aerial photography equipment', order: 15 },
]

const services = [
  { file: 'studio-portrait-turquoise-dress.jpg', title: 'Studio & Portrait Photography', description: 'Timeless portrait sessions crafted around you and your story.', order: 1 },
  { file: 'graduation-portrait.jpeg', title: 'Graduation Photography', description: 'Polished graduation portraits that celebrate the milestone.', order: 2 },
  { file: 'traditional-wedding-ceremony.jpeg', title: 'Wedding Photography', description: 'Full-day coverage capturing every part of your celebration.', order: 3 },
  { file: 'male-outdoor-portrait.jpeg', title: 'Outdoor / Location Photography', description: 'On-location shoots in natural light, wherever inspires you.', order: 4 },
  { file: 'wedding-reception-hall.jpeg', title: 'Event Photography & Videography', description: 'Complete photo and video coverage for any occasion.', order: 5 },
]

const droneSection = {
  intro:
    'Professional aerial photography and cinematic drone footage for events, cars, properties, businesses and special occasions.',
  offerings: [
    'Aerial Photography',
    'Drone Videography',
    'Car & Stance Coverage',
    'Event Aerial Coverage',
    'Property & Business Content',
    'Social Media Drone Reels',
  ],
}

const businessInfo = {
  email: 'Moganedibr@gmail.com',
  phone: '+27 81 553 2701',
  whatsappNumber: '27815532701',
  locationText: '1928 Bhele Street, Daveyton',
  instagramUrl: 'https://www.instagram.com/bee_arr_moganedi?igsi=MWN1OWZva2s1NTF6eA==',
  facebookUrl: 'https://www.facebook.com/versatilegiven.moganedi',
  youtubeUrl: 'https://youtube.com/@beearrgraphix7814?si=SCJ43Yx7hASuG3Nv',
}

const bookingPolicy = {
  title: 'Booking, Cancellation & Refund Policy',
  sections: [
    {
      _key: 'confirmation',
      _type: 'policySection',
      heading: 'Booking Confirmation',
      body: 'A booking is only considered confirmed once a 50% non-refundable deposit has been received. For events, the deposit should be paid at least 3 weeks before the scheduled event date.',
    },
    {
      _key: 'more48',
      _type: 'policySection',
      heading: 'Cancellations More Than 48 Hours Before the Shoot or Event',
      body: 'The deposit remains non-refundable, but any additional amount paid above the deposit may be refunded.',
    },
    {
      _key: 'between2448',
      _type: 'policySection',
      heading: 'Cancellations Between 24 and 48 Hours Before the Shoot or Event',
      body: 'The deposit will be forfeited. If the customer has already paid the full booking amount, 50% of the total amount paid will be refunded.',
    },
    {
      _key: 'within24',
      _type: 'policySection',
      heading: 'Cancellations Within 24 Hours of the Scheduled Shoot or Event',
      body: 'No refund will be issued.',
    },
    {
      _key: 'general',
      _type: 'policySection',
      heading: 'General Terms',
      items: [
        'Deposits are non-refundable because the selected date and time are reserved specifically for the customer, which may prevent other bookings from being accepted for that period.',
        'Any approved refund will be processed using the agreed payment method.',
        'Bee arR Graphix reserves the right to review exceptional circumstances on a case-by-case basis.',
      ],
    },
  ],
}

const homepage = {
  badgeText: 'Now booking — aerial drone photography & videography',
  introText:
    'Bee arR Graphix creates premium photography, videography and aerial drone coverage for weddings, portraits, graduations and events.',
}

const about = {
  introText:
    'Bee arR Graphix is a photography, videography and drone content business based in Daveyton — capturing meaningful moments through photography, video and aerial coverage.',
  secondaryText:
    'From weddings, graduations and events to studio portraits, outdoor shoots and business content, our goal is to create work that feels personal, polished and memorable.',
}

// ---- Migration logic ----

const uploadedAssets = new Map()

async function uploadImage(file) {
  if (uploadedAssets.has(file)) return uploadedAssets.get(file)
  const buffer = readFileSync(assetPath(file))
  const asset = await client.assets.upload('image', buffer, { filename: file })
  uploadedAssets.set(file, asset)
  console.log(`Uploaded ${file} -> ${asset._id}`)
  return asset
}

async function migratePortfolioPhotos() {
  for (const item of portfolioPhotos) {
    const existing = await client.fetch(
      `*[_type == "portfolioPhoto" && title == $title][0]{_id}`,
      { title: item.title },
    )
    if (existing) {
      console.log(`Skipping "${item.title}" — already exists.`)
      continue
    }
    const asset = await uploadImage(item.file)
    await client.create({
      _type: 'portfolioPhoto',
      title: item.title,
      alt: item.alt,
      category: item.category,
      order: item.order,
      photo: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    })
    console.log(`Created portfolio photo "${item.title}"`)
  }
}

async function migrateServices() {
  for (const item of services) {
    const existing = await client.fetch(
      `*[_type == "service" && title == $title][0]{_id}`,
      { title: item.title },
    )
    if (existing) {
      console.log(`Skipping service "${item.title}" — already exists.`)
      continue
    }
    const asset = await uploadImage(item.file)
    await client.create({
      _type: 'service',
      title: item.title,
      description: item.description,
      order: item.order,
      available: true,
      photo: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
    })
    console.log(`Created service "${item.title}"`)
  }
}

async function migrateSingleton(type, data) {
  await client.createOrReplace({ _id: type, _type: type, ...data })
  console.log(`Upserted singleton "${type}"`)
}

async function run() {
  await migratePortfolioPhotos()
  await migrateServices()
  await migrateSingleton('droneSection', droneSection)
  await migrateSingleton('businessInfo', businessInfo)
  await migrateSingleton('bookingPolicy', bookingPolicy)
  await migrateSingleton('homepage', homepage)
  await migrateSingleton('about', about)
  console.log('Migration complete.')
}

run().catch((error) => {
  console.error('Migration failed:', error)
  process.exit(1)
})
