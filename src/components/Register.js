import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import style from "../styles/style";
import loginRegisterStyle from "../styles/loginRegisterStyle";
import axios from "axios";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleRegister = () => {
    const formData = {
      userName: username,
      password: password,
    };

    axios
      .post("http://YOUR-IP:5130/api/RegisterUser", formData)
      .then(() => {
        Alert.alert("Success", "Register done with success!");
        navigation.navigate("Login");
      })
      .catch(() => {
        Alert.alert("Incorrect", "Username or password incorrect!");
      });
  };

  return (
    <View style={style.container}>
      <Image
        style={loginRegisterStyle.image}
        source={require("../../assets/TasksShareIcon.png")}
      />
      <View style={loginRegisterStyle.formField}>
        <TextInput
          placeholder="Username"
          onChangeText={setUsername}
          value={username}
          style={loginRegisterStyle.input}
        />
      </View>
      <View style={loginRegisterStyle.formField}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          style={loginRegisterStyle.input}
        />
      </View>
      <TouchableOpacity
        style={loginRegisterStyle.button}
        onPress={handleRegister}
      >
        <Text style={loginRegisterStyle.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}
