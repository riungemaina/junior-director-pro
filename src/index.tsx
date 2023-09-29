import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

import React, { FC } from "react";
import { Composition } from "remotion";

type VideoProps = {
  durationInMinutes: number;
  durationInSeconds: number;
  format: "vertical" | "horizontal";
  id: string;
  videoSource: FC;
};

// test updates

type AnimatedOpacityProps = {
  in: {
    startTime: number;
    endTime: number;
  };
  out: {
    startTime: number;
    endTime: number;
  };
  from: number;
  to: number;
  children: React.ReactNode;
};

export const Video = ({
  durationInMinutes,
  durationInSeconds,
  format,
  id,
  videoSource,
}: VideoProps) => {
  const durationInFrames = (durationInMinutes * 60 + durationInSeconds) * 30;

  return (
    <Composition
      id={id}
      component={videoSource}
      durationInFrames={durationInFrames}
      fps={30}
      width={format === "vertical" ? 1080 : 1920}
      height={format === "vertical" ? 1920 : 1080}
    />
  );
};

export const AnimatedOpacity = ({
  in: { startTime: inStartTime, endTime: inEndTime },
  out: { startTime: outStartTime, endTime: outEndTime },
  from,
  to,
  children,
}: AnimatedOpacityProps) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();
  const durationInSecs = durationInFrames / fps;

  const outStartTimeVal = durationInSecs + outStartTime;
  const outEndTimeVal = durationInSecs + outEndTime;

  const opacityIn = interpolate(
    frame,
    [inStartTime * 30, inEndTime * 30],
    [from, to],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const opacityOut = interpolate(
    frame,
    [outStartTimeVal * 30, outEndTimeVal * 30],
    [opacityIn, from],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <AbsoluteFill
      style={{
        opacity: opacityOut,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
