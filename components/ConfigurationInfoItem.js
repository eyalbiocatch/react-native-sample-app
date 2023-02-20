import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const ConfigurationInfoItem = props => {
    return (
        <View style={styles.listItem}>
                {
                    props.dataList.map( (item, i) => {
                        return(
                            <View style={styles.row} key={i}>
                                <Text style={styles.text}>{item.title}</Text>
                                <Text style={styles.value}>{item.value}</Text>
                            </View>
                        )
                    })
                }
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: '#ededed',
        marginVertical: 1,
      },
      text: {
        fontSize: 16,
        color: '#000',
        textAlign: 'auto',
        flex: 1
      },
      value: {
        fontSize: 16,
        color: '#000',
        textAlign: 'auto',
        flex: 0
      },
      row:{
        flexDirection:'row'    //Step 1
      }
})

export default ConfigurationInfoItem