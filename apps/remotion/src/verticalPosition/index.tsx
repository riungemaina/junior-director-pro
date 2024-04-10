import { AnimatedHorizontalPosition } from '@riunge/junior-director-pro'

const styles = {
  container: {
    backgroundColor: '#f9c30f',
    width: 1920,
    height: 1080,
    display: 'grid',
    gridTemplateRows: '6fr 1fr 6fr 1fr 6fr',
  },
  black: {
    backgroundColor: '#000000',
    width: 1920,
    height: '100%',
  },
  white: {
    backgroundColor: '#FFFFFF',
    width: 1920,
    height: '100%',
  },
  red: {
    backgroundColor: '#99292D',
    width: 1920,
    height: '100%',
  },
  green: {
    backgroundColor: '#31905F',
    width: 1920,
    height: '100%',
  },
}

export const VerticalPosition = () => (
  <div style={styles.container}>
    <AnimatedHorizontalPosition
      in={{
        startTime: 0,
        duration: 20,
      }}
      out={{
        startTime: -20,
        duration: 20,
      }}
      from={-100}
      to={0}
    >
      <div style={styles.black} />
    </AnimatedHorizontalPosition>

    <AnimatedHorizontalPosition
      in={{
        startTime: 5,
        duration: 20,
      }}
      out={{
        startTime: -20,
        duration: 20,
      }}
      from={-100}
      to={0}
    >
      <div style={styles.white} />
    </AnimatedHorizontalPosition>
    <AnimatedHorizontalPosition
      in={{
        startTime: 10,
        duration: 20,
      }}
      out={{
        startTime: -20,
        duration: 20,
      }}
      from={-100}
      to={0}
    >
      <div style={styles.red} />
    </AnimatedHorizontalPosition>
    <AnimatedHorizontalPosition
      in={{
        startTime: 15,
        duration: 20,
      }}
      out={{
        startTime: -20,
        duration: 20,
      }}
      from={-100}
      to={0}
    >
      <div style={styles.white} />
    </AnimatedHorizontalPosition>
    <AnimatedHorizontalPosition
      in={{
        startTime: 20,
        duration: 20,
      }}
      out={{
        startTime: -20,
        duration: 20,
      }}
      from={-100}
      to={0}
    >
      <div style={styles.green} />
    </AnimatedHorizontalPosition>
  </div>
)
