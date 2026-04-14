import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell } from "lucide-react-native";
import { colors, fontType } from "./assets/theme";
import ListSeni from "./src/components/ListSeni";
import { useFonts } from "expo-font";
import { CategoryList } from "./src/data/categories";

// 🔹 COMPONENT ITEM CATEGORY
const ItemCategory = ({ item, onPress, color }) => {
  return (
    <TouchableOpacity onPress={onPress} style={category.item}>
      <Text style={{ ...category.title, color }}>{item.categoryName}</Text>
    </TouchableOpacity>
  );
};

// 🔹 COMPONENT LIST CATEGORY (PAKAI STATE)
const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);

  return (
    <FlatList
      data={CategoryList}
      horizontal
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => {
        const color = item.id === selected ? colors.blue() : colors.grey();

        return (
          <ItemCategory
            item={item}
            onPress={() => setSelected(item.id)}
            color={color}
          />
        );
      }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function App() {
  const [loaded] = useFonts(fontType);

  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white()} />

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Seniku</Text>
        <Bell color={colors.black()} size={24} />
      </View>

      {/* CATEGORY */}
      <View style={styles.listCategory}>
        <FlatListCategory />
      </View>

      {/* LIST SENI */}
      <ListSeni styles={styles} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    paddingTop: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: "Pjs-ExtraBold",
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5,
  },
  title: {
    fontFamily: "Pjs-SemiBold",
    fontSize: 14,
    color: colors.grey(),
  },
});
