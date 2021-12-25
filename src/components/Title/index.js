import React from "react"
import {View, Text} from "react-native"
import styles from "./style";

export default function Title(){ //Criando o componente de título
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}