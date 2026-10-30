import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }}>
            <Tabs.Screen
                name="home"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size }) => (
                        <Ionicons name="home" size={size} color={'orange'} />
                    ),
                }}
            />
            <Tabs.Screen
                name="add-meal"
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ size }) => (
                        <Ionicons name="add-circle" size={size} color={'orange'} />
                    ),
                }}
            />
        </Tabs>
    );
}