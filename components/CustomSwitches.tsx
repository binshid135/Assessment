import { View, Text,GestureResponderEvent,TouchableOpacity } from 'react-native'
import React from 'react'

interface RadioButtonProps {
  isOn: boolean;
  onToggle: () => void;
}

const CustomSwitches: React.FC<RadioButtonProps> = ({isOn, onToggle}) => {

  return (
    <TouchableOpacity
    onPress={onToggle}
    activeOpacity={0.7}
    className={`w-14 h-8 flex-row items-center rounded-full ${
      isOn ? 'bg-green-500' : 'bg-gray-300'
    } p-1`}
  >
    <View
      className={`h-6 w-6 rounded-full bg-white shadow ${
        isOn ? 'ml-auto' : 'mr-auto'
      }`}
    />
  </TouchableOpacity>
  )
}

export default CustomSwitches