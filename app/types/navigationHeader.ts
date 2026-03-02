export const NAVIGATION_ITEMS_HEADER = [
    { id: "shop", label: "Shop", href: "/shop" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "our-story", label: "Our Story", href: "/ry" },
] as const;

export type NavItemHeader = typeof NAVIGATION_ITEMS_HEADER[number]