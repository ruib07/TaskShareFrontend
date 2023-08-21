import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthProvider } from "./src/context/AuthContext";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import EditProfile from "./src/components/EditProfile";
import MainTabs from "./MainTabs";

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
          <Stack.Screen name="Home" component={MainTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
