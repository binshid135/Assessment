import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

interface SortingButtonProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

const SortingButton: React.FC<SortingButtonProps> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      className={`flex-1 border-2 ${
        selected ? 'border-green-500' : 'border-black'
      } rounded-full justify-center mx-1 items-center py-4`}
      onPress={onPress}
    >
      <Text className="text-base font-semibold">⭐ {label}</Text>
    </TouchableOpacity>
  );
};

export default SortingButton;
