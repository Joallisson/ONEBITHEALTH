import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native"
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(){

    //CRIANDO CONSTANTES PARA CONTROLAR OS ESTADOS DOS COMPONENTES
    const [height, setHeight] = useState(null) //Controlar o estado da altura do usuário
    const [weight, setWeight] = useState(null) //Controlar o estado da peso do usuário
    const [messageIMC, setMessageIMC] = useState("Preencha com seu peso") //Controlar o estado da mensagem
    const [IMC, setIMC] = useState(null) //Controlar o estado do resultado do imc do usuário
    const [textButton, setTextButton] = useState("Calcular") //Controlar o estado do texto do botão da mensagem

    //FUNÇÃO QUE CALCULA O IMC DO USUÁRIO
    function IMCCalculator(){
        return setIMC((weight/(height*height)).toFixed(2)) //Calculando o IMC do usuário
    }

    //FUNÇÃO DE VALIDAÇÃO DO IMC
    function validationIMC(){
        if (weight != null && height != null) { //Se o peso e a altura não dorem nulos
            IMCCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é igual a: ")
            setTextButton("Calcular novamente")
            return
        }
        //Se o peso ou altura estiverem forem iguais a null
        setIMC(null)
        setTextButton("Calcular")
        setMessageIMC("Preencha o peso e a altura")
    }

    return(
        <View style = {styles.FormContext}>

            {/* FORMULÁRIO ONDE SERÃO PREENCHIDAS AS INFORMAÇÕES DO PESO E ALTURA */}
            <View style = {styles.Form}>
                
                <Text style = {styles.FormLabel}>Altura</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText = {setHeight} //quando clicar pra inserir a altura esse valor irá para a variável height
                    value = {height} //o valor do textInput vai seu igual ao da variável height
                    placeholder = "Ex: 1.75"
                    keyboardType = "numeric"
                />

                <Text style = {styles.FormLabel}>Peso</Text>
                <TextInput
                    style = {styles.input}                   
                    onChangeText = {setWeight} //quando clicar pra inserir a altura esse valor irá para a variável weight
                    value = {weight} //o valor do textInput vai seu igual ao da variável weight
                    placeholder = "Ex: 75.365"
                    keyboardType = "numeric"
                />

                <TouchableOpacity
                    style = {styles.buttonCalculator}
                    onPress = {() => validationIMC()}
                >
                    <Text style = {styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
                
            </View>

            <ResultIMC messageResultIMC = {messageIMC} resultIMC = {IMC}/> 
            
        </View>
    );
}