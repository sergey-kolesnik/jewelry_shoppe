import type { Component } from 'vue'

export interface NavigationLink {
  readonly id: string
  readonly label: string
  readonly href: string
  readonly icon?: Component
}
