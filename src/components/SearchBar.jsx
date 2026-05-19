import React from "react";

import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";

import {
  Search,
  ArrowLeft,
  X,
} from "lucide-react-native";

import { useNavigation } from "@react-navigation/native";

import { colors } from "../../assets/theme";

export default function SearchBar({
  searchPhrase,
  setSearchPhrase,
}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeft color={colors.black()} size={22} />
      </Pressable>

      <View style={styles.bar}>

        <Search
          size={18}
          color={colors.grey(0.5)}
        />

        <TextInput
          placeholder="Cari seni nusantara..."
          placeholderTextColor={colors.grey(0.5)}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          style={styles.input}
          autoFocus
        />

        {searchPhrase ? (
          <Pressable onPress={() => setSearchPhrase("")}>
            <X size={18} color={colors.black()} />
          </Pressable>
        ) : null}

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  bar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: colors.grey(0.05),

    paddingHorizontal: 14,
    paddingVertical: 12,

    borderRadius: 18,

    gap: 10,
  },

  input: {
    flex: 1,

    fontFamily: "Pjs-Regular",

    color: colors.black(),

    padding: 0,
  },
});