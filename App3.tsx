import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";


export default function App() {
  return (
    <LinearGradient
      colors={["#006e7f", "#00a3a3", "#00c6c7"]}
      style={styles.container}
    >
      {/* Área principal */}
      <View style={styles.content}>
        
        {/* Logo */}
        <Image
          source={require("./assets/icon.png")}
          style={styles.logo}
        />

        {/* Welcome */}
        <Text style={styles.title}>Welcome to Airbnb.</Text>

        {/* Button Facebook */}
        <TouchableOpacity style={styles.facebookButton}>
          <Image 
            source={require("./assets/facebook.png")}
            style={styles.fbIcon}
          />
          <Text style={styles.fbText}>Continue with Facebook</Text>
        </TouchableOpacity>

        {/* Create Account */}
        <TouchableOpacity style={styles.createButton}>
          <Text style={styles.createText}>Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.moreOptions}>More options</Text>

        <Text style={styles.terms}>
          By tapping Continue, Create Account or More options, I agree to Airbnb’s 
          Terms of Service, Payments Terms of Service, Privacy Policy, and 
          Nondiscrimination Policy.
        </Text>
      </View>
    </LinearGradient>
  );
}

