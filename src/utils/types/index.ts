import { ReactNode } from 'react'

type TimeType = {
  startTime: number
  endTime?: number
  duration?: number
}

export type ValueCalculationType = {
  in: TimeType
  out: TimeType
}

export type AnimatedOpacityProps = {
  in: TimeType
  out: TimeType
  from: number
  to: number
  children: ReactNode
}

export type AnimatedRotationProps = AnimatedOpacityProps

export type AnimatedPositionProps = AnimatedOpacityProps
