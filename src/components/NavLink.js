import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';

const NavLink = ({ navigation, text, routeName }) => {
  return <TouchableOpacity onPress={() => navigation.navigate({routeName})}>
    <Spacer>
      <Text style={styles.link}>{text}</Text>
    </Spacer>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  link: {
    color: 'blue'
  }
});

export default withNavigation(NavLink);
