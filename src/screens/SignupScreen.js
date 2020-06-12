import React from 'react';
import { View, StyleSheet, } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';
import Spacer from '../components/Spacer';
import SigninScreen from './SigninScreen';

const SignupScreen = ({ navigation }) => {
  return <View style={styles.container}>
    <Spacer>
      <Text h3>Sign up for Tracker</Text>
    </Spacer>
    <Input label="Email" />
    <Spacer />
    <Input label="Password" />
    <Spacer />
    <Button title="Sign Up" onPress={() => navigation.navigate('Signin')} />
    <Spacer />
  </View>;
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  }
});

export default SignupScreen;
