import React from 'react';
import { ScrollView, View } from 'react-native';
import CreateUserForm from '../component/createUserForm';

const CreatUserScreen = (props) => {
    return(
            <ScrollView>
            <CreateUserForm navigation={props} />
            </ScrollView>
    )
}

export default CreatUserScreen;

