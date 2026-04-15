import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../assets/theme";
import { useNavigation } from "@react-navigation/native";

export default function ItemSmall({ item }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("DetailSeni", { id: item.id })}
    >
      <Image source={item.image} style={styles.img} />

      <View style={styles.content}>
        <View style={styles.badge}>
          <Text style={styles.category}>{item.category}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.location} numberOfLines={1}>
          {item.location}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginHorizontal: 24,
    marginBottom: 16,
    padding: 10, // Memberikan jarak dari tepi gambar ke bingkai
    // Shadow modern
    shadowColor: "#1A1A1A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  img: {
    width: 90,
    height: 90,
    borderRadius: 12, // Gambar juga melengkung
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  badge: {
    backgroundColor: colors.blue(0.1), // Latar belakang transparan pada kategori
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    alignSelf: "flex-start",
    marginBottom: 8,
  },
  category: {
    fontSize: 10,
    color: colors.blue(),
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 15,
    fontFamily: "Pjs-Bold",
    color: "#2C2C2C",
    marginBottom: 4,
    lineHeight: 22,
  },
  location: {
    fontSize: 12,
    color: "#8E8E93", // Warna sekunder modern khas iOS/Material 3
    fontWeight: "500",
  },
});
