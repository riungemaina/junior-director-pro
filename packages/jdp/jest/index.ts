import { jest } from '@jest/globals'
import '@testing-library/jest-dom'

jest.mock('remotion', () => ({
  useCurrentFrame: jest.fn(),
  useVideoConfig: () => ({
    durationInFrames: 60,
    fps: 30,
    height: 1080,
    width: 1920,
  }),
  interpolate: (
    input: number,
    inputRange: [number, number],
    outputRange: [number, number],
    options: {
      extrapolateLeft?: 'identity' | 'clamp' | 'extend'
      extrapolateRight?: 'identity' | 'clamp' | 'extend'
      easing?: (num: number) => number
    } = {}
  ) => {
    const { extrapolateLeft, extrapolateRight, easing } = options
    let result = input
    const [inputMin, inputMax] = inputRange
    const [outputMin, outputMax] = outputRange

    if (result < inputMin) {
      if (extrapolateLeft === 'identity') {
        return result
      }
      if (extrapolateLeft === 'clamp') {
        result = inputMin
      } else if (extrapolateLeft === 'extend') {
        // noop
      }
    }

    if (result > inputMax) {
      if (extrapolateRight === 'identity') {
        return result
      }
      if (extrapolateRight === 'clamp') {
        result = inputMax
      } else if (extrapolateRight === 'extend') {
        // noop
      }
    }

    if (outputMin === outputMax) {
      return outputMin
    }

    // Input Range
    result = (result - inputMin) / (inputMax - inputMin)

    // Easing
    result = easing ? easing(result) : result

    // Output Range
    result = result * (outputMax - outputMin) + outputMin

    return result
  },
}))
