import React from 'react'
import { Composition } from 'remotion'

import { VideoProps } from '../types'

export const Video = ({ durationInMinutes, durationInSeconds, format, name, videoSource }: VideoProps) => {
  const durationInFrames = (durationInMinutes * 60 + durationInSeconds) * 30

  return (
    <Composition
      id={name}
      component={videoSource}
      durationInFrames={durationInFrames}
      fps={30}
      width={format === 'vertical' ? 1080 : 1920}
      height={format === 'vertical' ? 1920 : 1080}
    />
  )
}
