import React from 'react'
import { Image, ImageStyle, StyleProp } from 'react-native'
import sankeLogoHorizontal from '../../../web/assets/sanke-horizontal.png'

type AmbireLogoHorizontalProps = {
  width?: number
  height?: number
  style?: StyleProp<ImageStyle>
}

const AmbireLogoHorizontal: React.FC<AmbireLogoHorizontalProps> = ({
  width = 83,
  height = 28,
  style
}) => {
  return (
    <Image
      source={{ uri: sankeLogoHorizontal }}
      style={[{ width, height }, style]}
      resizeMode="contain"
    />
  )
}

export default React.memo(AmbireLogoHorizontal)
