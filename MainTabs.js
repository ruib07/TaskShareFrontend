import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { AuthProvider } from "./src/context/AuthContext";
import Home from "./src/components/Home";
import Tasks from "./src/components/Tasks";
import Profile from "./src/components/Profile";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <AuthProvider>
      <Tab.Navigator initialRouteName="Profile">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => <Octicons name="home" size={24} color="black" />,
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarIcon: () => (
              <MaterialIcons name="add-task" size={24} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="face-man-profile"
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </AuthProvider>
  );
}
