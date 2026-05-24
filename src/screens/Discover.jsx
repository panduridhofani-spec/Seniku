import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Animated, Pressable } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Search } from "lucide-react-native";

import ItemSmall from "../components/ItemSmall";
import { colors } from "../../assets/theme";
import { supabase } from "../libs/supabase";

const Discover = () => {
  const [seniData, setSeniData] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 100);

  const headerY = diffClampY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });
  // ===== LOGIC SUPABASE =====
  useEffect(() => {
    getDataSeni();
  }, []);

  const getDataSeni = async () => {
    try {
      console.log("FETCHING DATA...");

      const { data, error } = await supabase.from("seni").select("*");

      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        return;
      }

      setSeniData(data);
    } catch (err) {
      console.log("CATCH ERROR:", err);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          {
            transform: [{ translateY: headerY }],
          },
        ]}
      >
        <Text style={styles.title}>Jelajahi</Text>
        <Text style={styles.subtitle}>Seni Nusantara</Text>

        <Pressable
          style={styles.searchBar}
          onPress={() => navigation.navigate("SearchPage")}
        >
          <Search size={18} color="#999" />

          <Text style={styles.searchPlaceholder}>Cari seni nusantara...</Text>
        </Pressable>
      </Animated.View>

      <Animated.FlatList
        data={seniData}
        keyExtractor={(item, index) =>
          item?.id ? item.id.toString() : index.toString()
        }
        renderItem={({ item }) => <ItemSmall item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 100,
          paddingBottom: 40,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
    </SafeAreaView>
  );
};

export default Discover;

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
    paddingTop: 20,
    paddingBottom: 15,
  },

  title: {
    fontSize: 28,
    fontFamily: "Pjs-ExtraBold",
    color: "#2C2C2C",
    fontWeight: "bold",
    lineHeight: 34,
  },

  subtitle: {
    fontSize: 28,
    fontFamily: "Pjs-SemiBold",
    color: colors.blue(),
    lineHeight: 34,
  },

  searchBar: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",

    paddingHorizontal: 16,
    paddingVertical: 14,

    borderRadius: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  searchPlaceholder: {
    marginLeft: 10,
    color: "#999",
    fontFamily: "Pjs-Regular",
  },
});
