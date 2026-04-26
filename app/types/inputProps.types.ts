import type { Component } from 'vue'

export interface BaseInputProps {
  id: string
  type: string
  placeholder: string
  label?: string
  buttonImage?: Component
}
