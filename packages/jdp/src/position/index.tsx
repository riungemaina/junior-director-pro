import React from 'react'
import { Easing, interpolate, useCurrentFrame } from 'remotion'

import { AnimatedPositionProps } from '../types'
import { extrapolate, useStartAndEndValues } from '../utils'

export const AnimatedVerticalPosition = ({ from, to, children, ...props }: AnimatedPositionProps) => {
  const frame = useCurrentFrame()

  const { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal } = useStartAndEndValues(props)

  const positionIn = interpolate(frame, [inStartTimeVal, inEndTimeVal], [from, to], extrapolate)
  const positionOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [positionIn, from], extrapolate)

  return <div style={{ transform: `translateY(calc(${positionOut}%)` }}>{children}</div>
}

export const AnimatedHorizontalPosition = ({ from, to, children, ...props }: AnimatedPositionProps) => {
  const frame = useCurrentFrame()

  const { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal } = useStartAndEndValues(props)

  const positionIn = interpolate(frame, [inStartTimeVal, inEndTimeVal], [from, to], {
    easing: Easing.ease,
    ...extrapolate,
  })
  const positionOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [positionIn, from], extrapolate)

  return <div style={{ transform: `translateX(calc(${positionOut}%)` }}>{children}</div>
}
