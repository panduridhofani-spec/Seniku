import React, { useState } from "react";

import {
  View,
  StyleSheet,
  FlatList,
  Text,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import SearchBar from "../components/SearchBar";

import ItemSmall from "../components/ItemSmall";

import { SeniList } from "../data/seni";

import { colors } from "../../assets/theme";

export default function Search() {

  const [searchPhrase, setSearchPhrase] = useState("");

  const filteredData = SeniList.filter((item) =>
    item.title
      .toLowerCase()
      .includes(searchPhrase.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemSmall item={item} />
        )}

        contentContainerStyle={{
          paddingTop: 120,
          paddingBottom: 40,
        }}

        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Seni tidak ditemukan
          </Text>
        }
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  header: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,

    zIndex: 1000,

    backgroundColor: "#FAFAFA",

    paddingHorizontal: 24,
    paddingTop: 50,
    paddingBottom: 20,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 80,
    color: colors.grey(),
    fontFamily: "Pjs-Medium",
  },
});