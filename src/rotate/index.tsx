import { ReactNode } from 'react'
import { interpolate, useCurrentFrame, useVideoConfig } from 'remotion'

type AnimatedRotationProps = {
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

export const AnimatedRotation = ({
  in: { startTime: inStartTime, endTime: inEndTime },
  out: { startTime: outStartTime, endTime: outEndTime },
  from,
  to,
  children,
}: AnimatedRotationProps) => {
  const frame = useCurrentFrame()
  const { durationInFrames, fps } = useVideoConfig()
  const durationInSecs = durationInFrames / fps

  const outStartTimeVal = durationInSecs + outStartTime
  const outEndTimeVal = durationInSecs + outEndTime

  const rotationIn = interpolate(frame, [inStartTime * 30, inEndTime * 30], [from, to], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  const rotationOut = interpolate(frame, [outStartTimeVal * 30, outEndTimeVal * 30], [rotationIn, from], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <span
      style={{
        transform: `rotate(${rotationOut}deg)`,
        transformOrigin: 'center',
        width: 'fit-content',
      }}
    >
      {children}
    </span>
  )
}
