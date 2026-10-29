import { Animated, StyleSheet, View } from "react-native";

type Props = {
  count: number;
  scrollProgress: Animated.Value;
};

export default function PageIndicator({
  count,
  scrollProgress,
}: Props) {
  return (
    <View style={styles.container}>
      {Array.from({ length: count }, (_, index) => {
        const backgroundColor = scrollProgress.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: ["#C2C2C2", "#FFFFFF", "#C2C2C2"],
          extrapolate: "clamp",
        });

        return (
          <Animated.View
            key={index}
            style={[styles.dot, { backgroundColor }]}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 80,
    marginBottom: 40,
  },
  dot: {
    width: 24,
    height: 8,
    borderRadius: 100,
  },
});