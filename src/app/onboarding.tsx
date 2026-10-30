import { LANGUAGE_KEY, ONBOARDING_SHOWN_KEY } from "@/consts/app-consts";
import OnBoardingContainer from "@/features/onboarding/components/onboarding-container";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";

export default function OnboardingScreen() {
  const { t, i18n: i18nInstance } = useTranslation();
  const [lang, setLang] = useState<string>(i18nInstance.language);
  const [pageIndex, setPageIndex] = useState(0);
  const pagerRef = useRef<PagerView>(null);
  const isEn = lang === 'en';

  const pages = [
    {
      title: t('Save Your Meals Ingredient'),
      description: t('Add Your Meals and its Ingredients and we will save it for you'),
    },
    {
      title: t('Use Our App The Best Choice'),
      description: t('the best choice for your kitchen do not hesitate'),
    },
    {
      title: t('Our App Your Ultimate Choice'),
      description: t('All the best restaurants and their top menus are ready for you'),
    },
  ];

  async function toggleLanguage() {
    const nextLang = isEn ? 'ar' : 'en';
    await i18nInstance.changeLanguage(nextLang);
    await AsyncStorage.setItem(LANGUAGE_KEY, nextLang);
    setLang(nextLang);
  }

  function goToPage(index: number) {
    pagerRef.current?.setPage(index);
    setPageIndex(index);
  }

  async function handleNext() {
    if (pageIndex < pages.length - 1) {
      goToPage(pageIndex + 1);
    } else {
      await AsyncStorage.setItem(ONBOARDING_SHOWN_KEY, 'true');
      router.replace('/(tabs)/home');
    }
  }

  async function handleSkip() {
    await AsyncStorage.setItem(ONBOARDING_SHOWN_KEY, 'true');
    router.replace('/(tabs)/home');
  }


  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/onboarding-bg.png")}
      />

      <Pressable
        style={[styles.langBtn, isEn ? styles.btnEnd : styles.btnStart]}
        onPress={toggleLanguage}
      >
        <Text style={styles.langBtnText}>
          {isEn ? "Ar" : "En"}
        </Text>
      </Pressable>

      <OnBoardingContainer
        pages={pages}
        pageIndex={pageIndex}
        onPageSelected={setPageIndex}
        onNext={handleNext}
        onSkip={handleSkip}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    ...StyleSheet.absoluteFill,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  langBtn: {
    position: "absolute",
    backgroundColor: "orange",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    top: 50,
  },
  btnEnd: {
    right: 16,
  },
  btnStart: {
    left: 16,
  },
  langBtnText: {
    color: "white",
    fontSize: 24,
  },
});