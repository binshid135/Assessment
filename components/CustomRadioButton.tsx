import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

interface RadioButtonProps {
  selected: boolean;
  label: string;
  onPress: () => void;
}

const CustomRadioButton: React.FC<RadioButtonProps> = ({
  selected,
  label,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between space-x-2 mb-4"
      onPress={onPress}
    >
     
      <Text className="text-base text-gray-800">{label}</Text>
      
      <View
        className={`w-7 h-7 rounded-full border-2 ${selected ? 'bg-green-500 border-green-500' : 'border-gray-300 bg-white'
          } items-center justify-center mr-3`}
      >
        
        {selected && (
          <Text className="text-white text-sm font-bold">✔</Text>
        )}
      </View>

    </TouchableOpacity>
  );
};

export default CustomRadioButton;
