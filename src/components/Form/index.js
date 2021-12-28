import React, {useState} from "react";
import {
    View,
    Text, 
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList,
    } from "react-native"
import ResultIMC from "./ResultIMC";
import styles from "./style";

export default function Form(){

    //CRIANDO CONSTANTES PARA CONTROLAR OS ESTADOS DOS COMPONENTES
    const [height, setHeight] = useState(null) //Controlar o estado da altura do usuário
    const [weight, setWeight] = useState(null) //Controlar o estado da peso do usuário
    const [messageIMC, setMessageIMC] = useState("Preencha com seu peso") //Controlar o estado da mensagem
    const [IMC, setIMC] = useState(null) //Controlar o estado do resultado do imc do usuário
    const [textButton, setTextButton] = useState("Calcular") //Controlar o estado do texto do botão da mensagem
    const [errorMessage, setErrorMessage] = useState(null) //Mensagem de erro
    const [IMCList, setIMCList] = useState([]) //IMCs calculados, e criando arrays no useState como histório dos IMCs calculados

    //FUNÇÃO QUE CALCULA O IMC DO USUÁRIO
    function IMCCalculator(){
        let heightFormat = height.replace("," , ".") //Se o usuário digitar a altura com vírgula "," essa função vair trocar por um ponto "."
        let totalIMC = ((weight/(heightFormat*heightFormat)).toFixed(2)) //Calculando o IMC do usuário
        setIMCList ((arr) => [...arr, {id: new Date().getTime(), imc: totalIMC}]) //Criando um vetor, criando um id pra esse vetor com a função getTime e passando o valor do IMC para esse vetor criado
        setIMC(totalIMC) //Atual IMC calculado
    }

    //VERIFICANDO SE O IMC ESTÁ VAZIO
    function verificationIMC(){
        if (IMC == null) {
            Vibration.vibrate()
            setErrorMessage("Esse campo é obrigatório*")
        } 
    }

    //FUNÇÃO DE VALIDAÇÃO DO IMC
    function validationIMC(){
        if (weight != null && height != null) { //Se o peso e a altura não dorem nulos

            IMCCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é igual a: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        }else{
            //Se o peso ou altura forem iguais a null
            verificationIMC()
            setIMC(null)
            setTextButton("Calcular")
            setMessageIMC("Preencha o peso e a altura")
        }
    }

    return(

            <View style = {styles.FormContext}>
                {IMC == null ? //Se o IMC for nulo mostra o formulário

                <Pressable onPress = {Keyboard.dismiss} style = {styles.Form}>
                    <Text style = {styles.FormLabel}>Altura</Text>
                    <Text style = {styles.errorMessage}>{errorMessage}</Text>
                    <TextInput
                    style = {styles.input}
                    onChangeText = {setHeight} //quando clicar pra inserir a altura esse valor irá para a variável height
                    value = {height} //o valor do textInput vai seu igual ao da variável height
                    placeholder = "Ex: 1.75"
                    keyboardType = "numeric"
                    />

                    <Text style = {styles.FormLabel}>Peso</Text>
                    <Text style = {styles.errorMessage}>{errorMessage}</Text>

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
                </Pressable>

                : //Se o IMC não for nulo mostra o valor do IMC

                <View style = {styles.exibitionResultIMC}>
                    <ResultIMC messageResultIMC = {messageIMC} resultIMC = {IMC}/> 

                    <TouchableOpacity
                    style = {styles.buttonCalculator}
                    onPress = {() => validationIMC()}
                    >
                        <Text style = {styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
                }
                <FlatList
                showsVerticalScrollIndicator = {false}
                style = {styles.listIMCs}
                data = {IMCList.reverse()}
                renderItem = {({item}) => {
                    return(
                        <Text style = {styles.resultIMCItem}>
                            <Text style = {styles.textResultItemList}>Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor = {(item) => {
                    item.id
                }}
                />

            </View>
    );
}