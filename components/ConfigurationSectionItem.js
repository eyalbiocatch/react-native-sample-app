import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ConfigurationSectionItem = props => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: '#f4f4f4',
        marginVertical: 1,
      },
      text: {
        fontSize: 16,
        color: '#000',
        textAlign: 'auto',
        fontWeight: 'bold'
    }
})

export default ConfigurationSectionItem