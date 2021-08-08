import React, { useState } from 'react';
import { 
    View, 
    Text, 
    ImageBackground, 
    ActivityIndicator
} from 'react-native';
import styles from './styles';
import Input from 'react-native-input-style';
import FormButton from './FormButton';
import firebase from '../../database/firebase';


const CreateUserForm = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    
    const submit = async () => {
        if (name !== '' && email !== '' && phone !== '') {
            setIsLoaded(true);
            await firebase.db.collection('users').add({
                name: name,
                email: email,
                phone: phone
            }).then(() => {
                alert("user created")
                setIsLoaded(false)
                props.navigation.navigation.navigate('ListUser')
            } ).catch((err) => {
                setIsLoaded(false)
                alert(err)
            });
        }else{
            alert("please fill the form corectly");
        }
    }
    return isLoaded ? (
        <View style={styles.cercleContainer}>
        <ActivityIndicator color="#AD84BF" size={45}/>
        </View>
    ) : (
        <View style={styles.container}>
            <ImageBackground
            blurRadius={20}
            style={styles.image}
            source={{ uri : 'https://c4.wallpaperflare.com/wallpaper/757/447/693/flowers-macro-roses-water-drops-wallpaper-preview.jpg'}}
            />
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
            
            borderColor="#AD84BF"
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
            borderColor="#AD84BF"
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
            borderColor="#AD84BF"
            />
            <View style={styles.button}>
            <FormButton title='Create' onPress={submit} bgColor="#5B458C"/>
            </View>
            </View>
            
        </View>
    )
}

export default CreateUserForm;

