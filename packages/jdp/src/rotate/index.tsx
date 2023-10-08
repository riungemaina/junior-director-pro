import React from 'react'
import { interpolate, useCurrentFrame } from 'remotion'

import { AnimatedRotationProps } from '../types'
import { extrapolate, useStartAndEndValues } from '../utils'

export const AnimatedRotation = ({ from, to, children, ...props }: AnimatedRotationProps) => {
  const frame = useCurrentFrame()
  const { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal } = useStartAndEndValues(props)
  const rotationIn = interpolate(frame, [inStartTimeVal, inEndTimeVal], [from, to], extrapolate)
  const rotationOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [rotationIn, from], extrapolate)

  return <span style={{ transform: `rotate(${rotationOut}deg)` }}>{children}</span>
}
