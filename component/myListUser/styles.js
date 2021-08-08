import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        
    },
    image:{
        width:60,
        height:60,
        borderRadius: 50,
        marginRight: 10
    },
    containerItem: {
        flexDirection: "row",
        padding: 15,
        marginBottom: 15,
        backgroundColor:"rgba(255,255,255,0.85)",
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 24,
    },
    title:{
        fontSize: 20,
        fontWeight: '700'
    },
    email:{
        fontSize: 17,
        opacity:.5
    },
    phone:{
        fontSize: 14,
        opacity: .5,
        color: "#0099cc"
    },
    

});

export default styles;