import { View, Image } from 'react-native';
import React from 'react';

import { assets, SHADOWS } from '../constants';

const Logo = () => {
  return (
    <View>
      <Image 
        source={assets.logo} 
      />
    </View>
  );
};

export default Logo;