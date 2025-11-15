import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image } from "react-native";
import { styles } from "./styles2";

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require("./assets/bg.png")}
      style={styles.background}
      blurRadius={2}
    >
      <View style={styles.overlay}>

        {/* Logo */}
        <Image
          source={require("./assets/cinepetro.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Entrar</Text>

        {/* Email */}
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
        />

        {/* Senha */}
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
        />

        {/* Botão */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
}
