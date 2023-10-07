import { AbsoluteFill } from 'remotion'

import { AnimatedVerticalPosition } from '@riunge/junior-director-pro'

export const MyComposition = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'yellow' }}>
      <AnimatedVerticalPosition
        in={{
          startTime: 0,
          endTime: 20,
        }}
        out={{
          startTime: -20,
          endTime: 0,
        }}
        from={100}
        to={0}
      >
        <span
          style={{
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'cursive',
            fontSize: 300,
          }}
        >
          Hello World
        </span>
      </AnimatedVerticalPosition>
    </AbsoluteFill>
  )
}
