import type { Component } from 'vue'

export interface NavLinkHeader {
  readonly id: string
  readonly label: string
  readonly href: string
  readonly icon?: Component
}
