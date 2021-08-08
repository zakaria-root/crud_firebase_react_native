import React, { useEffect, useState } from 'react'
import { 
    View, 
    Text, 
    FlatList,
    Animated,
    ImageBackground
} from 'react-native';

import styles from './styles';
import firebase from '../../database/firebase';
import FormButton from '../createUserForm/FormButton';
import {Image } from 'react-native-elements';
import { TouchableOpacity, TouchableHighlight} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';


export default function MyListUser(props){
    const AVATAR_SIZE = 70;
    const SPACE = 15;
    const ITEM_SIZE = AVATAR_SIZE + 3*SPACE;
    const scrollY = React.useRef(new Animated.Value(0)).current

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
    
    

    const data = users.map(user => {
                    return {
                        key : user.id,
                        name: user.name,
                        email:user.email,
                        phone: user.phone,
                        image: 'https://www.gruppolactalisitalia.com/wp-content/uploads/2017/03/persone_it-1.jpg'
                    }
                })
    const bg_image = 'https://c4.wallpaperflare.com/wallpaper/757/447/693/flowers-macro-roses-water-drops-wallpaper-preview.jpg';
    return(
        <View style={styles.container}>
            <ImageBackground 
            source={{ uri: bg_image }}
            style={{ width: "100%" , height:"100%",position: 'absolute', top: 0, right:0}}
            blurRadius={20}
            />
            <Animated.FlatList
            data={data}
            onScroll={ Animated.event(
                [{nativeEvent : {contentOffset : {y : scrollY}}}],
                {useNativeDriver: true}
            ) }
            keyExtractor={item => item.key}
            contentContainerStyle={{ padding: 20 }}
            renderItem={({item, index}) => {

                const inputRange = [
                    -1,
                    0,
                    ITEM_SIZE * (index),
                    ITEM_SIZE * (index + 3)
                ];
                const opacityInputRange = [
                    -1,
                    0,
                    ITEM_SIZE * (index),
                    ITEM_SIZE * (index + 0.7)
                ];
                const scale = scrollY.interpolate({
                    inputRange,
                    outputRange : [1,1,1,0]
                })
                const opacity = scrollY.interpolate({
                    inputRange : opacityInputRange,
                    outputRange: [1,1,1,0]
                })
                
                return(
                        <TouchableOpacity onPress={() => {
                            props.navigation.navigation.navigate('DetailUser',{
                                userId: item.key
                            })}}>
                        <Animated.View style={[styles.containerItem, {transform:[{scale}], opacity}]}>
                        <Image 
                        source={{ uri : item.image }}
                        style={styles.image}
                        />
                        <View>
                            <Text style={styles.title}> {item.name} </Text>
                            <Text style={styles.email} > {item.email} </Text>
                            <Text style={styles.phone} > {item.phone} </Text>
                        </View>
                    </Animated.View>
                    </TouchableOpacity>
                    
                    
                )
            }
            }
            />
        </View>
    )
}