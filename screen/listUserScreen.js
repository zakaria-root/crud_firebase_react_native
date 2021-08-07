import React from 'react';
import { View} from 'react-native';
import ListUser from '../component/listUser';

const ListUserScreen = (props) => {
    return(
        <View>
            <ListUser navigation={props}/>
        </View>
    )
}

export default ListUserScreen;

