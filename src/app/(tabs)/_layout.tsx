import AddMealIcon from '@/assets/svgs/add-meal.svg';
import HomeIcon from '@/assets/svgs/home.svg';
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        sceneStyle: { backgroundColor: 'white' },
        headerShown: true,
        headerTitleAlign: 'center',
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#FE8C00",
        tabBarInactiveTintColor: "#121A0F",
        tabBarStyle: { paddingTop: 4 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'My Meals',
          tabBarLabel: 'Home',
          tabBarIcon: ({ size, color }) => (
            <HomeIcon width={size} height={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="add-meal"
        options={{
          tabBarLabel: 'Add Meal',
          tabBarIcon: ({ size, color }) => (
            <AddMealIcon width={size} height={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}