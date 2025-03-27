import { Text, View, FlatList } from "react-native";
import { meditations } from "@/src/constants/data";
import { Meditation } from "@/src/components/MeditationListItems";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaView>
      <FlatList 
      className="bg-white"
        data={meditations} 
        contentContainerClassName="gap-8 p-3"
        keyExtractor={(item) => item.id.toString()} // Ensure unique keys
        renderItem={({ item }) => <Meditation meditation={item} />}
      />
    </SafeAreaView>
  );
}
