import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import DetailUser from '../component/detailUser';


const DetailUserScreen = (props) => {
    return(
        <View>
            <DetailUser navigation={props}/>
        </View>
    )
}

export default DetailUserScreen;
