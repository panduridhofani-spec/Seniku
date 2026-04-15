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
import { colors, fontType } from "../../assets/theme"; 
import ListSeni from "../components/ListSeni"; 
import { useFonts } from "expo-font";
import { CategoryList } from "../data/categories"; 

// 🔹 COMPONENT ITEM CATEGORY
const ItemCategory = ({ item, onPress, isActive }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={[category.item, isActive && category.itemActive]}
      activeOpacity={0.7}
    >
      <Text style={[category.title, isActive && category.titleActive]}>
        {item.categoryName}
      </Text>
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
      renderItem={({ item }) => (
        <ItemCategory
          item={item}
          onPress={() => setSelected(item.id)}
          isActive={item.id === selected}
        />
      )}
      contentContainerStyle={{ paddingHorizontal: 24, gap: 10 }}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default function Home() {
  const [loaded] = useFonts(fontType);

  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAFAFA" />

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Selamat Datang,</Text>
          <Text style={styles.title}>Seniku</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <Bell color="#2C2C2C" size={22} strokeWidth={2.5} />
          {/* Red dot indicator */}
          <View style={styles.notificationDot} />
        </TouchableOpacity>
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
    backgroundColor: "#FAFAFA",
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 10,
  },
  greeting: {
    fontSize: 12,
    color: "#8E8E93",
    fontFamily: "Pjs-SemiBold",
    marginBottom: 2,
  },
  title: {
    fontSize: 22,
    fontFamily: "Pjs-ExtraBold",
    color: "#2C2C2C",
  },
  iconContainer: {
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: "#FF3B30",
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },
  listCategory: {
    paddingVertical: 15,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100, // Pill shape
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5EA",
  },
  itemActive: {
    backgroundColor: colors.blue(),
    borderColor: colors.blue(),
    shadowColor: colors.blue(),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontFamily: "Pjs-SemiBold",
    fontSize: 14,
    color: "#8E8E93",
  },
  titleActive: {
    color: "#FFFFFF",
  },
});