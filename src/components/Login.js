import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import style from "../styles/style";
import loginRegisterStyle from "../styles/loginRegisterStyle";
import axios from "axios";

export default function Login() {
  const { setSelectedUserName } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigation = useNavigation();

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleLogin = () => {
    const formData = {
      username: username,
      password: password,
    };

    axios
      .post("http://YOUR-IP:5130/api/RegisterUser/sendlogin", formData)
      .then((response) => {
        const fetchedUsername = response.data[0]?.username || "";
        setIsLoggedIn(true);
        Alert.alert("Success", "Login done with success!");
        setSelectedUserName(fetchedUsername);
        navigation.navigate("Home");
      })
      .catch(() => {
        setIsLoggedIn(false);
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
      <TouchableOpacity onPress={handleRegister}>
        <Text style={loginRegisterStyle.forgotRegister}>
          Forgot to Register?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={loginRegisterStyle.button} onPress={handleLogin}>
        <Text style={loginRegisterStyle.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
