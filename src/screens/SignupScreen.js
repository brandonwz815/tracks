import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return <View>
    <Text style={{ fontSize: 48 }}>SignupScreen</Text>
    <Button title="go to Sign in" onPress={() => navigation.navigate('Signin')}></Button>
    <Button title="go to main flow" onPress={() => navigation.navigate('mainFlow')}></Button>
  </View>;
};

const styles = StyleSheet.create({});

export default SignupScreen;
