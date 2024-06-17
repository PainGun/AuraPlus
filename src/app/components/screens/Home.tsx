// HomeScreen.tsx (anteriormente WelcomeScreen)
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import auth from '../../../../credenciales';

interface HomeScreenProps {
  onLogout: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onLogout }) => {

  const handleLogout = async () => {
    try {
      await auth.signOut();
      onLogout();
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a AuraPlus!</Text>
      <Text style={styles.subtitle}>Explora tu experiencia única aquí</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HomeScreen;
