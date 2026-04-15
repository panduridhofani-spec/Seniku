import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SeniList } from "../data/seni";
import ItemSmall from "../components/ItemSmall";
import { colors } from "../../assets/theme";

const Discover = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Jelajahi</Text>
        <Text style={styles.subtitle}>Seni Nusantara</Text>
      </View>

      <FlatList
        data={SeniList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemSmall item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FAFAFA" 
  },
  header: {
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