/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {BCStart} from './BCSDKClientManager';
import {makeid} from './utils/Helper';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import PreLoginScreen from "./screens/PreLoginScreen";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ConfigurationScreen from "./screens/ConfigurationScreen";

import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
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

const Stack = createNativeStackNavigator();

async function initializeBioCatch() {
  try {
    const csid = makeid(32);
    var wupUrl = 'https://wup-4ff4f23f.eu.v2.we-stats.com';
    var cid = 'dummy';
    console.log('csid: ' + csid);

    await BCStart(wupUrl, cid, csid, true);
  } catch (error) {
    console.log(`error: ${error}`);
  }
}

const App: () => Node = () => {
  // Run the function on didMount
  useEffect(() => {
    initializeBioCatch();
  }, []);
  console.log('Biocatch SDK initialized');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PreLogin"
          component={PreLoginScreen}
          options={{title: 'PreLogin Screen'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login Screen'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{title: 'Dashboard Screen'}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: 'SignUp Screen'}}
        />
        <Stack.Screen
          name="Configuration"
          component={ConfigurationScreen}
          options={{title: 'Configuration Screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
