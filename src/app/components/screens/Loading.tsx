import React from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

const Loading: React.FC = () => {
  return (
    <View style={styles.container}>
      <Animatable.Image 
        animation="rotate" 
        iterationCount="infinite" 
        easing="linear" 
        duration={2000} 
        source={require('../../../../assets/aura.png')} 
        style={styles.logo} 
      />
      <ActivityIndicator size="large" color="#C484F1" style={styles.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#100D28',
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
  indicator: {
    marginTop: 20,
  },
});

export default Loading;
