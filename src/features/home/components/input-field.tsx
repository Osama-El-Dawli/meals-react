
import { useState } from "react";
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

type Props = {
  title: string;
  placeholder?: string;
  numberOfLines?: number;
  keyboardType?: KeyboardTypeOptions;
  onChangeText?: ((text: string) => unknown);
  value?: string;
  error?: string;
};

export default function InputField({
  title,
  placeholder,
  numberOfLines = 1,
  keyboardType = 'default',
  value,
  error,
  onChangeText
}: Props) {
  const [isFocused, setIsFocused] = useState(false);

  const isMultiline = numberOfLines > 1;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        selectionHandleColor="#FE8C00"
        cursorColor="#FE8C00"
        placeholder={placeholder}
        multiline={isMultiline}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
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
          error && styles.inputError
        ]}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  inputError: {
    borderColor: '#E53935'
  },
  errorText: {
    fontSize: 12,
    color: '#E53935'
  }
});
