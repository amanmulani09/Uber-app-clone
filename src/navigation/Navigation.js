import * as React from 'react'

//import navigation components
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//import screens;
import Home from '../screens/Home';
import Services from '../screens/Services';
import Activity from '../screens/Activity';
import Account from '../screens/Account';

//create tab navigator;
const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName='Home' screenOptions={{
                tabBarActiveTintColor:'black'
            }}>
                
                <Tab.Screen name='Home' component={Home}
                    options={{
                        tabBarLabel:"Home",
                        headerShown:false,
                        tabBarIcon:({color,size,focused})=>(
                            <MaterialCommunityIcons name='home' size={size} style={{color:focused ? 'black' : 'gray'}}/>
                        )
                    }}
                />
                <Tab.Screen name='Services' component={Services}
                    options={{
                        tabBarLabel:"Services",
                        headerShown:false,
                        tabBarIcon:({color,size,focused})=>(
                            <MaterialCommunityIcons name='dots-grid' size={size} style={{color:focused ? 'black' : 'gray'}}/>
                        )
                    }}
                />
                <Tab.Screen name='Activity' component={Activity}
                    options={{
                        tabBarLabel:"Activity",
                        headerShown:false,
                        tabBarIcon:({color,size,focused})=>(
                            <MaterialCommunityIcons name='bookmark-minus-outline' size={size} style={{color:focused ? 'black' : 'gray'}}/>
                        )
                    }}
                />

                <Tab.Screen name='Account' component={Account}
                    options={{
                        tabBarLabel:"Account",
                        headerShown:false,
                        tabBarIcon:({color,size,focused})=>(
                            <MaterialCommunityIcons name='account' size={size} style={{color:focused ? 'black' : 'gray'}}/>
                        )
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}