import AddMealIcon from '@/assets/svgs/add-meal.svg';
import HomeIcon from '@/assets/svgs/home.svg';
import ProfileIcon from '@/assets/svgs/profile.svg';
import { Tabs } from "expo-router";
import { useTranslation } from 'react-i18next';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function TabsLayout() {
    const { t } = useTranslation();
    return (
        <KeyboardProvider>
            <Tabs
                screenOptions={{
                    sceneStyle: { backgroundColor: 'white' },
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    tabBarShowLabel: true,
                    tabBarActiveTintColor: "#FE8C00",
                    tabBarInactiveTintColor: "#121A0F",
                    tabBarStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderTopWidth: 0
                    },
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: t('My Meals'),
                        tabBarLabel: t('Home'),
                        tabBarIcon: ({ size, color }) => (
                            <HomeIcon width={size} height={size} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="add-meal"
                    options={{
                        title: t('Add Meal'),
                        tabBarLabel: t('Add Meal'),
                        tabBarIcon: ({ size, color }) => (
                            <AddMealIcon width={size} height={size} color={color} />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="profile"
                    options={{
                        title: t('Profile'),
                        tabBarLabel: t('Profile'),
                        tabBarIcon: ({ size, color }) => (
                            <ProfileIcon width={size} height={size} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </KeyboardProvider>
    );
}