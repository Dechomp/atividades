// 1º Importar p  React
import React,{useState} from "react";

//
import {View,
        Text,
        TextInput,
        TouchableOpacity,
        StyleSheet
    } from 'react-native'
import { Button } from "react-native-web";
    export default function Home(){
        let[tempC,setTempC] = useState();
        let[tempF,setTempF] = useState(0);
        
        function Calcular(){
            let resultado = (9 * tempC + 160) / 5;
            setTempF(resultado);

        }
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Conversão de Temperatura</Text>
                <TextInput 
                onChangeText={setTempC}
                style={styles.campo}
                placeholder="Digite a temperatura em C°"
                />
                <Text style={styles.subtitulo}>Resultado: {tempF} F° </Text>
                <TouchableOpacity onPress={Calcular} style={styles.Button} >
                    <Text style={styles.buttonText}>Converter</Text>
                </TouchableOpacity>

            </View>

        );
    }

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor:'#30478C',   
            paddingVertical: 70,
            paddingHorizontal:20
        },
        titulo:{
            fontSize: 28,
            fontWeight: 'bold',
            marginBottom: 10,
            color:'#FFD700'
        },
        subtitulo:{
            color:'#FFF',
            fontSize:15
        },
        campo:{
            backgroundColor:'#1F1E25',
            color:'#FFF',
            fontSize: 18,
            marginTop: 30,
            borderRadius: 7,
            padding: 15

        },
        Button:{
            backgroundColor: '#A370F7',
            padding: 16,
            borderRadius:7,
            alignItems:'center',
            marginTop:20
        },
        buttonText:{
            color:'#FFF',
            fontSize: 17,
            fontWeight: 'bold'
        }

    });
