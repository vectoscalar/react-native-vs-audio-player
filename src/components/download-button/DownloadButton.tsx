import React from 'react'
import { Alert, PermissionsAndroid, Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import RNFetchBlob from 'rn-fetch-blob'

import { IS_IOS } from '@constants'

const DownloadButton = () => {
  const requestStoragePermission = async () => {
    if (IS_IOS) {
      downloadFile()
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        )
        if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
          downloadFile()
        } else {
          Alert.alert('Please grant permission')
        }
      } catch (err) {
        console.log('Error', err)
      }
    }
  }

  const downloadFile = () => {
    const { dirs } = RNFetchBlob.fs
    const dirToSave = IS_IOS ? dirs.DocumentDir : dirs.DownloadDir
    const configfb = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `OMaahi.mp3`,
        path: `${dirs.DownloadDir}/OMaahi.mp3`,
      },
      useDownloadManager: true,
      notification: true,
      mediaScannable: true,
      title: 'OMaahi.mp3',
      path: `${dirToSave}/OMaahi.mp3`,
    }
    const configOptions = Platform.select({
      ios: configfb,
      android: configfb,
    })

    RNFetchBlob.config(configOptions || {})
      .fetch('GET', 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', {})
      .then(res => {
        if (IS_IOS) {
          RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64')
          RNFetchBlob.ios.previewDocument(configfb.path)
        }
        if (!IS_IOS) {
          Alert.alert('File downloaded')
        }
      })
      .catch(e => {
        console.log('Error in downloading.', e)
      })
  }

  return (
    <TouchableOpacity onPress={requestStoragePermission}>
      <Icon name="download" size={30} />
    </TouchableOpacity>
  )
}

export default DownloadButton
