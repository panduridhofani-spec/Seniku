import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Bookmark } from "lucide-react-native";
import { colors } from "../../assets/theme";

export default function ItemHorizontal({ item, isBookmarked, onPress }) {
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={item.image}
        style={styles.cardImage}
        imageStyle={{ borderRadius: 20 }}
      >
        {/* Overlay gelap agar teks selalu terbaca elegan */}
        <View style={styles.overlay} />
        
        <View style={styles.cardContent}>
          <View style={styles.textWrapper}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.text} numberOfLines={1}>{item.location}</Text>
          </View>

          <TouchableOpacity 
            onPress={onPress} 
            style={[
              styles.iconWrapper, 
              isBookmarked && styles.iconWrapperActive
            ]}
            activeOpacity={0.7}
          >
            <Bookmark
              color={isBookmarked ? colors.blue() : colors.white()}
              fill={isBookmarked ? colors.blue() : "transparent"}
              size={20}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: 280,
    height: 220,
    // Soft shadow untuk kesan pop-out
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)", // Gradasi gelap
    borderRadius: 20,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: 20,
    zIndex: 2,
  },
  textWrapper: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontFamily: "Pjs-Bold",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  text: {
    color: "rgba(255,255,255,0.8)", // Teks sedikit diredupkan agar elegan
    fontSize: 13,
    fontWeight: "500",
  },
  iconWrapper: {
    backgroundColor: "rgba(255,255,255,0.25)",
    padding: 10,
    borderRadius: 12,
    backdropFilter: "blur(10px)", // Efek glassmorphism jika didukung OS
  },
  iconWrapperActive: {
    backgroundColor: "rgba(255,255,255,0.95)",
  },
});