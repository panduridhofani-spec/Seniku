import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SeniList } from "../data/seni";
import ItemSmall from "../components/ItemSmall";
import { colors } from "../../assets/theme";

const Bookmark = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Seni Favorit</Text>
        <Text style={styles.subtitle}>Koleksi inspirasi pilihanmu</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {SeniList.map((item) => (
          <ItemSmall key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Bookmark;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#FAFAFA" // Off-white agar shadow ItemSmall terlihat
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: "Pjs-ExtraBold", // Sesuaikan dengan font project Anda
    color: "#2C2C2C",
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#8E8E93",
  },
  scrollContent: {
    paddingVertical: 10,
    paddingBottom: 40,
  },
});