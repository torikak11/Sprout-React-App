import { View, TextInput, Text } from 'react-native';
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
            borderColor: COLORS.brown300,
            borderRadius: 7,
            backgroundColor: COLORS.white200,
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
            color: COLORS.white100, 
            fontFamily: FONTS.regular, 
            fontSize: SIZE.small,
            padding: 5,
          }}>
          {props.label}
        </Text>
    </View>
    
  );
};
