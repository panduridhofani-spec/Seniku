import React from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import {
  ReceiptText,
  Clock,
  MessageCircle,
  Bookmark,
} from "lucide-react-native";

// Palet Warna Elegan Tema "Galeri Nusantara"
// Anda bisa memindahkan ini kembali ke file theme.js Anda jika diperlukan.
const nusantaraColors = {
  backgroundSoft: "#F8F5F1", // Krem hangat/Alabaster (elegan & bersih)
  textPrimary: "#2C241B",    // Cokelat sangat gelap (menggantikan hitam pekat)
  textSecondary: "#8A7969",  // Abu-abu kecokelatan (earthy taupe)
  accent: "#A47148",         // Warna kayu/emas tembaga khas Nusantara
  white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  border: "#EBE5D9",         // Garis batas yang sangat lembut
};

export default function ListSeni({ styles }) {
  return (
    <ScrollView>
      <View style={styles?.listSeni || { paddingBottom: 20 }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ gap: 15 }}
        >
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={require("../../assets/images/Tari Kecak.jpg")}
            >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Tari Kecak</Text>
                  <Text style={itemHorizontal.cardText}>Bali</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Bookmark
                      color={nusantaraColors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={require("../../assets/images/TariPiring.jpg")}
            >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Tari Piring</Text>
                  <Text style={itemHorizontal.cardText}>Sumatra Barat</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Bookmark
                      color={nusantaraColors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={require("../../assets/images/WayangKulit.jpg")}
            >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Wayang Kulit</Text>
                  <Text style={itemHorizontal.cardText}>Jawa</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Bookmark
                      color={nusantaraColors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={require("../../assets/images/Angklung.jpg")}
            >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Angklung</Text>
                  <Text style={itemHorizontal.cardText}>Jawa Barat</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Bookmark
                      color={nusantaraColors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{ ...itemHorizontal.cardItem, marginRight: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 15 }}
              source={require("../../assets/images/ReogPonorogo.webp")}
            >
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>Reog Ponorogo</Text>
                  <Text style={itemHorizontal.cardText}>Jawa Timur</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Bookmark
                      color={nusantaraColors.white()}
                      variant="Linear"
                      size={20}
                    />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>

        {/* Vertical List Section */}
        <View style={itemVertical.listCard}>
          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require("../../assets/images/TariSaman.webp")}
            />
            <View style={itemVertical.cardContent}>
              <View style={itemVertical.cardHeader}>
                <View style={{ gap: 5, width: "70%" }}>
                  <Text style={itemVertical.cardCategory}>Tari</Text>
                  <Text style={itemVertical.cardTitle}>Tari Saman</Text>
                  <Text style={itemVertical.cardText}>Aceh</Text>
                </View>
                <ReceiptText
                  color={nusantaraColors.textSecondary}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={12} variant="Linear" color={nusantaraColors.textSecondary} />
                <Text style={itemVertical.cardFooterText}>Jul 25, 2023</Text>
                <MessageCircle
                  size={12}
                  variant="Linear"
                  color={nusantaraColors.textSecondary}
                  style={{ marginLeft: 6 }}
                />
                <Text style={itemVertical.cardFooterText}>89</Text>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require("../../assets/images/Angklung.jpg")}
            />
            <View style={itemVertical.cardContent}>
              <View style={itemVertical.cardHeader}>
                <View style={{ gap: 5, width: "70%" }}>
                  <Text style={itemVertical.cardCategory}>Musik</Text>
                  <Text style={itemVertical.cardTitle}>Angklung</Text>
                  <Text style={itemVertical.cardText}>Jawa Barat</Text>
                </View>
                <ReceiptText
                  color={nusantaraColors.textSecondary}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={12} variant="Linear" color={nusantaraColors.textSecondary} />
                <Text style={itemVertical.cardFooterText}>Jul 25, 2023</Text>
                <MessageCircle
                  size={12}
                  variant="Linear"
                  color={nusantaraColors.textSecondary}
                  style={{ marginLeft: 6 }}
                />
                <Text style={itemVertical.cardFooterText}>89</Text>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require("../../assets/images/WayangKulit.jpg")}
            />
            <View style={itemVertical.cardContent}>
              <View style={itemVertical.cardHeader}>
                <View style={{ gap: 5, width: "70%" }}>
                  <Text style={itemVertical.cardCategory}>Teater</Text>
                  <Text style={itemVertical.cardTitle}>Wayang Kulit</Text>
                  <Text style={itemVertical.cardText}>Jawa Tengah</Text>
                </View>
                <ReceiptText
                  color={nusantaraColors.textSecondary}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={12} variant="Linear" color={nusantaraColors.textSecondary} />
                <Text style={itemVertical.cardFooterText}>Jul 25, 2023</Text>
                <MessageCircle
                  size={12}
                  variant="Linear"
                  color={nusantaraColors.textSecondary}
                  style={{ marginLeft: 6 }}
                />
                <Text style={itemVertical.cardFooterText}>89</Text>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require("../../assets/images/ReogPonorogo.webp")}
            />
            <View style={itemVertical.cardContent}>
              <View style={itemVertical.cardHeader}>
                <View style={{ gap: 5, width: "70%" }}>
                  <Text style={itemVertical.cardCategory}>Tari</Text>
                  <Text style={itemVertical.cardTitle}>Reog Ponorogo</Text>
                  <Text style={itemVertical.cardText}>Jawa Timur</Text>
                </View>
                <ReceiptText
                  color={nusantaraColors.textSecondary}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={12} variant="Linear" color={nusantaraColors.textSecondary} />
                <Text style={itemVertical.cardFooterText}>Jul 25, 2023</Text>
                <MessageCircle
                  size={12}
                  variant="Linear"
                  color={nusantaraColors.textSecondary}
                  style={{ marginLeft: 6 }}
                />
                <Text style={itemVertical.cardFooterText}>89</Text>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require("../../assets/images/Batik.jpg")}
            />
            <View style={itemVertical.cardContent}>
              <View style={itemVertical.cardHeader}>
                <View style={{ gap: 5, width: "70%" }}>
                  <Text style={itemVertical.cardCategory}>Seni Rupa</Text>
                  <Text style={itemVertical.cardTitle}>Batik</Text>
                  <Text style={itemVertical.cardText}>Yogyakarta</Text>
                </View>
                <ReceiptText
                  color={nusantaraColors.textSecondary}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={12} variant="Linear" color={nusantaraColors.textSecondary} />
                <Text style={itemVertical.cardFooterText}>Jul 25, 2023</Text>
                <MessageCircle
                  size={12}
                  variant="Linear"
                  color={nusantaraColors.textSecondary}
                  style={{ marginLeft: 6 }}
                />
                <Text style={itemVertical.cardFooterText}>89</Text>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require("../../assets/images/Gamelan.jpg")}
            />
            <View style={itemVertical.cardContent}>
              <View style={itemVertical.cardHeader}>
                <View style={{ gap: 5, width: "70%" }}>
                  <Text style={itemVertical.cardCategory}>Musik</Text>
                  <Text style={itemVertical.cardTitle}>Gamelan</Text>
                  <Text style={itemVertical.cardText}>Jawa</Text>
                </View>
                <ReceiptText
                  color={nusantaraColors.textSecondary}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={12} variant="Linear" color={nusantaraColors.textSecondary} />
                <Text style={itemVertical.cardFooterText}>Jul 25, 2023</Text>
                <MessageCircle
                  size={12}
                  variant="Linear"
                  color={nusantaraColors.textSecondary}
                  style={{ marginLeft: 6 }}
                />
                <Text style={itemVertical.cardFooterText}>89</Text>
              </View>
            </View>
          </View>

          <View style={itemVertical.cardItem}>
            <Image
              style={itemVertical.cardImage}
              source={require("../../assets/images/Tari Tor Tor.png")}
            />
            <View style={itemVertical.cardContent}>
              <View style={itemVertical.cardHeader}>
                <View style={{ gap: 5, width: "70%" }}>
                  <Text style={itemVertical.cardCategory}>Tradisional</Text>
                  <Text style={itemVertical.cardTitle}>Tari Tor-Tor</Text>
                  <Text style={itemVertical.cardText}>Sumatera Utara</Text>
                </View>
                <ReceiptText
                  color={nusantaraColors.textSecondary}
                  variant="Linear"
                  size={20}
                />
              </View>
              <View style={itemVertical.cardInfo}>
                <Clock size={12} variant="Linear" color={nusantaraColors.textSecondary} />
                <Text style={itemVertical.cardFooterText}>Jul 25, 2023</Text>
                <MessageCircle
                  size={12}
                  variant="Linear"
                  color={nusantaraColors.textSecondary}
                  style={{ marginLeft: 6 }}
                />
                <Text style={itemVertical.cardFooterText}>89</Text>
              </View>
            </View>
          </View>

        </View>
      </View>
    </ScrollView>
  );
}

