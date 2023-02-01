import { React, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, View, Text, SafeAreaView } from 'react-native';

import { assets, COLORS, SIZE, FONTS } from '../constants';
import { Logo, RecInput, MainButton } from '../components';

const Login = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.layout}>
        <View style={styles.headercontainer}>
          <Text style={styles.header}>Welcome!</Text>
          <Text style={[styles.header, {fontFamily: FONTS.regular}]}>Please login</Text>
        </View>
        <View style={styles.inputcontainer}>
          <RecInput 
            label="Email" 
            onChangeText={loginEmail => setEmail(loginEmail)}
            value={email} 
          />
          <RecInput 
            label='Password' 
            onChangeText={loginPassword => setPassword(loginPassword)}
            value={password} 
          />
          <MainButton 
            name='Login' 
            onPress={() => nav.navigate('TabNavigator', {screen: 'Home'})} 
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>Don't have an account?</Text>
          <Text 
            style={[styles.text, {paddingLeft: 5, color: COLORS.coral200}]}
            onPress={() => nav.navigate('Register')}>
            Create one here
          </Text>
        </View>
        <View style={styles.logo}>
          <Logo />
        </View>
      </View>
      <View style={styles.background}>
        <View style={styles.backcolor} />
        <Image style={styles.lines} source={assets.lines04} />
      </View>
    </SafeAreaView>
  );  
};

export default Login;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    margin: 40,
  },
  background: {
    backgroundColor: COLORS.white200,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0, 
    left: 0,
    zIndex: -1,
  },
  backcolor: {
    flex: 3,
  },
  headercontainer: {
    flex: 1,
  },
  header: {
    color: COLORS.black,
    fontFamily: FONTS.bold,
    fontSize: SIZE.heading,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZE.small,
    color: COLORS.black,
  },
  inputcontainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});