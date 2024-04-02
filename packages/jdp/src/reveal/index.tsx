import React from 'react'
import { interpolate, useCurrentFrame } from 'remotion'

import { AnimatedRevealProps } from '../types'
import { extrapolate, useStartAndEndValues } from '../utils'

export const AnimatedReveal = ({ from, to, children, ...props }: AnimatedRevealProps) => {
  const frame = useCurrentFrame()
  const { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal } = useStartAndEndValues(props)
  const revealIn = interpolate(frame, [inStartTimeVal, inEndTimeVal], [from, to], extrapolate)
  const revealOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [revealIn, from], extrapolate)

  return <span style={{ width: `${revealOut}%` }}>{children}</span>
}
