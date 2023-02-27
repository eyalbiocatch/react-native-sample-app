import React, {useState} from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import TextField from '../components/TextField';
import BioCatch from 'react-native-biocatch';
import {BCChangeContext} from '../BCSDKClientManager';

const SignUpScreen = props => {
  try {
    const res = BCChangeContext('REGISTER');
  } catch (error) {
    console.log(`error: ${error}`);
  }
  const { navigation } = props
  console.log(" navigation: " + navigation);

  const isLogin = useSelector(state => state.users.isLoggedIn);

  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={style.screen}>
            <View style={style.mainHeaderContainer}>
              <Text style={style.mainHeaderText}>DemoBank</Text>
              <Text style={style.subtitleHeaderText}>
                Secured online banking{'\n'}using behavioral biometrics
              </Text>
            </View>
            <Text style={style.titleTextView}>Apply for an account</Text>
            <TextField placeholder="Insert your user name" title="User Name" />
            <View style={{height: 24}}></View>
            <TextField placeholder="Insert your password" title="Password" />
            <View style={{height: 32}}></View>
            <TextField
              placeholder="Insert your first name"
              title="First Name"
            />
            <View style={{height: 32}}></View>
            <TextField placeholder="Insert your last name" title="Last Name" />
            <View style={{height: 32}}></View>
            <TextField
              placeholder="Insert your phone number"
              title="Phone Number"
            />
            <View style={{height: 32}}></View>
            <TextField
              placeholder="Insert your zip code"
              title="Zip/Postal Code"
            />
            <View style={{height: 32}}></View>
            <TouchableOpacity
              style={style.mainButtonContainer}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={style.mainButtonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row'}}>
              <Text style={style.regularText}>Already a customer? </Text>
              <TouchableOpacity
                style={style.buttonContainer}
                onPress={() => {
                  console.log('This should be printed in console1');
                  navigation.goBack();
                }}>
                <Text style={style.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
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

export default SignUpScreen;
