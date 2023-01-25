import { View, TextInput, Text } from 'react-native';
import React from 'react';

import { COLORS, FONTS, SHADOWS, SIZE } from '../constants';

export const VerticalCard = (props) => {
    return (
        <View
            style={{
                width: 140,
                height: 180,
                backgroundColor: props.color,
                marginHorizontal: 7,
                marginTop: 26,
                borderRadius: 20,
                ...SHADOWS.shadow01,
            }}>
                <Text
                    style={{
                        fontFamily: FONTS.semiBold,
                        fontSize: SIZE.heading,
                        color: COLORS.white100,
                        margin: 20,
                    }}
                >{props.type == 'goal' ? props.progress + '%' : props.progress}</Text>
                <Text
                    style={{
                        fontFamily: FONTS.medium,
                        fontSize: SIZE.body,
                        color: COLORS.white100,
                        marginTop: 40,
                        marginLeft: 7,
                    }}>{props.name}</Text>
        </View>
    );
};