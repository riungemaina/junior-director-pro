import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react'
import React from 'react'

import { expect, testProps, useCurrentFrame } from '../utils/tests'
import { AnimatedReveal } from '.'

const props = {
  from: 0,
  to: 1,
  ...testProps,
}

describe('AnimatedReveal', () => {
  it('calculates revealIn correctly', () => {
    useCurrentFrame(15)
    const { container } = render(<AnimatedReveal {...props}>Test Content</AnimatedReveal>)
    expect(container.firstChild).toHaveStyle('Reveal: 0.5')
  })

  it('calculates revealOut correctly', () => {
    useCurrentFrame(45)
    const { container } = render(<AnimatedReveal {...props}>Test Content</AnimatedReveal>)
    expect(container.firstChild).toHaveStyle('Reveal: 0.5')
  })

  it('renders children correctly', () => {
    const { getByText } = render(<AnimatedReveal {...props}>Test Content</AnimatedReveal>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })
})
