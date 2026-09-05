import studioPortrait from '../assets/images/studio-portrait-turquoise-dress.jpg'
import graduationPortrait from '../assets/images/graduation-portrait.jpeg'
import traditionalWeddingCeremony from '../assets/images/traditional-wedding-ceremony.jpeg'
import maleOutdoorPortrait from '../assets/images/male-outdoor-portrait.jpeg'
import weddingReceptionHall from '../assets/images/wedding-reception-hall.jpeg'

export const services = [
  {
    image: studioPortrait,
    title: 'Studio & Portrait Photography',
    description: 'Timeless portrait sessions crafted around you and your story.',
    alt: 'Studio portrait of a smiling woman in a turquoise dress and pink head wrap',
    aspect: 'aspect-[4/3] sm:aspect-[4/5]',
    position: 'object-center',
  },
  {
    image: graduationPortrait,
    title: 'Graduation Photography',
    description: 'Polished graduation portraits that celebrate the milestone.',
    alt: 'Two graduates in academic gowns posing together',
    aspect: 'aspect-[3/2] sm:aspect-[4/3]',
    position: 'object-center',
  },
  {
    image: traditionalWeddingCeremony,
    title: 'Wedding Photography',
    description: 'Full-day coverage capturing every part of your celebration.',
    alt: 'Family in traditional wedding attire walking together',
    aspect: 'aspect-[4/3] sm:aspect-[3/4]',
    position: 'object-[50%_20%]',
  },
  {
    image: maleOutdoorPortrait,
    title: 'Outdoor / Location Photography',
    description: 'On-location shoots in natural light, wherever inspires you.',
    alt: 'Outdoor portrait of a man in a red coat under an open sky',
    aspect: 'aspect-[4/3] sm:aspect-[4/5]',
    position: 'object-[50%_15%]',
  },
  {
    image: weddingReceptionHall,
    title: 'Event Photography & Videography',
    description: 'Complete photo and video coverage for any occasion.',
    alt: 'Wide view of a decorated wedding reception hall full of guests',
    aspect: 'aspect-[16/9] sm:aspect-[16/10]',
    position: 'object-center',
  },
]
