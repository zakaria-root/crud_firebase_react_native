import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

const ListUserScreen = () => {
    return(
        <View style={styles.container}>
            <Text>hi in ListUserScreen page</Text>
        </View>
    )
}

export default ListUserScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });