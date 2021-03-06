import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    FormContext:{
        flex: 1,
        backgroundColor: "#ffffff",
        marginTop: 10,
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 10,
    },
    Form:{
        width: "100%",
        height: "auto",
        marginTop: 5,
        paddingHorizontal:10,
    },
    FormLabel:{
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20, 
    },
    input:{
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        marginHorizontal: 12,
        marginVertical: 5,
        paddingLeft: 10,
    }, 
    buttonCalculator:{
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 15,
    },
    textButtonCalculator:{
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage:{
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exibitionResultIMC:{
        width: "100%",
        height: "50%"
    },
    listIMCs:{
        marginTop: 10,
    },
    resultIMCItem:{
        fontSize: 28,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,
        fontWeight: "bold",
    },
    textResultItemList:{
        fontSize: 24,
        color: "#1877f2",
    }
})

export default styles