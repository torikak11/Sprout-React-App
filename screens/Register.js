import { useNavigation } from '@react-navigation/native';
import { React, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { RecInput, SecondaryButton, CheckBoxInput } from '../components';

import { assets, COLORS, SIZE, FONTS } from '../constants';

const Register = () => {
  const nav = useNavigation();
  const[isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.container}>
        <Text style={styles.heading}>Create an account</Text>
        <View style={styles.inputcontainer}>
          <RecInput label="Name" />
          <RecInput label="Email" />
          <RecInput label="Password" />
          <RecInput label="Re-enter Password" />
          <CheckBoxInput
            text='I agree to the terms and services'
            value={isSelected}
            onValueChange={setSelection}
          />
        </View>
        <View style={styles.buttoncontainer}>
          <SecondaryButton name="Submit" onPress={() => nav.navigate('Home')} />
        </View>
      </View>
      
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: COLORS.white200,
  },
  container: {
    flex: 1,
    margin: 40,
  },
  heading: {
    fontFamily: FONTS.bold,
    fontSize: SIZE.heading,
    color: COLORS.black,
    marginBottom: 10,
  },
  inputcontainer: {
    flex: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttoncontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});