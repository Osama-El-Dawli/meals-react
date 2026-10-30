import { Image, ImageSource, StyleSheet, View } from "react-native";

type Props = { source: ImageSource };

export default function SliderItem({ source }: Props) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.img} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    width: '100%',
    maxHeight: 180,
    borderRadius: 8,
  }
});