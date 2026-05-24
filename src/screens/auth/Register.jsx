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

export default function Register() {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!fullName || !email || !password) {
      Alert.alert("Error", "Isi semua form");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Alert.alert("Register gagal", error.message);
      return;
    }

    const { error: userError } = await supabase.from("users").insert({
      id: data.user.id,
      full_name: fullName,
      email: email,
      total_post: 0,
      followers_count: 0,
      following_count: 0,
    });

    console.log(userError);

    Alert.alert("Berhasil", "Register berhasil");

    navigation.navigate("Login");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Daftar Seniku</Text>

      <TextInput
        placeholder="Nama lengkap"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

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

      <Pressable style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>

      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>Sudah punya akun? Login</Text>
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

  loginText: {
    textAlign: "center",
    marginTop: 24,
    color: colors.blue(),
    fontFamily: "Pjs-Medium",
  },
});
