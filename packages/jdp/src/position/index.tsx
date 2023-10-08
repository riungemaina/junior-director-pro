import React, { useRef } from 'react'
import { interpolate, useCurrentFrame } from 'remotion'

import { AnimatedPositionProps } from '../types'
import { extrapolate, useStartAndEndValues } from '../utils'

export const AnimatedVerticalPosition = ({ from, to, children, ...props }: AnimatedPositionProps) => {
  const frame = useCurrentFrame()
  const heightRef = useRef<HTMLSpanElement>(null)

  const { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal } = useStartAndEndValues(props)

  if (frame >= inStartTimeVal && frame <= outEndTimeVal) {
    const height = (heightRef.current?.clientHeight ?? 0) / 2
    const positionIn = interpolate(frame, [inStartTimeVal, inEndTimeVal], [from, to], extrapolate)
    const positionOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [positionIn, from], extrapolate)
    const heightIn = interpolate(
      frame,
      [inStartTimeVal, inEndTimeVal],
      [(from * height) / 100, (to * height) / 100],
      extrapolate
    )
    const heightOut = interpolate(
      frame,
      [outStartTimeVal, outEndTimeVal],
      [heightIn, (from * height) / 100],
      extrapolate
    )

    return (
      <span style={{ transform: `translateY(calc(${positionOut}% + ${heightOut}px))` }} ref={heightRef}>
        {children}
      </span>
    )
  }

  return <span>{children}</span>
}

export const AnimatedHorizontalPosition = ({ from, to, children, ...props }: AnimatedPositionProps) => {
  const frame = useCurrentFrame()
  const widthRef = useRef<HTMLSpanElement>(null)

  const { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal } = useStartAndEndValues(props)

  if (frame >= inStartTimeVal && frame <= outEndTimeVal) {
    const width = (widthRef.current?.clientWidth ?? 0) / 4
    const positionIn = interpolate(frame, [inStartTimeVal, inEndTimeVal], [from, to], extrapolate)
    const positionOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [positionIn, from], extrapolate)
    const widthIn = interpolate(
      frame,
      [inStartTimeVal, inEndTimeVal],
      [(from * width) / 100, (to * width) / 100],
      extrapolate
    )
    const widthOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [widthIn, (from * width) / 100], extrapolate)

    return (
      <span style={{ transform: `translateX(calc(${positionOut / 2}% - ${widthOut}px))` }} ref={widthRef}>
        {children}
      </span>
    )
  }

  return <span>{children}</span>
}
