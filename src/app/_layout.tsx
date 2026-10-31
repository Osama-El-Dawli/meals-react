import i18n, { initializeI18n } from "@/localization/i18n";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const isArabic = (lang?: string) => !!lang && lang.startsWith("ar");

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (lang: string) => setIsRTL(isArabic(lang));
    i18n.on("languageChanged", handleLanguageChange);

    (async () => {
      try {
        await initializeI18n();
        setIsRTL(isArabic(i18n.language));
      } catch (error) {
        console.error("Failed to initialize localization:", error);
      } finally {
        setReady(true);
      }
    })();

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    if (ready) SplashScreen.hideAsync();
  }, [ready]);

  if (!ready) return null;

  return (
    <GestureHandlerRootView
      style={{ flex: 1, direction: isRTL ? "rtl" : "ltr" }}
    >
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="meal-details" />
      </Stack>
    </GestureHandlerRootView>
  );
}