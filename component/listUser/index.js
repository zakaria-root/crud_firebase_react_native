import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native';
import styles from './styles';
import firebase from '../../database/firebase';
import FormButton from '../createUserForm/FormButton';
import { ListItem, Avatar } from 'react-native-elements';
import { Button } from 'react-native';

export default function ListUser(props){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        firebase.db.collection('users').onSnapshot(querySnapShot => {
            const users = [];
        querySnapShot.docs.forEach(doc => {
        const {name, email, phone} = doc.data();
            users.push({
                id:doc.id,
                name ,
                email,
                phone
            })
        })
        setUsers(users);
    })
    },[]);

    
    return(
        <View style={styles.container}>
            <View style={styles.buttonContainer}>

            <Button
            title="Create User" 
            onPress={() => {
                props.navigation.navigation.navigate('CreateUser')
            }}
            color="#8F44FF"
            />
        </View>
            {
                users.map(user => (
                    <ListItem
                    key={user.id}
                    bottomDivider
                    onPress={() => {
                        props.navigation.navigation.navigate('DetailUser', {
                            userId :user.id
                        })
                    }}
                    >
                        <ListItem.Chevron />
                        <Avatar 
                        source={{ uri: 'https://www.gruppolactalisitalia.com/wp-content/uploads/2017/03/persone_it-1.jpg' }}
                        rounded
                        />
                        <ListItem.Content>
                            <ListItem.Title> {user.name} </ListItem.Title>
                            <ListItem.Subtitle> {user.email} </ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))
            }
        </View>
    )
}