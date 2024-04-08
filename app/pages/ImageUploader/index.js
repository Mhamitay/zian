import React, { useState } from 'react'
import { View, Button, Image, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default function ImageUploader() {
  const [imageUri, setImageUri] = useState(null)

  function converToBase64(e) {
    var reader = new FileReader()
    reader.readAsDataURL(e.target.files[0])
    reader.onload = () => {
      setImageUri(reader.result)
    }

    reader.onerror = (error) => {
      console.log('Error', error)
    }
  }

  function pressed() {
    fetch('https://zain-backend-01.vercel.app/api/product', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'content-Type': 'application/json',
        accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        base64: imageUri,
      })
        .then((res) => res.json())
        .then((data) => console.log(data)),
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={pressed}
        style={{ height: 100, with: 20 }}
      >
        Upload
      </Button>
      <input
        type='file'
        accept='image/'
        onChange={converToBase64}
      ></input>
      <img
        width={100}
        height={100}
        src={imageUri}
      />
    </View>
  )
}
