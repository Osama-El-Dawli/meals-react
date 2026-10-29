import { LANGUAGE_KEY } from '@/consts/app-consts'
import ar from '@/localization/locals/ar.json'
import en from '@/localization/locals/en.json'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getLocales } from 'expo-localization'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'


export async function initializeI18n() {
    const savedLanuage = await AsyncStorage.getItem(LANGUAGE_KEY);
    const deviceLanguage = getLocales()[0]?.languageCode;

    const language =
        savedLanuage === 'ar' || savedLanuage === 'en'
            ? savedLanuage : deviceLanguage === 'ar' ? 'ar' : 'en';

    if (!i18n.isInitialized) {
        await i18n.use(initReactI18next).init({
            resources: {
                en: { translation: en },
                ar: { translation: ar }
            },
            lng: language,
            fallbackLng: 'en',
        });

    }
    return i18n;
}

export default i18n;