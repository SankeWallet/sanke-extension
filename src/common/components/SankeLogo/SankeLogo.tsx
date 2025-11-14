import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'
import sankeLogo from '@web/assets/sanke.png'

type SankeLogoProps = {
  width?: number
  height?: number
  style?: StyleProp<ImageStyle>
}

const SankeLogo: React.FC<SankeLogoProps> = ({ width = 83, height = 28, style }) => {
  return (
    <Image source={{ uri: sankeLogo }} style={[{ width, height }, style]} resizeMode="contain" />
  )
}

export default React.memo(SankeLogo)
