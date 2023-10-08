import { expect as expectNonTyped } from '@jest/globals'
import { useCurrentFrame as useCF } from 'remotion'
import { ExpectInterface } from '../../types'

export const expect: ExpectInterface = expectNonTyped as any

export const useCurrentFrame = (frame: number) => (useCF as jest.Mock).mockImplementation(() => frame)

export const testProps = {
  in: {
    startTime: 0,
    endTime: 1,
  },
  out: {
    startTime: -1,
    endTime: 0,
  },
}
