import { ShadowPropTypesIOS } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: "100%"
    },
    formContainer:{
        width: 350,
        backgroundColor: 'rgba(255,255,255,.93)',
        marginLeft: 30,
        marginVertical: 60,
        padding : 25 ,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height:10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 22,
        elevation: 50 
    
    },
    title:{
        fontWeight: "bold",
        fontSize: 30,
        textAlign: "center",
        paddingBottom: 20,
        color: "#AD84BF",
        borderColor: "#AD84BF",
        borderBottomWidth: 2,
        
    },
    button:{
        paddingTop: 30,
        paddingBottom: 10
    },
    image:{
        width: "100%",
        height: "100%",
        position: "absolute"
    },
    cercleContainer:{
        marginTop: "60%",
        
    }
});

export default styles;