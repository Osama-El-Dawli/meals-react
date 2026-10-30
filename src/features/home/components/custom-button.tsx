import { StyleSheet, Text, View } from "react-native";

type CustomButtonProps = {
  text: string,
};

export default function CustomButton({ text }: CustomButtonProps) {


  return (
    <View style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </View>
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
