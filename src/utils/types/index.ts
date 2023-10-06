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
export interface AnimatedScaleProps extends AnimatedOpacityProps {
  origin?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
}
