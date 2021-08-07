import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatUserScreen = () => {
    return(
        <View style={styles.container}>
            <Text>hi in createUserScreen page</Text>
        </View>
    )
}

export default CreatUserScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });