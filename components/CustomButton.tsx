import { View, Text ,TouchableOpacity, Touchable,GestureResponderEvent} from 'react-native'
import React from 'react'

interface ButtonProps {
    title?:string;
    handlepress: (event: GestureResponderEvent) => void;
}

const CustomButton: React.FC<ButtonProps>= ({title,handlepress}) => {
  return (
    <TouchableOpacity style={{backgroundColor:"rgb(6, 193, 104)"}} onPress={handlepress}
    className='w-full h-14 rounded-full flex justify-center items-center'>
        <Text className='text-white text-sm font-semibold'>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton