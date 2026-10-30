import { Image, ImageSource, StyleSheet, View } from "react-native";

type Props = { source: ImageSource, width:number };

export default function SliderItem({ source, width }: Props) {
  return (
    <View style={{width: width}}>
      <Image source={source} style={styles.img} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    maxHeight: 180,
    borderRadius: 8,
  }
});