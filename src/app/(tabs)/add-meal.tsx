import AddMealForm from "@/features/home/components/add-meal-form";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";

export default function AddMealScreen() {
    return (
        <KeyboardAvoidingView style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
        >
            <ScrollView
                contentContainerStyle={{ paddingBottom: 120 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}>
                <AddMealForm />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        paddingHorizontal: 24,
    }
});