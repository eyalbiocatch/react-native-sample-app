import React, { useState }  from 'react'
import { Platform, StyleSheet, TextInput, View, Text } from 'react-native'

const TextField = props => {
    const [enteredText, setEnteredText] = useState('');

    const textInputHandler = (enteredText) => {
      setEnteredText(enteredText);
      }

    return <View style={styles.fieldContainer}>
      <Text style={styles.titleText}>{props.title}</Text>
      <View style={styles.textFieldContainer}>
      {Platform.OS != 'ios' ?
        <TextInput styles={styles.textFieldStyle} placeholder={props.placeholder}  testID={props.accessibilityId} name={props.accessibilityId}
          onChangeText={textInputHandler} 
          value={enteredText}
        /> :
        <TextInput styles={styles.textFieldStyle} placeholder={props.placeholder} testID={props.accessibilityId}
          onChangeText={textInputHandler}
          value={enteredText}
      /> }
      </View>
      {Platform.OS != 'ios' ? 
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
          }}
        /> : 
        <View />
      }
      
  </View>
}

const styles = StyleSheet.create({
    fieldContainer: {
      alignSelf: 'stretch',
      marginHorizontal: 32,
      height: 60
    },
    textFieldContainer: {
      backgroundColor: '#ededed',
      padding: 10,
      borderRadius: 5,
    },
    textFieldStyle: {
      width: '100%'
    },
    titleText: {
      fontSize: 15,
      marginBottom: 4
    },
})

export default TextField