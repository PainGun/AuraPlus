// App.tsx
import React, { useState } from 'react';
import 'react-native-gesture-handler';
import Home from './src/app/components/screens/Home';
import Login from './src/app/components/screens/Login';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
};

export default App;
