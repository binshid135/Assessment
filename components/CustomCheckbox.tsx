import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  label: string;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CheckboxProps> = ({ checked, label, onChange }) => {
  return (
    <TouchableOpacity
      className="flex-row items-center space-x-2 mb-4"
      onPress={() => onChange(!checked)}
    >
      <View
        className={`w-6 h-6 border-2 rounded ${
          checked ? 'bg-green-500 border-green-500' : 'border-gray-200 bg-gray-200'
        } items-center justify-center`}
      >
        {checked && <Text className="text-white text-xs">✔</Text>}
      </View>
      <Text className="text-base text-gray-800">{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;
