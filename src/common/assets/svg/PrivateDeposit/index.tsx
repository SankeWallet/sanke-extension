import React from 'react'
import { Image } from 'react-native'
import { SvgProps } from 'react-native-svg'

const PrivateDepositIcon: React.FC<SvgProps> = ({
  width = 49,
  height = 46,
  ...rest
}) => {
  return (
    <Image 
      source={require('@common/assets/ic-deposit.svg')}
      style={{ width: Number(width), height: Number(height) }}
    />
  )
}

export default React.memo(PrivateDepositIcon)