import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../../../credenciales';
import Loading from './loading';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso');
      onLogin();
    } catch (e: any) {
      console.error('Error en inicio de sesión:', e.message);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Image source={require('../../../../assets/aura.png')} style={styles.logo} />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            onChangeText={setEmail}
            value={email}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#888"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            placeholderTextColor="#888"
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>¿No tienes una cuenta? </Text>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Regístrate.</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#100D28',
  },
  logo: {
    width: 300,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 12,
    paddingHorizontal: 15,
    backgroundColor: '#fafafa',
    fontSize: 16,
    color: '#333',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#C484F1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  forgotPasswordText: {
    color: '#C484F1',
    marginTop: 15,
    fontSize: 14,
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  signupText: {
    fontSize: 14,
    color: '#888',
  },
  signupLink: {
    fontSize: 14,
    color: '#C484F1',
  },
});

export default Login;
