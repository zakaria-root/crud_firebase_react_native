import React, { useState } from 'react';
import { View, Text} from 'react-native';
import styles from './styles';
import Input from 'react-native-input-style';
import FormButton from './FormButton';
import firebase from '../../database/firebase';


const CreateUserForm = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    const submit = async () => {
        if (name !== '' && email !== '' && phone !== '') {
            await firebase.db.collection('users').add({
                name: name,
                email: email,
                phone: phone
            }).then(() => {
                alert("user saved")
                props.navigation.navigation.navigate('ListUser')
            } ).catch((err) => {
                alert(err)
            });
        }else{
            alert("please fill the form corectly");
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Create User</Text>
            <Input
            onlyEnglish
            id="name"
            label="Full Name"
            keyboardType="default"
            placeholder="Enter your name"
            required
            autoCapitalize="sentences"
            errorText="Your name is invalid"
            onInputChange={(e, name) => {
                setName(name)
            }}
            initialValue={name}
            
            borderColor="#8F44FF"
            />
            <Input
            id="email"
            label="Email"
            required
            placeholder="Enter your email"
            autoCapitalize="sentences"
            errorText="Your name is invalid"
            onInputChange={(e, email) => {
                setEmail(email)
            }}
            initialValue={email}
            email
            borderColor="#8F44FF"
            />
            <Input
            id="phone"
            label="Phone"
            keyboardType="numeric"
            placeholder="Enter your phone"
            required
            errorText="Your password is invalid"
            onInputChange={(e, phone) => {
                setPhone(phone)
            }}
            initialValue={phone}
            borderColor="#8F44FF"
            />
            <View style={styles.button}>
            <FormButton title='Create' onPress={submit}/>
            </View>
            </View>
            
        </View>
    )
}

export default CreateUserForm;

