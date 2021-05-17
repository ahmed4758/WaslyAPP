import React, { Component } from 'react'
import { StyleSheet,Image,TouchableHighlight, ImageBackground,Text,
    Linking,Platform,TouchableOpacity,View} from "react-native";
import { Input, Button,Card } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { color } from 'react-native-reanimated';
import LottieView from 'lottie-react-native'


export const HomeScreen = ({ navigation }) => {
    
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
      
      <ScrollView>
       
      <View style={{marginTop:50, backgroundColor:"#F0F8FF"}}>
        
      <Card containerStyle={[{ backgroundColor: 'orange' }]}>
      <View style={{flexDirection: 'row'}}>
          <Image 
          source={require('../assets/logo.png')} 
          style={{ height:120, width:120,marginLeft:4}} />
      <Text style={{color:'black',fontSize:23,fontStyle:"BOLD", marginTop:50,marginLeft:20}}> مرحبا بكم في  وصلي</Text>
          </View>
          </Card>
        <Text style={{color:'black',fontSize:18,fontStyle:"italic", marginTop:20, textAlign:"center"}}> اضغط علي "وصلي" علشان تقدر تطلب</Text>
        <TouchableHighlight 
        onPress={() =>  WebBrowser.openBrowserAsync('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/logo.png')} 
        style={{ alignSelf: "center",height:390, width:380, marginTop:10 }} />
        </TouchableHighlight> 
        <Text style={{color:'black',fontSize:25,fontStyle:"BOLD", marginTop:15, textAlign:"center"}}> تقدر تتصل بينا من هنا</Text>

        <View style={styles.container}>
        <TouchableOpacity onPress={VOmakeCall} activeOpacity={0.7} style={styles.touchableButton} >
        <Text style={styles.TextStyle}> فودافون</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={ETmakeCall} activeOpacity={0.7} style={styles.touchableButton2} >
        <Text style={styles.TextStyle}> اتصالات</Text>
        </TouchableOpacity>
        
        </View>
        
       
  </View>
  </ScrollView>
    )
}

const styles = StyleSheet.create(
    {
      container: {
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
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
      lottie:{
        height:200,
        width:200
      }
  
    });