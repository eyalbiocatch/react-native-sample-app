import React, {useState, useEffect} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import TextField from '../components/TextField';
import {BCChangeContext} from '../BCSDKClientManager';

const LoginScreen = props => {
  const { navigation } = props
  console.log(" navigation: " + navigation);

  useEffect(() => {
    try {
      const res = BCChangeContext('LOGIN_1');
      console.log(`context changed ${JSON.stringify(res)}`);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  }, []);

  {
    Platform.OS != 'ios' ? (
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
      />
    ) : (
      <View />
    );
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={style.screen}>
        <View style={style.mainHeaderContainer}>
          <Text style={style.mainHeaderText}>DemoBank</Text>
          <Text style={style.subtitleHeaderText}>
            Secured online banking{'\n'}using behavioral biometrics
          </Text>
          {/* <TouchableOpacity
                        style={style.buttonContainer}
                        onPress={() => {
                            console.log("This should be printed in console1");
                            navigation.goBack()
                            }}>
                        <Text style={style.buttonText}>Close</Text>
                    </TouchableOpacity> */}
        </View>
        <Text style={style.titleTextView}>Sign In to your account</Text>
        <TextField
          placeholder="Insert your user name"
          title="User Name"
          accessibilityId="username"
        />
        <View style={{height: 24}}></View>
        <TextField
          placeholder="Insert your password"
          title="Password"
          accessibilityId="password"
        />
        <View style={{height: 32}}></View>
        <TouchableOpacity
          style={style.mainButtonContainer}
          onPress={() => {
            console.log('navigate to dashboard');
            navigation.navigate('Dashboard')
          }}>
          <Text style={style.mainButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text style={style.regularText}>Not a customer yet? </Text>
          <TouchableOpacity
            style={style.buttonContainer}
            onPress={() => {
              console.log('This should be printed in console1');
              navigation.navigate('SignUp');
            }}>
            <Text style={style.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  screen: {
    alignItems: 'center',
  },
  mainHeaderContainer: {
    backgroundColor: '#051D35',
    alignItems: 'center',
    marginBottom: 32,
    paddingBottom: 24,
    paddingTop: 32,
    alignSelf: 'stretch',
  },
  mainButtonContainer: {
    backgroundColor: '#4088EA',
    borderRadius: 5,
    padding: 12,
    paddingHorizontal: 64,
    marginHorizontal: 32,
    marginBottom: 32,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  mainButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  buttonText: {
    fontSize: 14,
    color: '#4088EA',
  },
  regularText: {
    fontSize: 14,
  },
  titleTextView: {
    fontSize: 24,
    marginBottom: 32,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    color: '#4793CF',
  },
  image: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    position: 'relative',
    aspectRatio: 1.9047,
    marginRight: 32,
    marginLeft: 32,
    marginTop: 12,
    marginBottom: 12,
  },
  mainHeaderText: {
    fontSize: 24,
    color: '#fff',
  },
  subtitleHeaderText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});

export default LoginScreen;
