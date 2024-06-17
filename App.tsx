import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/app/components/screens/Home';
import LoginScreen from './src/app/components/screens/Login';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen 
            name="Home" 
            options={{ headerShown: false }} // Ocultar el encabezado
          >
            {(props: any) => <HomeScreen {...props} onLogout={handleLogout} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen 
            name="Login" 
            options={{ headerShown: false }} // Ocultar el encabezado
          >
            {(props: any) => <LoginScreen {...props} onLogin={handleLogin} />}
          </Stack.Screen>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
