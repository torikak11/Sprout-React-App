import { Text, Pressable } from 'react-native';
import React from 'react';

import { COLORS, FONTS, SIZE, SHADOWS } from '../constants';

export const MainButton = (props) => {
  return (
    <Pressable style={{
        backgroundColor: COLORS.black,
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 20,
        ...SHADOWS.shadow01,
        }}
        onPress={props.onPress}    
    >
        <Text style={{
            fontFamily: FONTS.medium, 
            fontSize: SIZE.body, 
            color: COLORS.white200
            }}>{props.name}</Text>
    </Pressable>
  );
};

export const SecondaryButton = (props) => {
  return (
    <Pressable style={{
        backgroundColor: COLORS.green100,
        paddingVertical: 10,
        paddingHorizontal: 100,
        borderRadius: 20,
        ...SHADOWS.shadow01,
        }}
        onPress={props.onPress}    
    >
        <Text style={{
            fontFamily: FONTS.medium, 
            fontSize: SIZE.body, 
            color: COLORS.black
            }}>{props.name}</Text>
    </Pressable>
  );
};
