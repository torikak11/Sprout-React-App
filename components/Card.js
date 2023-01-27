import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

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

export const HorizontalCard = (props) => {
    const nav = useNavigation();

    return (
        <Pressable
            style={{
                backgroundColor: props.color,
                height: 120,
                marginHorizontal: 25,
                marginVertical: 12,
                borderRadius: 20,
                ...SHADOWS.shadow01,
            }}
            onPress={() => nav.navigate('GoalStackNavigator', {screen: 'Goal Overview'})}
        >
            <View
                style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}
            >
                <Text
                    style={{
                        fontFamily: FONTS.medium,
                        fontSize: SIZE.subheading,
                        color: COLORS.white100,
                        marginLeft: 10,
                        marginTop: 15,
                    }}>{props.name}</Text>
                <Ionicons 
                    name="arrow-forward" 
                    color={COLORS.white100} 
                    size={30}
                    style={{
                        marginRight: 20,
                        marginTop: 15,
                    }} />
                
            </View>     
        </Pressable>
    );
};