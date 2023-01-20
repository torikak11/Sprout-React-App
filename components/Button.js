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
        }}>
        <Text style={{
            fontFamily: FONTS.medium, 
            fontSize: SIZE.body, 
            color: COLORS.white100
            }}>{props.name}</Text>
    </Pressable>
  );
};
