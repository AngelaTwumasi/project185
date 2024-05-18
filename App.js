import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "./screens/Home";
import Main from "./screens/Main";


export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName= "Home"
          screenOption = {{
            headerShown: false
          }}
        >
          <Stack.Screen name= "Home" component ={Home}/>
          <Stack.Screen name= "Main" component ={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
