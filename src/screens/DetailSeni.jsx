import { View, Text, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../assets/theme";
import { useRoute } from "@react-navigation/native";
import { SeniList } from "../data/seni";

export default function DetailSeni() {
  const route = useRoute();
  const { id } = route.params;

  const data = SeniList.find((item) => item.id === id);

  if (!data) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Image source={data.image} style={styles.image} />

      <Text style={styles.title}>{data.title}</Text>
      <Text>{data.location}</Text>
      <Text>{data.category}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: colors.white() },
  image: { width: "100%", height: 200 },
  title: { fontSize: 18, fontWeight: "bold", marginTop: 10 },
});