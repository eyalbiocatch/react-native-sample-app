import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
export const IMAGELOGO = require('../assets/images/BioCatch_Logo.png'); 
import {BCChangeContext} from '../BCSDKClientManager';

const PreLoginScreen = props => {
    const { navigation } = props
    console.log(" PreLoginScreen navigation: " + navigation);

    useEffect(() => {
        try {
          const res = BCChangeContext('PRE_LOGIN');
          console.log(`context changed PreLoginScreen`);
        } catch (error) {
          console.log(`error: ${error}`);
        }
      }, []);
    
    return (
        <SafeAreaView style={style.screen}>
            <View style={style.screen}>
                <Image source={ IMAGELOGO } style={style.image} />
                <Text style={style.textView}>Welcome to BioCatch Sample app</Text>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}></View>
                <TouchableOpacity
                    style={style.mainButtonContainer}
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={style.mainButtonText}>Login Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.buttonContainer}
                    onPress={() => navigation.navigate('Configuration')}>
                    <Text style={style.buttonText}>Configuration Screen</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        )
}

const style = StyleSheet.create({
    screen: {
        flex: 1, 
        alignItems:"center",
        backgroundColor: '#ebebeb'
    },
    mainButtonContainer: {
        backgroundColor: '#4793CF',
        borderRadius: 5,
        padding: 10,
        paddingHorizontal: 64,
        margin: 20,
        marginBottom: 32
    },
    mainButtonText: {
        fontSize: 20,
        color: '#fff'
    },
    buttonText: {
        fontSize: 16,
        color: '#4793CF'
    },
    textView: {
        fontSize: 18,
    },
    buttonContainer: {
        padding: 10,
        paddingHorizontal: 64,
        marginBottom: 32,
        color: '#4793CF'
    },
    image: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        aspectRatio: 2,
        alignItems: 'center',
        position: 'relative', 
        marginRight: 1,
        marginLeft: 1,
        marginTop: 12,
        marginBottom: 12,
      },
})

export default PreLoginScreen