import React from 'react'
import { interpolate, useCurrentFrame } from 'remotion'

import { AnimatedScaleProps, extrapolate, useStartAndEndValues } from '../utils'

export const AnimatedScale = ({ from, to, children, origin: transformOrigin, ...props }: AnimatedScaleProps) => {
  const frame = useCurrentFrame()
  const { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal } = useStartAndEndValues(props)
  const scaleIn = interpolate(frame, [inStartTimeVal, inEndTimeVal], [from, to], extrapolate)
  const scaleOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [scaleIn, from], extrapolate)

  return <span style={{ transform: `scale(${scaleOut})`, transformOrigin }}>{children}</span>
}
