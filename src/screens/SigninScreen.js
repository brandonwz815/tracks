import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return <View style={styles.container}>
    <NavigationEvents 
      onWillFocus={clearErrorMessage}
      // onWillBlur={clearErrorMessage}
    />
    <AuthForm
      headerText="Sign In"
      errorMessage={state.errorMessage}
      submitButtonText="Sign In"
      onSubmit={signin}
    />
    <NavLink
      routeName="Signup"
      text="Don't have an account? Sign up instead!"
    />
  </View>;
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  },
});

export default SigninScreen;
