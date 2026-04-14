import { View, ScrollView, StyleSheet } from "react-native";
import { SeniList } from "../data/seni";
import ListHorizontal from "./ListHorizontal";
import ItemSmall from "./ItemSmall";

export default function ListSeni({ styles }) {
  const horizontal = SeniList.slice(0, 3);
  const vertical = SeniList.slice(1);

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false}
      contentContainerStyle={localStyles.scrollContainer}
    >
      <View style={localStyles.horizontalSection}>
        <ListHorizontal data={horizontal} />
      </View>

      <View style={localStyles.verticalSection}>
        {vertical.map((item) => (
          <ItemSmall item={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const localStyles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40, // Ruang lega di bagian bawah layar
    paddingTop: 10,
  },
  horizontalSection: {
    marginBottom: 24, // Pemisah yang jelas antara list atas dan bawah
  },
  verticalSection: {
    // Ruang di sini sudah diatur dari marginHorizontal pada ItemSmall
  }
});