const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 16,
  },
  cardItem: {
    backgroundColor: nusantaraColors.backgroundSoft,
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: nusantaraColors.border,
    // Menambahkan bayangan halus agar terkesan lebih berkelas (Premium feel)
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  cardCategory: {
    color: nusantaraColors.accent,
    fontSize: 11,
    fontFamily: "Pjs-SemiBold",
    letterSpacing: 0.5, // Sedikit renggang agar lebih elegan
    textTransform: "uppercase",
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: "Pjs-Bold",
    color: nusantaraColors.textPrimary,
  },
  cardText: {
    fontSize: 11,
    fontFamily: "Pjs-Medium",
    color: nusantaraColors.textSecondary,
  },
  cardFooterText: {
    fontSize: 11,
    fontFamily: "Pjs-Medium",
    color: nusantaraColors.textSecondary,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    resizeMode: "cover",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardInfo: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    marginTop: 4,
  },
  cardContent: {
    gap: 8,
    justifyContent: "space-between",
    paddingRight: 12,
    paddingLeft: 16,
    flex: 1,
    paddingVertical: 12,
  },
});

const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
    // Shadow ringan untuk kartu atas
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 18,
    // Gradien bayangan agar teks tetap bisa dibaca dengan baik (opsional, tapi baik untuk UI)
    backgroundColor: 'rgba(0,0,0,0.2)', 
    borderRadius: 15,
    flex: 1,
  },
  cardInfo: {
    justifyContent: "flex-end",
    height: "100%",
    gap: 6,
    maxWidth: "70%",
  },
  cardTitle: {
    fontFamily: "Pjs-Bold",
    fontSize: 18, // Sedikit dibesarkan agar menonjol
    color: nusantaraColors.white(),
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },
  cardText: {
    fontSize: 12,
    color: nusantaraColors.white(0.9),
    fontFamily: "Pjs-Medium",
  },
  cardIcon: {
    backgroundColor: nusantaraColors.white(0.2), // Sedikit lebih halus
    padding: 8,
    borderColor: nusantaraColors.white(0.6),
    borderWidth: 0.5,
    borderRadius: 8,
    // Backdrop blur effect replacement
  },
});