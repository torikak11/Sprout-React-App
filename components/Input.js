import { View, TextInput, Text, Pressable } from 'react-native';
import Checkbox from 'expo-checkbox';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

import { COLORS, FONTS, SHADOWS, SIZE } from '../constants';

export const RecInput = (props) => {


  return (
    <View>
        <TextInput 
          style={{
            height: 45,
            width: 280,
            borderWidth: 1,
            borderColor: COLORS.black,
            borderRadius: 7,
            backgroundColor: COLORS.white100,
            ...SHADOWS.shadow01,
            }}
          selectionColor={COLORS.black}
          inputMode='text'
          secureTextEntry={props.label == 'Password' || props.label == 'Re-enter Password' ? true : false}
          onChangeText={props.onChangeText}
          value={props.value}
        />
        <Text 
          style={{
            color: COLORS.black, 
            fontFamily: FONTS.regular, 
            fontSize: SIZE.small,
            padding: 5,
          }}>
          {props.label}
        </Text>
    </View>
    
  );
};

export const CheckBoxInput = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
        <Pressable>
          <Ionicons 
            name={props.isSelected ? "checkbox-outline" : "square-outline"}
            color={COLORS.white100} 
            size={30} 
          />
        </Pressable>
        <Text style={{fontSize: SIZE.body, color: COLORS.white100, paddingLeft: 15, paddingTop: 7,}}
        >{props.text}</Text>
    </View>
    
  );
};
