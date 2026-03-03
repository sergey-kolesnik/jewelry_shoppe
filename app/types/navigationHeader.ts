export interface NavLinkHeader {
  readonly id: string
  readonly label: string
  readonly href: string
}

export const NAVIGATION_ITEMS_HEADER: NavLinkHeader[] = [
  { id: 'shop', label: 'Shop', href: '/shop' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'our-story', label: 'Our Story', href: '/our-story' },
] as const
