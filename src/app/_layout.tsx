
import i18n, { initializeI18n } from "@/localization/i18n";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { I18nManager, View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const handleLanguageChange = (lang: string) => {
      const rtl = lang.startsWith("ar");

      setIsRTL(rtl);
      I18nManager.allowRTL(rtl);

      if (I18nManager.isRTL !== rtl) {
        I18nManager.forceRTL(rtl);
      }
    };

    i18n.on("languageChanged", handleLanguageChange);

    async function prepareApp() {
      try {
        await initializeI18n();

        const rtl = i18n.language.startsWith("ar");
        setIsRTL(rtl);

        I18nManager.allowRTL(rtl);

        if (I18nManager.isRTL !== rtl) {
          I18nManager.forceRTL(rtl);
        }
      } catch (error) {
        console.error("Failed to initialize localization:", error);
      } finally {
        setReady(true);
      }
    }

    prepareApp();

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    if (ready) {
      SplashScreen.hideAsync();
    }
  }, [ready]);

  if (!ready) {
    return null;
  }

  return (
    <View
      style={{
        flex: 1,
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </View>
  );
}
