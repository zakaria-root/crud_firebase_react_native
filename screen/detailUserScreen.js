import React from 'react';
import { View, Text,StyleSheet } from 'react-native';


const DetailUserScreen = () => {
    return(
        <View style={styles.container}>
            <Text>hi in DetailUserScreen page</Text>
        </View>
    )
}

export default DetailUserScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
