import type { NavigationLink } from '~/types/navigation.types'
import LogoutIcon from '~/assets/icons/LogoutIcon.vue'
import AccountIcon from '~/assets/icons/AccountIcon.vue'

export const NAVIGATION_PRIMARY: NavigationLink[] = [
  { id: 'shop', label: 'Shop', href: '/shop' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'our-story', label: 'Our Story', href: '/our-story' },
]

export const NAVIGATION_SECONDARY: NavigationLink[] = [
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'term', label: 'Terms Of Services', href: '/term' },
  { id: 'shipping', label: 'Shipping And Returns', href: '/shipping' },
]

export const NAVIGATION_ITEMS_HEADER_MOBILE: NavigationLink[] = [
  ...NAVIGATION_PRIMARY,
  ...NAVIGATION_SECONDARY,
]

export const NAVIGATION_ACTIONS_MOBILE: NavigationLink[] = [
  { id: 'account', label: 'My account', href: '/account', icon: AccountIcon },
  { id: 'logout', label: 'Logout', href: '/logout', icon: LogoutIcon },
]
