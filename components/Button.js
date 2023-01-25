import { Text, Pressable, StyleSheet } from 'react-native';
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

export const ViewButton = (props) => {
  return (
    <Pressable style={props.filled == true ? styles.filledBackground : styles.outlinedBackground}
        onPress={props.onPress}    
    >
        <Text style={props.filled == true ? styles.filledText : styles.outlinedText}>{props.name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  filledBackground: {
    backgroundColor: COLORS.black,
    width: 90,
    height: 35,
    borderRadius: 20,
    ...SHADOWS.shadow01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlinedBackground: {
    borderWidth: 2,
    borderColor: COLORS.black,
    width: 90,
    height: 35,
    borderRadius: 20,
    ...SHADOWS.shadow01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filledText: {
    fontFamily: FONTS.medium, 
    fontSize: SIZE.body, 
    color: COLORS.white200,
  },
  outlinedText: {
    fontFamily: FONTS.medium, 
    fontSize: SIZE.body, 
    color: COLORS.black,
  }
});