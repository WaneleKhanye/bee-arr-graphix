import maleOutdoorPortrait from '../assets/images/male-outdoor-portrait.jpeg'
import femalePortrait from '../assets/images/female-portrait.jpeg'
import graduationPortrait from '../assets/images/graduation-portrait.jpeg'
import traditionalWeddingFamily from '../assets/images/traditional-wedding-family.jpeg'
import weddingReceptionEvent from '../assets/images/wedding-reception-event.jpeg'

export const workItems = [
  {
    image: maleOutdoorPortrait,
    category: 'Portraits',
    title: 'Golden Hour Portrait',
    alt: 'Outdoor portrait of a man in a red coat under an open sky',
    aspect: 'aspect-[3/4]',
    position: 'object-[50%_15%]',
  },
  {
    image: femalePortrait,
    category: 'Portraits',
    title: 'Street Style Portrait',
    alt: 'Portrait of a woman in a headscarf smiling outdoors',
    aspect: 'aspect-[4/5]',
    position: 'object-center',
  },
  {
    image: graduationPortrait,
    category: 'Graduations',
    title: 'Graduation Day',
    alt: 'Two graduates in academic gowns posing together',
    aspect: 'aspect-[4/3]',
    position: 'object-center',
  },
  {
    image: traditionalWeddingFamily,
    category: 'Weddings',
    title: 'Traditional Ceremony',
    alt: 'Family in traditional wedding attire walking together',
    aspect: 'aspect-[4/5]',
    position: 'object-[50%_20%]',
  },
  {
    image: weddingReceptionEvent,
    category: 'Events',
    title: 'Reception Coverage',
    alt: 'Wide view of a decorated wedding reception hall full of guests',
    aspect: 'aspect-[16/10]',
    position: 'object-center',
  },
]
