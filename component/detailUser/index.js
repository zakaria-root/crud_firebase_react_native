import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    Button,
    ActivityIndicator
} from 'react-native';
import styles from './styles';
import firebase from '../../database/firebase';
import Input from 'react-native-input-style';
import { Alert } from 'react-native';

const DetailUser = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoaded, setIsLoaded] = useState(true);
    
    const getEementById = async (id) => {
        await firebase.db.collection('users').doc(id).get().then((doc) => {
            setName(doc.data().name);
            setEmail(doc.data().email);
            setPhone(doc.data().phone);
            setIsLoaded(false)
        })
        .catch((err) => {
            setIsLoaded(false)
            alert(err)
        });
        
    }
    useEffect(() => {
        getEementById(props.navigation.route.params.userId)
    })
    
    const updateUser = async () => {
        setIsLoaded(true)
        const id = props.navigation.route.params.userId;
        const refdb = firebase.db.collection('users').doc(id)
        await refdb.set({
            id,
            name, 
            email, 
            phone
        }).then(() => {
            setName("")
            setEmail("")
            setPhone("")
            props.navigation.navigation.navigate('ListUser')
            1
        })
        .catch((err) => {
            
            alert(err)
           
        })
        
    }

    const deletUser = () => {
        Alert.alert(
            "Delete User",
            "are you shure you delete this user",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
              },
              { text: "OK", onPress: async () => {
                const refdb = firebase.db.collection('users').doc(props.navigation.route.params.userId)
                await refdb.delete()
                props.navigation.navigation.navigate('ListUser')
              } }
            ]
          );
    }
    return isLoaded ? (
    <View style={styles.cercleContainer}>
        <ActivityIndicator color="#8F44FF" size={40}/>
    </View>
    ) : (
        <ScrollView>
            <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Button
            title="Update User" 
            onPress={updateUser}
            color="#8F44FF"
            />
            </View>
            <View style={styles.buttonContainerRed}>

            <Button
            title="Delet User" 
            onPress={deletUser}
            color="red"
            />
            </View>

            <View style={styles.formContainer}>
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
            </View>
        </View>
        </ScrollView>
        
    )
}

export default DetailUser;


