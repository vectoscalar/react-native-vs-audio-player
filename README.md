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
  download
  fullScreen
  muteControl
  repeatMode
  skipButtons
  speedControl
  timer={[{ label: '5 mins', value: 300000 }]}
  trackBarColor={'red'}
  playerControlColor={'red'}
/>
```

## Props

| Prop                 | Type             | Values                                         | Description                                                                                   |
| -------------------- | ---------------- | ---------------------------------------------- | --------------------------------------------------------------------------------------------- |
| backgroundThemeColor | string           | any color name or hex code                     | It is used to change the background color of the audio component.                             |
| download             | boolean          | true/false                                     | It is used to allow users to download the current song.                                       |
| fullScreen           | boolean          | true/false                                     | It is used to show the audio player on full screen.                                           |
| muteControl          | boolean          | true/false                                     | It is used to mute and play the audio.                                                        |
| repeatMode           | boolean          | true/false                                     | It is used to apply repeat mode effects namely: repeat queue, repeat one-time and repeat-off. |
| skipButtons          | boolean          | true/false                                     | It is used to show the skip buttons to allow users to skip the audio forward and backward.    |
| speedControl         | boolean          | true/false                                     | It is used to control the speed of the audio.                                                 |
| timer                | array of objects | {label:'time in mins',value:'time in seconds'} | It is used to stop the audio player after given time.                                         |
| trackBarColor        | string           | any color name or hex code                     | It is used to change the color of the audio player track bar.                                 |
| playerControlColor   | string           | any color name or hex code                     | It is used to change the color of the controls of the audio player.                           |

**Note:** All the props are passed to the audio-player component.

## Future Features

- Make subtitles/caption feature
