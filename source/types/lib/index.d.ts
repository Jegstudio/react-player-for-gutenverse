import BaseReactPlayer, { BaseReactPlayerProps } from '../base'

import { DailyMotionConfig } from '../dailymotion'
import { FacebookConfig } from '../facebook'
import { FileConfig } from '../file'
import { SoundCloudConfig } from '../soundcloud'
import { TwitchConfig } from '../twitch'
import { VimeoConfig } from '../vimeo'
import { YouTubeConfig } from '../youtube'

export interface Config {
  soundcloud?: SoundCloudConfig
  youtube?: YouTubeConfig
  facebook?: FacebookConfig
  dailymotion?: DailyMotionConfig
  vimeo?: VimeoConfig
  file?: FileConfig
  twitch?: TwitchConfig
}

export interface ReactPlayerProps extends BaseReactPlayerProps {
  config?: Config
}

export default class ReactPlayer extends BaseReactPlayer<ReactPlayerProps> {}
