import { ReactNode } from 'react'
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

type AnimatedOpacityProps = {
  in: {
    startTime: number
    endTime: number
  }
  out: {
    startTime: number
    endTime: number
  }
  from: number
  to: number
  children: ReactNode
}

export const AnimatedOpacity = ({
  in: { startTime: inStartTime, endTime: inEndTime },
  out: { startTime: outStartTime, endTime: outEndTime },
  from,
  to,
  children,
}: AnimatedOpacityProps) => {
  const frame = useCurrentFrame()
  const { durationInFrames, fps } = useVideoConfig()
  const durationInSecs = durationInFrames / fps

  const outStartTimeVal = durationInSecs + outStartTime
  const outEndTimeVal = durationInSecs + outEndTime

  const opacityIn = interpolate(frame, [inStartTime * 30, inEndTime * 30], [from, to], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const opacityOut = interpolate(frame, [outStartTimeVal * 30, outEndTimeVal * 30], [opacityIn, from], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill
      style={{
        opacity: opacityOut,
      }}
    >
      {children}
    </AbsoluteFill>
  )
}
