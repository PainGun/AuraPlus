import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, Icon } from 'react-native-elements';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Por favor, completa todos los campos');
    } else {
      Alert.alert('Éxito', `Email: ${email}, Password: ${password}`);
    }
  };

  return (
    <View style={styles.container}>
      <Icon name="user" type="font-awesome" color="#000" size={100} style={styles.icon} />
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholderTextColor="#ccc"
      />
      <Button
        title="Ingresar"
        buttonStyle={styles.button}
        titleStyle={styles.buttonTitle}
        onPress={handleLogin}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',  // Fondo negro para un estilo más rudo
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',  // Texto blanco
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    height: 50,
    borderColor: '#ff6600',  // Borde naranjo
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    width: '100%',
    paddingHorizontal: 10,
    color: '#fff',  // Texto blanco
  },
  button: {
    backgroundColor: '#ff6600',  // Botón naranjo
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonTitle: {
    color: '#fff',  // Texto del botón blanco
    fontSize: 18,
    fontWeight: 'bold',
  },
});
