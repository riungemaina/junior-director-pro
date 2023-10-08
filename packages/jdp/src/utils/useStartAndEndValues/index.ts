import { useVideoConfig } from 'remotion'

import { ValueCalculationType } from '../../types'

export const useStartAndEndValues = ({
  in: { startTime: inStartTime, endTime: inEndTime = 0, duration: inDuration = 0 },
  out: { startTime: outStartTime, endTime: outEndTime = 0, duration: outDuration = 0 },
}: ValueCalculationType) => {
  const { durationInFrames, fps } = useVideoConfig()
  const durationInSecs = durationInFrames / fps
  const inStartTimeVal = inStartTime * fps
  const outStartTimeVal = (durationInSecs + outStartTime || 0) * fps
  const inEndTimeVal = (inDuration ? inDuration + inStartTime : inEndTime || 0) * fps
  const outEndTimeVal =
    (outDuration ? durationInSecs + outDuration + outStartTime : outEndTime + durationInSecs || 0) * fps

  return { inStartTimeVal, outStartTimeVal, inEndTimeVal, outEndTimeVal }
}
