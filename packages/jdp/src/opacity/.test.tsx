import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react'
import React from 'react'

import { expect, testProps, useCurrentFrame } from '../utils/tests'
import { AnimatedOpacity } from './'

const props = {
  from: 0,
  to: 1,
  ...testProps,
}

describe('AnimatedOpacity', () => {
  it('calculates opacityIn correctly', () => {
    useCurrentFrame(15)
    const { container } = render(<AnimatedOpacity {...props}>Test Content</AnimatedOpacity>)
    expect(container.firstChild).toHaveStyle('opacity: 0.5')
  })

  it('calculates opacityOut correctly', () => {
    useCurrentFrame(45)
    const { container } = render(<AnimatedOpacity {...props}>Test Content</AnimatedOpacity>)
    expect(container.firstChild).toHaveStyle('opacity: 0.5')
  })

  it('renders children correctly', () => {
    const { getByText } = render(<AnimatedOpacity {...props}>Test Content</AnimatedOpacity>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })
})
