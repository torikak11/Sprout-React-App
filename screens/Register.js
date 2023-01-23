import { useNavigation } from '@react-navigation/native';
import { React, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { MainButton, RecInput } from '../components';

import { assets, COLORS, SIZE, FONTS } from '../constants';

const Register = () => {
  const nav = useNavigation();

  return (
    <SafeAreaView>
      <Text>Create an account</Text>
      <RecInput label="Name" />
      <RecInput label="Email" />
      <RecInput label="Password" />
      <RecInput label="Re-enter Password" />
      <CheckBoxInput />
      <MainButton name="Submit" onPress={() => nav.navigate('Home')} />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  layout: {
    
  },
});