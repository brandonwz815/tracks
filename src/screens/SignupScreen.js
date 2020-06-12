import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
  return <>
    <Spacer>
      <Text h3>Sign up for Tracker</Text>
    </Spacer>
    <Input label="Email" />
    <Spacer />
    <Input label="Password" />
    <Spacer />
    <Button title="Sign Up" onPress={() => navigation.navigate('Signin')} />
    <Spacer />
  </>;
};

const styles = StyleSheet.create({});

export default SignupScreen;
