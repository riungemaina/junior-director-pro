import { interpolate, useCurrentFrame } from 'remotion'

import { AnimatedOpacityProps, extrapolate, useStartAndEndValues } from '../utils'

export const AnimatedOpacity = ({ from, to, children, ...props }: AnimatedOpacityProps) => {
  const frame = useCurrentFrame()
  const { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal } = useStartAndEndValues(props)
  const opacityIn = interpolate(frame, [inStartTimeVal, inEndTimeVal], [from, to], extrapolate)
  const opacityOut = interpolate(frame, [outStartTimeVal, outEndTimeVal], [opacityIn, from], extrapolate)

  return <span style={{ opacity: opacityOut }}>{children}</span>
}
