import React, { useEffect, useState } from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    Button,
    ActivityIndicator,
    ImageBackground
} from 'react-native';
import styles from './styles';
import firebase from '../../database/firebase';
import Input from 'react-native-input-style';
import { Alert } from 'react-native';
import FormButton from '../createUserForm/FormButton';

const DetailUser = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [isLoaded, setIsLoaded] = useState(true);
    
    const getEementById = async (id) => {
        await firebase.db.collection('users').doc(id).get()
        .then((doc) => {
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
    
    const updateUser = () => {
        
        Alert.alert(
            "Update User",
            "are you shure you update this user",
            [
            {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
            },
            { text: "Yes", onPress: async () => {
                
                const refdb = firebase.db.collection('users').doc(props.navigation.route.params.userId)
                await refdb.set({
                    id,
                    name, 
                    email, 
                    phone
                }).then(() => {
                    props.navigation.navigation.navigate('ListUser')
                })
                .catch((err) => {
                    alert(err)
                })
              } }
            ]
          );
        
        
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
              { text: "Yes", onPress: async () => {
                const refdb = firebase.db.collection('users').doc(props.navigation.route.params.userId)
                await refdb.delete()
                props.navigation.navigation.navigate('ListUser')
              } }
            ]
          );
    }
    return isLoaded ? (
    <View style={styles.cercleContainer}>
        <ActivityIndicator color="#AD84BF" size={45}/>
    </View>
    ) : (
        <ScrollView style={styles.container}>
            <ImageBackground
            blurRadius={20}
            style={styles.image}
            source={{ uri : 'https://c4.wallpaperflare.com/wallpaper/757/447/693/flowers-macro-roses-water-drops-wallpaper-preview.jpg'}}
            />
            <View style={styles.formContainer}>
                <Text style={styles.title}>User Information</Text>
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
            <FormButton title='Update User' onPress={updateUser} bgColor="#5B458C"/>
            </View>
            <View style={styles.button2}>
            <FormButton title='Delete User' onPress={deletUser} bgColor="#BF216B"/>
            </View>
            </View>
            
        </ScrollView>
    )
}

export default DetailUser;


