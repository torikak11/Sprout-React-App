import { useNavigation } from '@react-navigation/native';
import { React, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { RecInput, SecondaryButton, CheckBoxInput } from '../components';

import { assets, COLORS, SIZE, FONTS } from '../constants';

const Register = () => {
  const nav = useNavigation();
  const[isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView>
      <Text>Create an account</Text>
      <RecInput label="Name" />
      <RecInput label="Email" />
      <RecInput label="Password" />
      <RecInput label="Re-enter Password" />
      <CheckBoxInput
        text='I agree to the terms and services'
        value={isSelected}
        onValueChange={setSelection}
      />
      <SecondaryButton name="Submit" onPress={() => nav.navigate('Home')} />
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    margin: 40,
  },
});