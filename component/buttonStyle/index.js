import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import styles from './styles';


const ButtonStyle = (props) => {

    return(
            <TouchableOpacity style={styles.button} onPress={props.onpress}>
                <Ionicons name="person-add-sharp" size={28} color="white" />
            </TouchableOpacity>
    )
}

export default ButtonStyle; 