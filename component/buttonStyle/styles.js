import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button:{
        width: 65,
        height: 65,
        position: "absolute",
        bottom: 40,
        right: 40,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 60,
        shadowColor: "#000",
        shadowOffset:{
            width: 10,
            height: 0
        },
        shadowOpacity: .5,
        shadowRadius: 24,
        elevation: 24,
        backgroundColor: "#F25CBE",
        
    }
})

export default styles;