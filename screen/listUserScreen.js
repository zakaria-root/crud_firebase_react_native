import React from 'react';
import { View} from 'react-native';
import ListUser from '../component/listUser';
import MyListUser from '../component/myListUser';

const ListUserScreen = (props) => {
    return(
        <View>
            {/* <ListUser navigation={props}/> */}
            <MyListUser navigation={props}/>
        </View>
    )
}

export default ListUserScreen;

