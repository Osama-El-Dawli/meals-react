import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { Animated, StyleSheet, View } from "react-native";
import OnboardingActions from "./onboarding-actions";
import PageIndicator from "./page-indicator";
import TextPagerView, {
  type TextPagerViewRef,
} from "./text-pager-view";

import type { OnboardingContainerProps } from "../types/onboarding";

export default function OnBoardingContainer({
  pages,
  pageIndex,
  onPageSelected,
  onNext,
  onSkip,
}: OnboardingContainerProps) {
  const pagerRef = useRef<TextPagerViewRef>(null);
  const { i18n } = useTranslation();
  const scrollProgress = useRef(new Animated.Value(0)).current;

  const isLast = pageIndex === pages.length - 1;
  const isRTL = i18n.language.startsWith("ar");

  function handleNext() {
    if (isLast) {
      onNext();
      return;
    }

    pagerRef.current?.setPage(pageIndex + 1);
  }

  return (
    <View style={styles.container}>
      <TextPagerView
        scrollProgress={scrollProgress}
        ref={pagerRef}
        pages={pages}
        onPageSelected={onPageSelected}
      />

      <PageIndicator
        count={pages.length}
        scrollProgress={scrollProgress}
      />

      <OnboardingActions
        isLast={isLast}
        isRTL={isRTL}
        onNext={handleNext}
        onSkip={onSkip}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 40,
    left: 32,
    right: 32,
    height: 400,
    padding: 32,
    borderRadius: 48,
    backgroundColor: "#FE8C00E5",
    alignItems: "center",
  },
});