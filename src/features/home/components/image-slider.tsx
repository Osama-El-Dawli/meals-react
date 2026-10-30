import { useTranslation } from "react-i18next";
import {
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
  View
} from "react-native";
import { Carousel } from "react-native-reanimated-carousel";
import SliderItem from "./slider-item";

type Props = {
  images: ImageSourcePropType[];
  autoPlay?: boolean;
  interval?: number;
};

export default function ImageSlider({
  images,
  autoPlay = true,
  interval = 5000,
}: Props) {
  const { width } = useWindowDimensions();
  const { i18n } = useTranslation()
  const height = 180;
  const isRtl = i18n.language === 'ar';

  return (
    <View style={styles.container}>
      <Carousel<ImageSourcePropType>
        data={images}
        autoplayDirection={isRtl ? 'backward' : 'forward'}
        style={{ width, height }}
        loop
        autoplay={autoPlay}
        autoplayInterval={interval}
        renderItem={({ item }) => (
          <SliderItem source={item} width={width} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});