import React, { useState } from 'react'
import {
  TextInput,
  TextInputProps
} from 'react-native'
import colors from '../styles/colors'

import { styles } from '../styles/components/basicInput'

interface BasicInputProps extends TextInputProps {
  legend: string
}

export const BasicInput = ({
  legend,
  onChange,
  onChangeText,
  value,
  ...rest
}: BasicInputProps) => {
  const [isActive, setActive] = useState(false)

  function handleToggleInput() {
    if (isActive) {
      setActive(false)
    } else {
      setActive(true)
    }
  }

  return (
    <TextInput
      placeholder={legend}
      onFocus={handleToggleInput}
      onBlur={handleToggleInput}
      onChangeText={onChangeText}
      value={value}
      style={
        isActive
          ? [styles.input, {borderBottomColor: colors.green}]
          : styles.input
      }
      {...rest}
    />
  )
}
