import React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { StatusBar } from 'react-native'; 
import AppLoading from 'expo-app-loading';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {
    useFonts, 
    Poppins_400Regular, 
    Poppins_500Medium, 
    Poppins_700Bold, 
  } from '@expo-google-fonts/poppins'

import { AppRoutes } from './src/routes/app.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  
  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent />
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}

