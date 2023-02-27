import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import TextField from '../components/TextField';
export const IMAGELOGO = require('../assets/images/BioCatch_Logo.png');

const PaymantScreen = props => {
  try {
    const res = BCChangeContext('PAYMENT');
  } catch (error) {
    console.log(`error: ${error}`);
  }
  const {navigation} = props;
  console.log(' navigation: ' + navigation);

  return (
    <SafeAreaView style={style.screen}>
      <View style={style.screen}>
        <Image source={IMAGELOGO} style={style.image} />
        <Text style={style.titleTextView}>Payment Screen</Text>
        <TextField
          placeholder="Insert payee phone number"
          title="Phone Number"
          accessibilityId="phone"
        />
        <View style={{height: 24}}></View>
        <TextField
          placeholder="Insert amount to transfer"
          title="Amount"
          accessibilityId="amount"
        />
        <View style={{height: 32}}></View>
        <TouchableOpacity
          style={style.mainButtonContainer}
          onPress={() => {
            console.log('navigate to dashboard');
            navigation.navigate('Dashboard');
          }}>
          <Text style={style.mainButtonText}>Make Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
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
  titleTextView: {
    fontSize: 24,
    marginBottom: 32,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    color: '#4793CF',
  },
  mainButtonContainer: {
    backgroundColor: '#4793CF',
    alignItems: 'center',
    width: 320,
    borderRadius: 5,
    padding: 10,
    margin: 20,
    marginBottom: 32,
    color: '#4793CF'
  },
  mainButtonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default PaymantScreen;
