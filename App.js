import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from './src/loginscreen';
import {SettingsScreen} from './src/registerscreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {Splash} from './src/loginscreen2'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  
      tabBarOptions={{
      activeTintColor: '#e91e63',
    }}>
      <Tab.Screen name="2 اطلب من هنا" component={Splash} 
       options={{
          tabBarLabel: 'Phone',
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name= "phone" color={color} size={size}/>
          ),
        }}
        />
      <Tab.Screen name="اطلب من هنا" component={HomeScreen} 
       options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name= "home" color={color} size={size}/>
          ),
        }}
        />
      <Tab.Screen name="شوف منيو المطاعم" component={SettingsScreen} 
       options={{
        tabBarLabel: 'Menu',
        tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name= "menu" color={color} size={size}/>
        ),
      }}
       />
    </Tab.Navigator>
  );
}

export default function App() {
  return (  
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
