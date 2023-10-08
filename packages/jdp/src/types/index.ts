import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

export type ExpectInterface = {
  (actual: any): TestingLibraryMatchers<any, any>
  extend: (matchers: Record<string, any>) => void
}

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
  children: any
}

export type AnimatedRotationProps = AnimatedOpacityProps
export type AnimatedPositionProps = AnimatedOpacityProps
export interface AnimatedScaleProps extends AnimatedOpacityProps {
  origin?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
}

export type VideoProps = {
  durationInMinutes: number
  durationInSeconds: number
  format: 'vertical' | 'horizontal'
  name: string
  videoSource: any
}
