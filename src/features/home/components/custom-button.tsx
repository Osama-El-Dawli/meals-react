import { Pressable, StyleSheet, Text, View } from "react-native";

type CustomButtonProps = {
  text: string,
  onPress: () => void | Promise<void>
};

export default function CustomButton({ text, onPress }: CustomButtonProps) {


  return (
    <Pressable onPress={onPress} style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#FE8C00',
    width: '100%',
    borderRadius: 100,
    alignItems: 'center',
    padding: 16,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'medium',
  },
})
