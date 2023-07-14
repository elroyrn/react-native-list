import { Text, SafeAreaView, ScrollView, View } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, images, SIZES } from "../constants";
import { CardVertical, CardHorizontal, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
  const router = useRouter();
  const handlePress = () => {
    router.push("profile-details/profile");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <Text></Text>,
          headerRight: () => <ScreenHeaderBtn handlePress={handlePress} iconUrl={images.profile} dimension="100%" />,
          headerTitle: "",
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <CardHorizontal />
          <CardVertical />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
