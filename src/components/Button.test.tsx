import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies primary variant by default', () => {
    render(<Button>Test Button</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('bg-blue-600')
  })

  it('applies secondary variant when specified', () => {
    render(<Button variant="secondary">Test Button</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('bg-gray-200')
  })

  it('applies different sizes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>)
    expect(screen.getByRole('button').className).toContain('px-3')

    rerender(<Button size="large">Large</Button>)
    expect(screen.getByRole('button').className).toContain('px-6')
  })
})
