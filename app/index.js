import { View, StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './pages/home'
import AsyncStorage from '@react-native-async-storage/async-storage'
import useSwR, { SWRConfig } from 'swr'

const index = (props) => {
  const categoriesFetcher = (...args) =>
    fetch(...args).then((res) => res.json())

  const { data: categoriesData, error: categoriesError } = useSwR(
    'https://zain-backend-01.vercel.app/api/categories',
    categoriesFetcher
  )
  return <Home />
}

export default index
