import Home from "./src/screens/Home";
import Discover from "./src/screens/Discover"; // ✅
import Bookmark from "./src/screens/Bookmark"; // ✅ TAMBAH
import Profile from "./src/screens/Profile";   // ✅ TAMBAH
import { useFonts } from "expo-font";
import { fontType } from "./assets/theme";

export default function App() {
  const [loaded] = useFonts(fontType);
  if (!loaded) return null;

  // return <Home />;

  // return <Discover />; // sekarang aman

  // return <Bookmark />;

  return <Profile />;

}