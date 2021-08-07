import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import firebase from '../../../database/firebase';

const FormButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );

export default FormButton;
