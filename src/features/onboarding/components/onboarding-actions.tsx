import Feather from "@expo/vector-icons/Feather";
import { useTranslation } from "react-i18next";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type Props = {
  isLast: boolean;
  isRTL: boolean;
  onNext: () => void;
  onSkip: () => void;
};

export default function OnboardingActions({
  isLast,
  isRTL,
  onNext,
  onSkip,
}: Props) {
  const { t } = useTranslation();

  if (isLast) {
    return (
      <Pressable style={styles.arrowBtn} onPress={onNext}>
        <Feather
          name={isRTL ? "arrow-left" : "arrow-right"}
          size={24}
          color="#FE8C00E5"
        />
      </Pressable>
    );
  }

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onNext}>
        <Text style={styles.btn}>{t("Next")}</Text>
      </Pressable>

      <Pressable onPress={onSkip}>
        <Text style={styles.btn}>{t("Skip")}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  btn: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  arrowBtn: {
    backgroundColor: "white",
    borderRadius: 100,
    padding: 20,
    marginBottom: 32,
  },
});