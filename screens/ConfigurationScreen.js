import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import {useSelector, useDispatch } from 'react-redux'
import TextField from '../components/TextField'
import BioCatch from 'react-native-biocatch';

const ConfigurationScreen = props => {
try {
    const res = BCChangeContext('CONFIGURATION');
    } catch (error) {
    console.log(`error: ${error}`);
    }
    const { navigation } = props
    console.log(" navigation: " + navigation);
    
    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={style.screen}>
                    <View style={{ height: 24 }}></View>
                        <TextField placeholder="Insert your user name" title="User Name" />
                        <View style={{ height: 24 }}></View>
                        <TextField placeholder="Insert your password" title="Password" />
                        <View style={{ height: 32 }}></View>
                        <TextField placeholder="Insert your first name" title="First Name" />
                        <View style={{ height: 32 }}></View>
                        <TextField placeholder="Insert your last name" title="Last Name" />
                        <View style={{ height: 32 }}></View>
                        <TextField placeholder="Insert your phone number" title="Phone Number" />
                        <View style={{ height: 32 }}></View>
                        <TextField placeholder="Insert your zip code" title="Zip/Postal Code" />
                        <View style={{ height: 32 }}></View>
                        <TouchableOpacity
                            style={style.mainButtonContainer}
                            onPress={() => {
                                navigation.goBack()
                            }}>
                            <Text style={style.mainButtonText}>Sign In</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={style.regularText}>Already a customer? </Text>
                            <TouchableOpacity
                                style={style.buttonContainer}
                                onPress={() => {
                                    console.log("This should be printed in console1");
                                    navigation.goBack()
                                    }}>
                                <Text style={style.buttonText}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </SafeAreaView>)
}

const style = StyleSheet.create({
    screen: {
        alignItems:"center"
    },
    mainButtonContainer: {
        backgroundColor: '#4088EA',
        borderRadius: 5,
        padding: 12,
        paddingHorizontal: 64,
        marginHorizontal: 32,
        marginBottom: 32,
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    mainButtonText: {
        fontSize: 20,
        color: '#fff'
    },
    buttonText: {
        fontSize: 14,
        color: '#4088EA'
    },
    regularText: {
        fontSize: 14,
    },
    titleTextView: {
        fontSize: 24,
        marginBottom: 32
    },
    buttonContainer: {
        paddingHorizontal: 10,
        color: '#4793CF'
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
    }
})


export default ConfigurationScreen