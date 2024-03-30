import { AntDesign } from '@expo/vector-icons'

import React from 'react'

export default function Icon({ iconName, iconSize, iconColor, borderColor }) {
  return (
    <AntDesign
      size={iconSize}
      name={iconName}
      color={iconColor}
    />
  )
}
