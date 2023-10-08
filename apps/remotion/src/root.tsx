import { VerticalPosition } from './verticalPosition'

import { Video } from '@riunge/junior-director-pro'

export const RemotionRoot: React.FC = () => (
  <Video
    name="position"
    videoSource={VerticalPosition}
    durationInMinutes={10}
    durationInSeconds={45}
    format="horizontal"
  />
)
