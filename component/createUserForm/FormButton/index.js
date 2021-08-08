import React, { useState } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import firebase from '../../../database/firebase';

const FormButton = ({ onPress, title, bgColor }) => {

    return (<TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, {backgroundColor: bgColor}]}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>)
}

export default FormButton;
