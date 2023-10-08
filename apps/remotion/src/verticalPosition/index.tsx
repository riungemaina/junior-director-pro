import { AbsoluteFill } from 'remotion'

import { AnimatedHorizontalPosition } from '@riunge/junior-director-pro'

export const VerticalPosition = () => (
  <AbsoluteFill style={{ backgroundColor: 'yellow' }}>
    <AnimatedHorizontalPosition
      in={{
        startTime: 0,
        endTime: 20,
      }}
      out={{
        startTime: -20,
        endTime: 0,
      }}
      from={0}
      to={100}
    >
      <span
        style={{
          fontFamily: 'cursive',
          fontSize: 150,
          whiteSpace: 'nowrap',
        }}
      >
        He is risen!
      </span>
    </AnimatedHorizontalPosition>
  </AbsoluteFill>
)
