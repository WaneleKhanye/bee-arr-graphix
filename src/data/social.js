import { MessageCircle } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '../components/icons'
import { whatsappHref } from './booking'

export const socialLinks = [
  {
    icon: InstagramIcon,
    label: 'Instagram',
    href: 'https://www.instagram.com/bee_arr_moganedi?igsi=MWN1OWZva2s1NTF6eA==',
  },
  {
    icon: FacebookIcon,
    label: 'Facebook',
    href: 'https://www.facebook.com/versatilegiven.moganedi',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: whatsappHref,
  },
]
