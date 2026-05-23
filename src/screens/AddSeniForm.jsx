import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ArrowLeft } from "lucide-react-native";

import { useNavigation } from "@react-navigation/native";

import { colors } from "../../assets/theme";

import axios from "axios";

import { ActivityIndicator } from "react-native";

export default function AddSeniForm() {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    category: "",
    description: "",
    imageKey: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleUpload = async () => {
    setLoading(true);

    try {
      await axios.post("https://6a0fd6fad2a985707035e504.mockapi.io/seni", {
        title: formData.title,
        location: formData.location,
        category: formData.category,
        description: formData.description,

        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",

        createdAt: new Date(),
      });

      setLoading(false);

      navigation.goBack();
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            if (navigation.canGoBack()) {
              navigation.goBack();
            } else {
              navigation.navigate("MainApp");
            }
          }}
        >
          <ArrowLeft color={colors.black()} size={24} />
        </Pressable>

        <Text style={styles.headerTitle}>Tambah Seni</Text>
      </View>

      {/* FORM */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* NAMA SENI */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nama Seni</Text>

          <TextInput
            placeholder="Masukkan nama seni"
            value={formData.title}
            onChangeText={(text) => handleChange("title", text)}
            style={styles.input}
          />
        </View>

        {/* DAERAH */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Asal Daerah</Text>

          <TextInput
            placeholder="Contoh: Bali"
            value={formData.location}
            onChangeText={(text) => handleChange("location", text)}
            style={styles.input}
          />
        </View>

        {/* KATEGORI */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Kategori</Text>

          <TextInput
            placeholder="Tari / Musik / Teater"
            value={formData.category}
            onChangeText={(text) => handleChange("category", text)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Image Key</Text>

          <TextInput
            placeholder="contoh: tari-saman"
            value={formData.imageKey}
            onChangeText={(text) => handleChange("imageKey", text)}
            style={styles.input}
          />

          <Text style={styles.helper}>
            Gunakan: tari-saman, tari-kecak, angklung, wayang-kulit, dll.
          </Text>
        </View>

        {/* DESKRIPSI */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Deskripsi</Text>

          <TextInput
            placeholder="Masukkan deskripsi seni..."
            value={formData.description}
            onChangeText={(text) => handleChange("description", text)}
            multiline
            style={styles.textarea}
          />
        </View>
      </ScrollView>

      {/* BUTTON */}
      <View style={styles.bottomBar}>
        <Pressable style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonText}>Simpan Seni</Text>
        </Pressable>
      </View>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.blue()} />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 24,
    paddingVertical: 18,

    gap: 16,
  },

  headerTitle: {
    fontSize: 20,
    fontFamily: "Pjs-Bold",
  },

  content: {
    padding: 24,
    gap: 24,
  },

  inputContainer: {
    gap: 10,
  },

  label: {
    fontFamily: "Pjs-SemiBold",
    color: "#444",
  },

  input: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingHorizontal: 18,
    paddingVertical: 16,

    fontFamily: "Pjs-Regular",

    elevation: 2,
  },

  textarea: {
    backgroundColor: "#FFFFFF",

    borderRadius: 18,

    paddingHorizontal: 18,
    paddingVertical: 16,

    minHeight: 160,

    textAlignVertical: "top",

    fontFamily: "Pjs-Regular",

    elevation: 2,
  },

  bottomBar: {
    padding: 24,
  },

  button: {
    backgroundColor: colors.blue(),

    paddingVertical: 18,

    borderRadius: 20,

    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontFamily: "Pjs-Bold",
    fontSize: 16,
  },

  loadingOverlay: {
    position: "absolute",

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: "rgba(0,0,0,0.3)",

    justifyContent: "center",
    alignItems: "center",
  },

  helper: {
    fontSize: 12,
    color: "#888",
    marginTop: 6,
  },
});
