import React from 'react';
import { StatusBar, Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to React Native!</Text>
      <StatusBar barStyle="default" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
