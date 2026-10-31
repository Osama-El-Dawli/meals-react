import { LANGUAGE_KEY } from "@/consts/app-consts";
import CustomButton from "@/features/home/components/custom-button";
import i18n from "@/localization/i18n";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
  const { t } = useTranslation();
  const handleChangeLanguage = async () => {
    const next = i18n.language.startsWith("ar") ? "en" : "ar";
    await i18n.changeLanguage(next);
    await AsyncStorage.setItem(LANGUAGE_KEY, next);
  };

  return (
    <View style={styles.container}>
      <Ionicons name='person-outline' size={150} style={styles.icon} />
      <Text style={styles.text}>OsOs El-Dawli</Text>
      <CustomButton text={t("Change Language")} onPress={handleChangeLanguage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    alignItems: 'center'
  },
  icon: {
    backgroundColor: 'orange',
    borderRadius: 200,
    padding: 32,
    color: 'white'
  },
  text: {
    marginVertical: 24,
    fontSize: 42,
    fontWeight: 'bold'
  }
});
