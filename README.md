# React Native Audio Player

## Features

- **Play/Pause Button:** Allows users to start or pause the audio playback.
- **Progress Bar:** Indicates the current position of the audio track and allows users to seek to different parts of the track.
- **Volume Control:** Allows users to adjust the volume level of the audio playback. (mute and play)
- **Time Display:** Shows the current playback time and total duration of the audio track.
- **Skip Forward/Backward Buttons:** Allows users to skip forward or backward in the audio track. (10 sec)
- **Loop Button:** Enables looping playback of the audio track.
- **Playback Speed Control:** Allows users to adjust the playback speed of the audio track. (0.5x, 1x, 2x)
- **Download Button:** Allows users to download the audio file.
- **Fullscreen Mode Button:** Enables fullscreen mode for the audio player.
- **Background View:** Configurable option to play audio even when in the background.

## Example

```jsx
<AudioPlayer
  backgroundThemeColor={'red'}
  download={true}
  fullScreen={true}
  muteControl={true}
  repeatMode={true}
  skipButtons={true}
  speedControl={true}
  timer={[{ label: '5 mins', value: 300000 }]}
  trackBarColor={'red'}
  playerControlColor={'red'}
/>
```

## Props

| Prop                 | Description                                                                                   |
| -------------------- | --------------------------------------------------------------------------------------------- |
| backgroundThemeColor | It is used to change the background color of the audio component.                             |
| download             | It is used to allow users to download the current song.                                       |
| fullScreen           | It is used to show the audio player on full screen.                                           |
| muteControl          | It is used to mute and play the audio.                                                        |
| repeatMode           | It is used to apply repeat mode effects namely: repeat queue, repeat one-time and repeat-off. |
| skipButtons          | It is used to show the skip buttons to allow users to skip the audio forward and backward.    |
| speedControl         | It is used to control the speed of the audio.                                                 |
| timer                | It is used to stop the audio player after given time.                                         |
| trackBarColor        | It is used to change the color of the audio player track bar.                                 |
| playerControlColor   | It is used to change the color of the controls of the audio player.                           |

**Note:** All the props are passed to the audio-player component.

## Future Features

- Make subtitles/caption feature
