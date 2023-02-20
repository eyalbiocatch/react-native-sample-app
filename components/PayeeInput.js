import React, { useState }  from 'react'
import { StyleSheet, Button, TextInput, View } from 'react-native'

const PayeeInput = props => {
    const [enteredPayee, setEnteredPayee] = useState('');

    const payeeInputHandler = (enteredText) => {
        setEnteredPayee(enteredText);
      }

    return <View style={styles.fieldContainer}>
    <TextInput style={styles.textField} placeholder="Insert Payee" 
    onChangeText={payeeInputHandler} 
    value={props.enteredGoal}
    />
    <Button title="Add" onPress={props.onAddPayee.bind(this, enteredPayee)} />
  </View>
}

const styles = StyleSheet.create({
    fieldContainer: {
        flexDirection: 'row'
      },
      textField: {
        width: '80%'
      }
})

export default PayeeInput