import { View, Text } from 'react-native';
import React from 'react';
import { COLORS } from '../constants';

const ProgressBar = () => {
  return (
    <View style={{width: 200, height: 35, borderRadius: 20, borderColor: COLORS.white100, borderWidth: 2,}} />
  );
};

export default ProgressBar;