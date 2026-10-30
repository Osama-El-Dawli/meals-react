
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  title: string;
  placeholder?: string;
  numberOfLines?: number;
};

export default function InputField({
  title,
  placeholder,
  numberOfLines = 1,
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const isMultiline = numberOfLines > 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        selectionHandleColor="#FE8C00"
        cursorColor="#FE8C00"
        placeholder={placeholder}
        multiline={isMultiline}
        numberOfLines={numberOfLines}
        textAlignVertical={isMultiline ? "top" : "center"}
        style={[
          styles.input,
          {
            height: isMultiline
              ? numberOfLines * 24 + 32
              : 52,
          },
          isFocused && styles.inputFocused,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    color: "#101010",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D6D6D6",
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
    fontWeight: "500",
    color: "#101010",
  },
  inputFocused: {
    borderColor: "#FE8C00",
  },
});
