import i18n, { initializeI18n } from "@/localization/i18n";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, I18nManager, View } from "react-native";

export default function RootLayout() {
  const [ready, setReady] = useState(false);
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    initializeI18n()
      .then(() => {
        const initialRTL = i18n.language === 'ar';
        setIsRTL(initialRTL);
        setReady(true);
      })
      .catch(console.error);

    const handleLanguageChange = (lang: string) => {
      const rtl = lang === 'ar';
      setIsRTL(rtl);
      I18nManager.allowRTL(rtl);
      I18nManager.forceRTL(rtl);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, direction: isRTL ? 'rtl' : 'ltr' }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="onboarding" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </View>
  );
}
