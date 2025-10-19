import React from 'react'
import { Image } from 'react-native'

import { SvgProps } from 'react-native-svg'

const SendIcon: React.FC<SvgProps> = ({
  width = 49,
  height = 46,
  color,
  strokeWidth = '1.5',
  ...rest
}) => {
  return (
    <Image 
      source={require('@common/assets/ic-send.svg')}
      style={{ width: Number(width), height: Number(height) }}
    />
  )
}

export default React.memo(SendIcon)
