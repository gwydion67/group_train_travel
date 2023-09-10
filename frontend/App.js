/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './Screen/Login';
import NavStack from './Navigation/StackNavigator';
import { hideNavigationBar } from 'react-native-navigation-bar-color';
import store from './Store';
import { Provider } from 'react-redux';
function App() {
  hideNavigationBar();
  return (

<>
<Provider store={store}>

<StatusBar translucent backgroundColor='transparent' />
  <NavStack />
 {/* <Login /> */}
</Provider>
</>
 
 
  );
}


export default App;
