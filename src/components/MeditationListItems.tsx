import { View, Text, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";

export function Meditation({
  meditation,
}: {
  meditation: {
    title: string;
    duration: number;
  };
}) {
  return (
    <Link href="/meditation/details" asChild>
      <Pressable className="flex flex-row items-center gap-5 px-2 ">
        <View>
          <AntDesign name="checkcircle" size={24} color="green" />
        </View>
        <View className="p-5 py-8 border-2 border-gray-300 rounded-2xl flex-1 ">
          <Text className="font-semibold text-2xl">{meditation.title}</Text>

          <View className="flex-row items-center gap-2  ">
            <Feather name="clock" size={16} color="gray" />
            <Text className="font-semibold text-sm text-center">
              {meditation.duration}
            </Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}
