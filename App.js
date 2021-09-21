import 'react-native-gesture-handler';
import React from 'react';

import Main from './src';
import { AuthProvider } from './src/application/Context/authContext';

export default function App() {
  return (
    <AuthProvider>
      <Main />
    </AuthProvider>
  )
}