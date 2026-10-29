import { forwardRef, useImperativeHandle, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Animated, StyleSheet, Text, View } from "react-native";
import PagerView from "react-native-pager-view";
import type { OnboardingPage } from "../types/onboarding";

export type TextPagerViewRef = {
  setPage: (index: number) => void;
};

type Props = {
  pages: OnboardingPage[];
  onPageSelected: (index: number) => void;
  scrollProgress: Animated.Value;
};

const TextPagerView = forwardRef<TextPagerViewRef, Props>(
  function TextPagerView(
    { pages, onPageSelected, scrollProgress },
    ref
  ) {
    const pagerRef = useRef<PagerView>(null);
    const { i18n } = useTranslation();
    const isRTL = i18n.language.startsWith("ar");

    useImperativeHandle(ref, () => ({
      setPage: (index) => pagerRef.current?.setPage(index),
    }));

    return (
      <PagerView
        ref={pagerRef}
        style={styles.textPager}
        initialPage={0}
        layoutDirection={isRTL ? "rtl" : "ltr"}
        onPageScroll={(event) => {
          const { position, offset } = event.nativeEvent;
          scrollProgress.setValue(position + offset);
        }}
        onPageSelected={(event) =>
          onPageSelected(event.nativeEvent.position)
        }
      >
        {pages.map((page, index) => (
          <View key={String(index)} style={styles.textPage}>
            <Text style={styles.title}>{page.title}</Text>
            <Text style={styles.description}>
              {page.description}
            </Text>
          </View>
        ))}
      </PagerView>
    );
  }
);

export default TextPagerView;

const styles = StyleSheet.create({
  textPager: {
    width: "100%",
    height: 150,
  },
  textPage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
});