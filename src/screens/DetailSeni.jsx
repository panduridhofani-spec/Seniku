import React, { useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import { ArrowLeft, Bookmark, Heart, Share2 } from "lucide-react-native";

import { useRoute, useNavigation } from "@react-navigation/native";

import axios from "axios";

import { colors } from "../../assets/theme";

import { imageMap } from "../data/imageMap";

export default function DetailSeni() {
  const route = useRoute();
  const { id } = route.params;
  console.log(id);
  const [selectedSeni, setSelectedSeni] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  const scrollY = useRef(new Animated.Value(0)).current;

  const diffClampY = Animated.diffClamp(scrollY, 0, 80);

  const headerY = diffClampY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, -80],
    extrapolate: "clamp",
  });

  const bottomBarY = diffClampY.interpolate({
    inputRange: [0, 80],
    outputRange: [0, 120],
    extrapolate: "clamp",
  });

  useEffect(() => {
    getDetailSeni();
  }, []);

  const getDetailSeni = async () => {
    try {
      const response = await axios.get(
        `https://6a0fd6fad2a985707035e504.mockapi.io/seni/${id}`,
      );

      setSelectedSeni(response.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://6a0fd6fad2a985707035e504.mockapi.io/seni/${id}`,
      );

      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  if (loading || !selectedSeni) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={colors.blue()} />
      </View>
    );
  }
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
        <TouchableOpacity
          style={styles.headerButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft color="#FFFFFF" size={22} />
        </TouchableOpacity>

        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.headerButton} onPress={handleDelete}>
            <Heart color="#FFFFFF" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton} onPress={handleDelete}>
            <Bookmark color="#FFFFFF" size={20} />
          </TouchableOpacity>
        </View>
      </Animated.View>

      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      >
        {/* IMAGE */}
        <View style={styles.imageContainer}>
          <Image
            source={imageMap[selectedSeni.imageKey]}
            style={styles.image}
          />

          <View style={styles.overlay} />

          <View style={styles.imageContent}>
            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{selectedSeni.category}</Text>
            </View>

            <Text style={styles.heroTitle}>{selectedSeni.title}</Text>

            <Text style={styles.heroLocation}>📍 {selectedSeni.location}</Text>
          </View>
        </View>

        {/* CONTENT */}
        <View style={styles.content}>
          {/* STATS */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>
                {selectedSeni.popularity || "95%"}
              </Text>

              <Text style={styles.statLabel}>Popularitas</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{selectedSeni.viewers}</Text>

              <Text style={styles.statLabel}>Pengunjung</Text>
            </View>

            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{selectedSeni.year}</Text>

              <Text style={styles.statLabel}>Tahun</Text>
            </View>
          </View>

          {/* DESCRIPTION */}
          <Text style={styles.sectionTitle}>Tentang Seni</Text>

          <Text style={styles.description}>{selectedSeni.description}</Text>

          {/* INFO CARD */}
          <View style={styles.infoCard}>
            <Text style={styles.infoTitle}>Informasi Budaya</Text>

            <Text style={styles.infoText}>
              Seni tradisional Nusantara merupakan bagian penting dari identitas
              budaya Indonesia yang diwariskan secara turun-temurun dan menjadi
              simbol kekayaan budaya bangsa.
            </Text>
          </View>

          {/* QUOTE */}
          <View
            style={[styles.quoteCard, { backgroundColor: selectedSeni.color }]}
          >
            <Text style={styles.quoteText}>
              “Budaya adalah jembatan antara masa lalu dan masa depan.”
            </Text>
          </View>
        </View>
      </Animated.ScrollView>
      <Animated.View
        style={[
          styles.bottomBar,
          {
            transform: [{ translateY: bottomBarY }],
          },
        ]}
      >
        <TouchableOpacity style={styles.actionButton}>
          <Heart color="#FFFFFF" size={20} />
          <Text style={styles.actionText}>Sukai</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.shareButton}>
          <Share2 color="#3558E1" size={20} />
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },

  imageContainer: {
    height: 340,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  imageContent: {
    position: "absolute",
    bottom: 30,
    left: 24,
  },

  heroTitle: {
    fontSize: 34,
    color: "#FFFFFF",
    fontFamily: "Pjs-ExtraBold",
    marginBottom: 8,
  },

  heroLocation: {
    fontSize: 16,
    color: "#FFFFFF",
    opacity: 0.9,
  },

  categoryBadge: {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 14,
  },

  categoryText: {
    color: "#FFFFFF",
    fontFamily: "Pjs-Bold",
  },

  content: {
    padding: 24,
    marginTop: -20,
    backgroundColor: "#FAFAFA",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  statCard: {
    backgroundColor: "#FFFFFF",
    width: "30%",
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  statNumber: {
    fontSize: 22,
    fontFamily: "Pjs-ExtraBold",
    color: "#2C2C2C",
    marginBottom: 6,
  },

  statLabel: {
    fontSize: 12,
    color: "#777",
  },

  sectionTitle: {
    fontSize: 24,
    fontFamily: "Pjs-Bold",
    color: "#2C2C2C",
    marginBottom: 16,
  },

  description: {
    fontSize: 16,
    lineHeight: 30,
    color: "#555",
    textAlign: "justify",
  },

  infoCard: {
    backgroundColor: "#FFFFFF",
    padding: 24,
    borderRadius: 24,
    marginTop: 30,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  infoTitle: {
    fontSize: 20,
    fontFamily: "Pjs-Bold",
    marginBottom: 14,
    color: "#2C2C2C",
  },

  infoText: {
    fontSize: 15,
    lineHeight: 28,
    color: "#666",
  },

  quoteCard: {
    marginTop: 30,
    padding: 30,
    borderRadius: 30,
  },

  quoteText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontFamily: "Pjs-Bold",
    lineHeight: 34,
    textAlign: "center",
  },
  header: {
    position: "absolute",
    top: 50,
    left: 24,
    right: 24,

    zIndex: 1000,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerRight: {
    flexDirection: "row",
    gap: 12,
  },

  headerButton: {
    width: 44,
    height: 44,

    borderRadius: 22,

    backgroundColor: "rgba(0,0,0,0.35)",

    justifyContent: "center",
    alignItems: "center",
  },

  bottomBar: {
    position: "absolute",

    left: 24,
    right: 24,
    bottom: 30,

    flexDirection: "row",
    alignItems: "center",
  },

  actionButton: {
    flex: 1,

    backgroundColor: colors.blue(),

    paddingVertical: 18,

    borderRadius: 20,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    gap: 10,

    shadowColor: "#3558E1",
    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 6,
  },

  actionText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Pjs-Bold",
  },

  shareButton: {
    width: 60,
    height: 60,

    marginLeft: 14,

    borderRadius: 20,

    backgroundColor: "#FFFFFF",

    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },
});
