import React from 'react'
import { PermissionsAndroid, Platform, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import RNFetchBlob from 'rn-fetch-blob'

const DownloadButton = () => {
  const requestStoragePermission = async () => {
    if (Platform.OS === 'ios') {
      downloadFile()
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        )
        if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
          downloadFile()
        } else {
          console.log('Please grant permission')
        }
      } catch (err) {
        console.log('Error', err)
      }
    }
  }

  const downloadFile = () => {
    const { dirs } = RNFetchBlob.fs
    const dirToSave = Platform.OS === 'ios' ? dirs.DocumentDir : dirs.DownloadDir
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
        if (Platform.OS === 'ios') {
          RNFetchBlob.fs.writeFile(configfb.path, res.data, 'base64')
          RNFetchBlob.ios.previewDocument(configfb.path)
        }
        if (Platform.OS === 'android') {
          console.log('File downloaded')
        }
      })
      .catch(e => {
        console.log('File Download==>', e)
      })
  }

  return (
    <TouchableOpacity onPress={requestStoragePermission}>
      <Icon name="download" size={30} />
    </TouchableOpacity>
  )
}

export default DownloadButton
