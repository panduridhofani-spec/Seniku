import { FlatList } from "react-native";
import { useState } from "react";
import ItemHorizontal from "./ItemHorizontal";

export default function ListHorizontal({ data }) {
  const [bookmark, setBookmark] = useState([]);

  const toggleBookmark = (id) => {
    if (bookmark.includes(id)) {
      setBookmark(bookmark.filter((item) => item !== id));
    } else {
      setBookmark([...bookmark, id]);
    }
  };

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      // Lebar kartu (280) + jarak antar kartu (20) = 300
      snapToInterval={300} 
      decelerationRate="fast"
      contentContainerStyle={{ 
        paddingHorizontal: 24, 
        paddingVertical: 10, // Tambah sedikit ruang untuk shadow
        gap: 20 
      }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ItemHorizontal
          item={item}
          isBookmarked={bookmark.includes(item.id)}
          onPress={() => toggleBookmark(item.id)}
        />
      )}
    />
  );
}