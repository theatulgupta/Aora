import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { icons } from '@/constants';

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setshowPassword] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base font-medium text-gray-100">{title}</Text>
      <View className="flex-row items-center w-full h-16 px-4 border-2 border-black-200 focus:border-secondary rounded-2xl bg-black-100">
        <TextInput
          value={value}
          onChange={handleChangeText}
          placeholderTextColor="#7B7B8B"
          placeholder={placeholder}
          className="flex-1 text-base text-white font-psemibold"
          secureTextEntry={title === 'Password' && !showPassword}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setshowPassword(!showPassword)}>
            <Image className="w-6 h-6 1" resizeMode="contain" source={!showPassword ? icons.eye : icons.eyeHide} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
