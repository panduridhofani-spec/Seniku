import { View, Text, StyleSheet, Animated } from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { SeniList } from "../data/seni";
import ItemSmall from "../components/ItemSmall";
import { colors } from "../../assets/theme";

const Discover = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 100);

  const headerY = diffClampY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -100],
    extrapolate: "clamp",
  });
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
      </Animated.View>

      <Animated.FlatList
        data={SeniList}
        keyExtractor={(item) => item.id.toString()}
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
    color: colors.blue(), // Memberikan aksen warna utama
    lineHeight: 34,
  },
  listContent: {
    paddingVertical: 10,
    paddingBottom: 40,
  },
});
