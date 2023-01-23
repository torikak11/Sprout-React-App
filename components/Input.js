import { View, TextInput, Text } from 'react-native';
import Checkbox from 'expo-checkbox';
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
          secureTextEntry={props.label == 'Password' ? true : false}
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
        <Checkbox 
          value={props.isSelected}
          onValueChange={props.setSelection}
          style={{
            color: COLORS.green200,
            
          }}
        />
        <Text style={{color: COLORS.green200}}>{props.text}</Text>
    </View>
    
  );
};
