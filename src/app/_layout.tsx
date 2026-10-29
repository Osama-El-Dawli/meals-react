import { initializeI18n } from "@/localization/i18n";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    initializeI18n()
      .then(() => setReady(true))
      .catch(console.error)
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (<Stack screenOptions={{ headerShown: false }}>
    <Stack.Screen name="index" />
    <Stack.Screen name="onboarding" />
    <Stack.Screen name="(tabs)" />
  </Stack>);
}
