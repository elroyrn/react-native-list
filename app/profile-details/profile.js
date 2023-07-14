import { Stack, useRouter } from "expo-router";
import { View, SafeAreaView, ScrollView } from "react-native";

import { HeaderProfile, AboutProfile, ScreenHeaderBtn } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";

const Profile = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.left} dimension="60%" handlePress={() => router.back()} />,
          headerTitle: "",
        }}
      />

      <>
        <ScrollView>
          {
            <View style={{ padding: SIZES.medium, paddingBottom: 25 }}>
              <HeaderProfile />

              <AboutProfile />
            </View>
          }
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Profile;
