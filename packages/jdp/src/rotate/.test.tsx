import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react'
import React from 'react'

import { expect, testProps, useCurrentFrame } from '../utils/tests'
import { AnimatedRotation } from './'

const props = {
  from: 0,
  to: 90,
  ...testProps,
}

describe('AnimatedRotation', () => {
  it('calculates rotationIn correctly', () => {
    useCurrentFrame(15)
    const { container } = render(<AnimatedRotation {...props}>Test Content</AnimatedRotation>)
    expect(container.firstChild).toHaveStyle('transform: rotate(45deg)')
  })

  it('calculates rotationOut correctly', () => {
    useCurrentFrame(45)
    const { container } = render(<AnimatedRotation {...props}>Test Content</AnimatedRotation>)
    expect(container.firstChild).toHaveStyle('transform: rotate(45deg)')
  })

  it('renders children correctly', () => {
    const { getByText } = render(<AnimatedRotation {...props}>Test Content</AnimatedRotation>)
    expect(getByText('Test Content')).toBeInTheDocument()
  })
})
