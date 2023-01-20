import { View, TextInput, Text } from 'react-native';
import React from 'react';

import { COLORS, FONTS, SHADOWS, SIZE } from '../constants';

export const RecInput = (props) => {
  return (
    <View>
        <TextInput style={{
            height: 45,
            width: 280,
            borderWidth: 2,
            borderColor: COLORS.brown200,
            borderRadius: 7,
            backgroundColor: COLORS.white200,
            ...SHADOWS.shadow01,
            }}
        />
        <Text style={{
            color: COLORS.white100, 
            fontFamily: FONTS.regular, 
            fontSize: SIZE.small,
            padding: 5,
            }}
        >{props.label}</Text>
    </View>
    
  );
};
