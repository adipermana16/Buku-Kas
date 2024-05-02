/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationAction, NavigationContainer } from "@react-navigation/native";
import { createNativeTabsNavigator } from "@react-navigation/native-Tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from './screens/Home';
import About from './screens/About';
import Beranda from "./screens/Beranda";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHandshakeAltSlash, faHome } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
const Tabs = createBottomTabNavigator()
const App = ()=>{
    return (
        <NavigationContainer>
            <Tabs.Navigator>
                <Tabs.Screen name="Beranda" component={Home} options={{headerShown: false, tabBarIcon:({color,size}) =>(
                <FontAwesomeIcon icon={faHome}/>
                )}}/>
                <Tabs.Screen name="kamu Menerima" component={About}  options={{headerShown: false, tabBarIcon:({color,size}) =>(
                <FontAwesomeIcon icon={faHandshake} />
                )}}/>
                <Tabs.Screen name="Kamu Membayar" component={Beranda}  options={{headerShown: false, tabBarIcon:({color,size}) =>(
                <FontAwesomeIcon icon={faHandshakeAltSlash}/>
                )}}/>
            </Tabs.Navigator>
        </NavigationContainer>
    );
};

export default App;
