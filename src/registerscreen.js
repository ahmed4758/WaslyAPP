import React, { Component } from 'react'
import { StyleSheet,Image,TouchableHighlight, ImageBackground,Text,
    Linking,Platform,TouchableOpacity,View,FlatList} from "react-native";
import { Card } from "react-native-elements";
import { ScrollView } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export const SettingsScreen = ({ navigation }) => {

    return (
        <ScrollView>
    <View style={{marginTop:50 ,backgroundColor:"#F0F8FF"}}>
    <Card containerStyle={[{ backgroundColor: 'orange' }]}>
    <View style={{flexDirection: 'row'}}>
        <Image 
        source={require('../assets/logo.png')} 
        style={{ height:120, width:120,marginLeft:4}} />
    <Text style={{color:'black',fontSize:23,fontStyle:"BOLD", marginTop:50,marginLeft:20}}> مرحبا بكم في اقسام وصلي</Text>
        </View>
        </Card>
        
      <Text style={{color:'black',fontSize:30,fontStyle:"italic", marginTop:20, textAlign:"center"}}>   قسم المشويات</Text>
      <Card containerStyle={[{ backgroundColor: 'white' }]}>
      <View style={{marginTop:10,flexDirection: 'row'}}>

        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:110}} />
        </TouchableHighlight> 
        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:110,marginLeft:10 }} />
        </TouchableHighlight> 
        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:110,marginLeft:10 }} />
        </TouchableHighlight> 
        </View>
        </Card>
        <Text style={{color:'black',fontSize:30,fontStyle:"italic", marginTop:20, textAlign:"center"}}>   قسم الحلويات</Text>
        <View style={{marginTop:10,flexDirection: 'row'}}>
        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30}} />
        </TouchableHighlight> 
        
        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30 }} />
        </TouchableHighlight> 

        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30 }} />
        </TouchableHighlight> 
        </View>
        
        <Text style={{color:'black',fontSize:30,fontStyle:"italic", marginTop:20, textAlign:"center"}}>   قسم السوبر ماركت</Text>
        <View style={{marginTop:10,flexDirection: 'row'}}>
        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30}} />
        </TouchableHighlight> 
        
        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30 }} />
        </TouchableHighlight> 

        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30 }} />
        </TouchableHighlight> 
        </View>
        <Text style={{color:'black',fontSize:30,fontStyle:"italic", marginTop:20, textAlign:"center"}}>   قسم الحلويات</Text>
        <View style={{marginTop:10,flexDirection: 'row'}}>
        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30}} />
        </TouchableHighlight> 
        
        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30 }} />
        </TouchableHighlight> 

        <TouchableHighlight 
        onPress={() => Linking.openURL('https://forms.gle/w2bHpU1rwWxBuFjS8')}>
        <Image 
        source={require('../assets/rosto.png')} 
        style={{ height:120, width:100,marginLeft:30 }} />
        </TouchableHighlight> 

        </View>


  </View>

  </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
    },
    containerItem: {
        paddingTop: 20,
    },
    button: {
        marginTop: 20,
    },
    text: {
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        margin: 24,
        textAlign: 'center',
        fontSize: 40,
    },
    image: {
        width: 230,
        height: 60,
        margin: "3rem",
      },
    
})