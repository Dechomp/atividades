
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
        let[Real,setReal] = useState();
        let[Dolar,setDolar] = useState(0);
        
        function Calcular(){
            let resultado = Real * 5.38;
            setDolar(resultado);

        }
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>Converção de Dolar</Text>
                <TextInput 
                onChangeText={setReal}
                style={styles.campo}
                placeholder="Digite a quantidade de Reais"
                />
                <Text style={styles.subtitulo}>U${Dolar} </Text>
                <TouchableOpacity onPress={Calcular} style={styles.Button}>
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
            color:'#f01',
            alignSelf: "center"
        },
        subtitulo:{
            color:'#1e9',
            fontSize:15,
            alignSelf: "center",
            backgroundColor:"#fff",
            marginTop: 30,
            backgroundColor: ""
        },
        campo:{
            backgroundColor:'#1F1E25',
            color:'#fff',
            fontSize: 18,
            marginTop: 30,
            borderRadius: 15,
            padding: 46,
            alignSelf: "justify",
            textAlign:"center"
        },
 
        Button:{
            backgroundColor: '#000',
            padding: 15,
            borderRadius:7,
            alignItems:'center',
            marginTop:20,
            alignSelf:"center"
        },
        buttonText:{
            color:'#FFF',
            fontSize: 17,
            fontWeight: 'bold'
        }

    });