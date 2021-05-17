import React, { Component } from 'react'
import { StyleSheet,Image,TouchableHighlight, ImageBackground,Text,
    Linking,Platform,TouchableOpacity,View,SafeAreaView} from "react-native";
import { Input, Button,Card } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import LottieView from 'lottie-react-native'


export const Splash = ({ navigation }) => {
  function VOmakeCall  () {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${01093760376}';
    } else {
      phoneNumber = 'telprompt:${01093760376}';
    }

    Linking.openURL(phoneNumber);
  };

  function ETmakeCall  () {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${01128190324}';
    } else {
      phoneNumber = 'telprompt:${01128190324    }';
    }

    Linking.openURL(phoneNumber);
  };

    return (
      
      <View style={{allignItems: "center",marginTop:120, backgroundColor:"#F0F8FF"}}>
        <Text style={styles.TextStyle2}> WELCOME</Text>
      <View style={{backgroundColor:"#F0F8FF",flexDirection: 'row'}}>
          <Image 
          source={require('../assets/logo.png')} 
          style={{ height:150, width:150,marginLeft:30}} />
      <Text style={{color:'black',fontSize:23,fontStyle:"BOLD", marginTop:50,marginLeft:20}}> مرحبا بكم في  وصلي</Text>
          </View>
<LottieView
        source={require("../assets/29554-delivery-service.json")} autoPlay loop style={styles.lottie}
      />
      <View style={styles.container}>
        <TouchableOpacity onPress={VOmakeCall} activeOpacity={0.7} style={styles.touchableButton} >
        <Text style={styles.TextStyle}> فودافون</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ETmakeCall} activeOpacity={0.7} style={styles.touchableButton2} >
        <Text style={styles.TextStyle}> اتصالات</Text>
        </TouchableOpacity>
        
        </View>
      
      </View>
      
    )
    }

const styles = StyleSheet.create(
    {
      container: {
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
      },
      touchableButton: {
        width: '30%',
        padding: 28,
        backgroundColor: 'red',
      },
      touchableButton2: {
        width: '30%',
        padding: 28,
        backgroundColor: 'green',
        marginLeft:10,
      },
      TextStyle: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
      },
      TextStyle2: {
        color: 'black',
        fontSize: 40,
        textAlign: 'center',
        marginBottom:20
      },
      lottie:{
        height:260,
        width:200,
        marginTop:2
      }
  
    });