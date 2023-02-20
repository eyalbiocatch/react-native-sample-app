import React from 'react'
import { StyleSheet, Text, View, Touchable, TouchableOpacity } from 'react-native'

const PayeeItem = props => {
    return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: '#f4f4f4',
        marginVertical: 10,
        borderWidth: 1
      }
})

export default PayeeItem