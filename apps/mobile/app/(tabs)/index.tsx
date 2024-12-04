import { api } from "@/utils/api";
import { View, Text } from "react-native";

export default function HomeScreen() {
  const { data, isLoading } = api.test.testData.useQuery();

  return (
    <View className="p-12">
      <Text className="text-2xl">Home</Text>
      <Text>{isLoading ? "Loading..." : data}</Text>
    </View>
  );
}
