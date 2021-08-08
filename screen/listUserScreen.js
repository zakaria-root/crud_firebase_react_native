import React from 'react';
import { View} from 'react-native';
import ListUser from '../component/listUser';
import MyListUser from '../component/myListUser';
import ButtonStyle from '../component/buttonStyle';

const ListUserScreen = (props) => {
    return(
        <View>
            {/* <ListUser navigation={props}/> */}
            <MyListUser navigation={props}/>
            <ButtonStyle onpress={() => {
                props.navigation.navigate("CreateUser")
            }}  />
        </View>
    )
}

export default ListUserScreen;

