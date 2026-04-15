import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Settings, Bookmark, Heart, CircleHelp, LogOut, ChevronRight } from "lucide-react-native";
import { colors } from "../../assets/theme";

// 🔹 KOMPONEN REUSABLE UNTUK MENU ITEM
const MenuItem = ({ icon: Icon, title, isDanger }) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
    <View style={styles.menuItemLeft}>
      <View style={[styles.iconWrapper, isDanger && styles.iconWrapperDanger]}>
        <Icon color={isDanger ? "#FF3B30" : colors.blue()} size={20} />
      </View>
      <Text style={[styles.menuText, isDanger && styles.textDanger]}>{title}</Text>
    </View>
    {!isDanger && <ChevronRight color="#C7C7CC" size={20} />}
  </TouchableOpacity>
);

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil Saya</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        
        {/* KARTU PROFIL UTAMA */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>KP</Text>
          </View>
          <Text style={styles.name}>King Panda</Text>
          <View style={styles.badge}>
            <Text style={styles.desc}>Penggemar Seni Nusantara</Text>
          </View>

          {/* STATISTIK */}
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>24</Text>
              <Text style={styles.statLabel}>Disimpan</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>12</Text>
              <Text style={styles.statLabel}>Koleksi</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>89</Text>
              <Text style={styles.statLabel}>Disukai</Text>
            </View>
          </View>
        </View>

        {/* BAGIAN MENU */}
        <Text style={styles.sectionTitle}>Aktivitas & Pengaturan</Text>
        
        <View style={styles.menuContainer}>
          <MenuItem icon={Bookmark} title="Seni Favorit" />
          <View style={styles.menuDivider} />
          <MenuItem icon={Heart} title="Seni Disukai" />
          <View style={styles.menuDivider} />
          <MenuItem icon={Settings} title="Pengaturan Akun" />
          <View style={styles.menuDivider} />
          <MenuItem icon={CircleHelp} title="Pusat Bantuan" />
        </View>

        {/* TOMBOL KELUAR */}
        <View style={[styles.menuContainer, { marginTop: 20 }]}>
          <MenuItem icon={LogOut} title="Keluar Akun" isDanger={true} />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Pjs-Bold",
    fontWeight: "bold",
    color: "#2C2C2C",
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24,
    marginTop: 10,
    paddingTop: 30,
    paddingBottom: 25,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 15,
    elevation: 4,
  },
  avatarContainer: {
    width: 90,
    height: 90,
    backgroundColor: colors.blue(0.1),
    borderRadius: 45,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    shadowColor: colors.blue(),
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  avatarText: {
    fontSize: 32,
    fontFamily: "Pjs-ExtraBold",
    fontWeight: "bold",
    color: colors.blue(),
  },
  name: {
    fontSize: 22,
    fontFamily: "Pjs-Bold",
    fontWeight: "bold",
    color: "#2C2C2C",
    marginBottom: 8,
  },
  badge: {
    backgroundColor: "#F2F2F7",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 25, // Memberi jarak ke statistik
  },
  desc: {
    color: "#8E8E93",
    fontSize: 13,
    fontFamily: "Pjs-SemiBold",
  },
  
  // STATISTIK STYLE
  statsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#F2F2F7",
  },
  statItem: {
    alignItems: "center",
    flex: 1,
  },
  statNumber: {
    fontSize: 20,
    fontFamily: "Pjs-Bold",
    fontWeight: "bold",
    color: "#2C2C2C",
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: "Pjs-SemiBold",
    color: "#8E8E93",
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: "#E5E5EA",
  },

  // MENU STYLE
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Pjs-Bold",
    fontWeight: "bold",
    color: "#2C2C2C",
    marginHorizontal: 24,
    marginTop: 30,
    marginBottom: 12,
  },
  menuContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 24,
    borderRadius: 20,
    paddingVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  menuItemLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.blue(0.1),
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  iconWrapperDanger: {
    backgroundColor: "rgba(255, 59, 48, 0.1)",
  },
  menuText: {
    fontSize: 15,
    fontFamily: "Pjs-SemiBold",
    color: "#2C2C2C",
  },
  textDanger: {
    color: "#FF3B30",
  },
  menuDivider: {
    height: 1,
    backgroundColor: "#F2F2F7",
    marginLeft: 70, // Sejajar dengan teks
    marginRight: 20,
  },
});