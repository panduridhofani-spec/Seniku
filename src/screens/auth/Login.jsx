import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";

import { colors } from "../../../assets/theme";

import { supabase } from "../../libs/supabase";

export default function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Isi semua form");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Alert.alert("Login gagal", error.message);
      return;
    }

    Alert.alert("Berhasil", "Login berhasil");

    navigation.replace("MainApp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Masuk ke Seniku</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registerText}>Belum punya akun? Register</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: 24,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontFamily: "Pjs-Bold",
    marginBottom: 40,
    color: "#222",
  },

  input: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 18,
    fontFamily: "Pjs-Regular",
  },

  button: {
    backgroundColor: colors.blue(),
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Pjs-Bold",
    fontSize: 16,
  },

  registerText: {
    textAlign: "center",
    marginTop: 24,
    color: colors.blue(),
    fontFamily: "Pjs-Medium",
  },
});
